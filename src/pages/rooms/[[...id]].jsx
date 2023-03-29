import { useReservations } from "@/application/hooks/useReservations";
import { useViewState } from "@/application/hooks/useViewState";
import { Rooms } from "@/ui/pages/Rooms";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RoomsPage = () => {
  const { rooms, reservations, isLoading } = useReservations();
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

export default RoomsPage;
