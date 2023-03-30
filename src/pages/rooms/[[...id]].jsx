import { useViewState } from "@/application/hooks/useViewState";
import { fetchReservations } from "@/infrastructure/inner/fetchReservations";
import { Rooms } from "@/ui/pages/Rooms";
import { uniqBy } from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RoomsPage = ({ reservations, rooms, isLoading }) => {
  const { goToRooms } = useViewState();
  const router = useRouter();
  const hasSelectedRoom = router.query.id !== undefined;

  useEffect(() => {
    if (isLoading || hasSelectedRoom) {
      return;
    }
    const [firstRoom] = rooms;

    goToRooms(firstRoom.id);
  }, [isLoading, reservations, hasSelectedRoom]);

  if (isLoading || !hasSelectedRoom) {
    return <>Loading...</>;
  }

  return (
    <Rooms
      id={Number(router.query.id)}
      rooms={rooms}
      reservations={reservations}
    />
  );
};

export async function getServerSideProps() {
  const data = await fetchReservations();
  const reservations = JSON.parse(JSON.stringify(data))

  const rooms = reservations
    ? uniqBy(
        reservations.map((reservation) => reservation.room),
        "id"
      )
    : undefined;
  const isLoading = reservations === undefined;

  return {
    props: { reservations, rooms, isLoading },
  };
}

export default RoomsPage;
