import { useReservations } from "@/application/hooks/useReservations";
import { useViewState } from "@/application/hooks/useViewState";
import { useRouter } from "next/router";
import { useEffect } from "react";
const { Students } = require("@/ui/pages/Students");

const StudentsPage = () => {
   const { students, reservations, isLoading } = useReservations();
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

  return <Students id={Number(router.query.id)} students={students} reservations={reservations} />;
};

export default StudentsPage;
