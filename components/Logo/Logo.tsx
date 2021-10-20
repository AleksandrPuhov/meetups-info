import { FC } from "react";
import styles from "./Logo.module.scss";
import MeetupIcon from "../../public/meetup_icon.svg";

const Logo: FC = () => {
	return (
		<div className={styles.LogoImg}>
			<MeetupIcon />
		</div>
	);
};

export default Logo;
