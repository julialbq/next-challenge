import { useReservations } from "../../application/hooks/useReservations";
import { useViewState } from "../../application/hooks/useViewState";
import { useEffect } from "react";
import { Calendar } from "../components/Calendar";
import cx from "./Students.module.scss";
import { filterReservationsByStudent } from "../../domain/filterReservationsByStudent";

export const Students = ({id}) => {
  const { reservations, students, isLoading } = useReservations();

  const { goToStudents } = useViewState();

  const hasSelectedStudent = id !== undefined;
  useEffect(() => {
    if (isLoading || hasSelectedStudent) {
      return;
    }

    const [firstStudent] = students;
    goToStudents(firstStudent.id);
  }, [students, isLoading]);

  if (!hasSelectedStudent) {
    return <>Loading...</>;
  }

  const selectedStudent = students.find(
    (courseTaker) => courseTaker.id === id
  );
  const selectedStudentReservations = filterReservationsByStudent(
    reservations,
    selectedStudent
  );

  const entries = selectedStudentReservations.map((reservation) => ({
    id: reservation.id,
    title: `${reservation.room.number} - ${reservation.room.name}`,
    dateStart: reservation.startDate,
    dateEnd: reservation.endDate,
    group: reservation.id,
  }));

  return (
    <>
      <div className={cx.placeSelectContainer}>
        <select
          value={id}
          onChange={(event) => goToStudents(Number(event.target.value))}
        >
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      <div className={cx.calendarContainer}>
        <Calendar entries={entries} />
      </div>
    </>
  );
};
