import cx from "./Header.module.scss";
import { useViewState } from "../../application/hooks/useViewState";
import Link from "next/link";

export const Header = () => {
  
  return (
    <header className={cx.header}>
      <h1 className={cx.title}>Sistema Interno</h1>

      <nav className={cx.navbar}>
        <ul className={cx.navbarList}>
          <Link href={`/rooms`}>
            <li className={cx.navbarListItem}>
              Salas
            </li>
          </Link>
          <Link href={`/students/`}>
            <li className={cx.navbarListItem}>
              Alunos
            </li>
          </Link>
          <Link href="/inventory">
            <li className={cx.navbarListItem}>
              Inventário
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
