import { useViewState } from "../../application/hooks/useViewState";
import { Calendar } from "../components/Calendar";
import cx from "./Rooms.module.scss";
import { filterReservationsByRoom } from "../../domain/filterReservationsByRoom";


export const Rooms = ({ id, rooms, reservations }) => {
  const { goToRooms } = useViewState();

  const selectedRoom = rooms.find((room) => room.id === id);
  const selectedRoomReservations = filterReservationsByRoom(
    reservations,
    selectedRoom
  );

  const calendarEntries = selectedRoomReservations.map((reservation) => ({
    id: reservation.id,
    title: reservation.student.name,
    dateStart: reservation.startDate,
    dateEnd: reservation.endDate,
    group: reservation.id,
  }));

  return (
    <>
      <div className={cx.placeSelectContainer}>
        <select
          value={id}
          onChange={(event) => goToRooms(Number(event.target.value))}
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.number} - {room.name}
            </option>
          ))}
        </select>
      </div>

      <div className={cx.calendarContainer}>
        <Calendar entries={calendarEntries} />
      </div>
    </>
  );
};
