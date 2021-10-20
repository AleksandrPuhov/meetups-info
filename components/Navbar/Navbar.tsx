import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

const navigation = [
	{ id: 1, title: "Home", path: "/" },
	{ id: 2, title: "Sign In", path: "/login" },
];

const Navbar: FC = () => {
	const { pathname } = useRouter();

	return (
		<nav className={styles.Navbar}>
			<ul className={styles.NavbarList}>
				{navigation.map(({ id, title, path }) => (
					<li key={id}>
						<Link href={path}>
							<a
								className={
									pathname === path
										? styles.NavbarLinkActive
										: styles.NavbarLinkBase
								}
							>
								{title}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
