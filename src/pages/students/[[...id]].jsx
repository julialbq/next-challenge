import { useViewState } from "@/application/hooks/useViewState";
import { fetchReservations } from "@/infrastructure/inner/fetchReservations";
import { uniqBy } from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
const { Students } = require("@/ui/pages/Students");

const StudentsPage = ({ reservations, students, isLoading }) => {
  const { goToStudents } = useViewState();
  const router = useRouter();

  const hasSelectedStudent = router.query.id !== undefined;

  useEffect(() => {
    if (isLoading || hasSelectedStudent) {
      return;
    }
    const [firstStudent] = students;

    goToStudents(firstStudent.id);
  }, [isLoading, reservations, hasSelectedStudent]);

  if (isLoading || !hasSelectedStudent) {
    return <>Loading...</>;
  }

  return (
    <Students
      id={Number(router.query.id)}
      students={students}
      reservations={reservations}
    />
  );
};

export async function getServerSideProps() {
  const data = await fetchReservations();
  const reservations = JSON.parse(JSON.stringify(data));

  const students = reservations
    ? uniqBy(
        reservations.map((reservation) => reservation.student),
        "id"
      )
    : undefined;

  const isLoading = reservations === undefined;

  return {
    props: { reservations, students, isLoading },
  };
}

export default StudentsPage;
