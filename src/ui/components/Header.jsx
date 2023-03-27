import cx from "./Header.module.scss";
import { useViewState } from "../../application/hooks/useViewState";
import Link from "next/link";

export const Header = () => {
  const { goToRooms, goToStudents, goToInventory } = useViewState();

  return (
    <header className={cx.header}>
      <h1 className={cx.title}>Sistema Interno</h1>

      <nav className={cx.navbar}>
        <ul className={cx.navbarList}>
          <Link href={`/`}>
            <li onClick={() => goToRooms()} className={cx.navbarListItem}>
              Salas
            </li>
          </Link>
          <Link href={`/students/`}>
            <li onClick={() => goToStudents()} className={cx.navbarListItem}>
              Alunos
            </li>
          </Link>
          <Link href="/inventory">
            <li onClick={() => goToInventory()} className={cx.navbarListItem}>
              Inventário
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
