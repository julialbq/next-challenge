import { useRouter } from "next/router";

export const useViewState = () => {
  const router = useRouter();

  const goToRooms = (id) => router.push(`/rooms/${id}`)

  const goToStudents = (id) => router.push(`/students/${id}`)

  const goToInventory = () => router.push("/inventory")
  return {
    goToRooms,
    goToStudents,
    goToInventory,
  };
};
