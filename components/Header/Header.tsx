import React, { FC } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Header.module.scss";

const Header: FC = () => {
	return (
		<header className={styles.Header}>
			<Wrapper>
				<div className={styles.HeaderInner}>
					<Logo />
					<Navbar />
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
