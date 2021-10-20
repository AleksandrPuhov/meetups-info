import MeetupsItem from "../MeetupsItem/MeetupsItem";

import styles from "./MeetupsList.module.scss";

const MeetupsList = () => {
	const list = [
		{
			id: 1,
			imgSrc: "",
			name: "Test1",
			info: "",
			date: "",
			users: [],
		},
	];

	return (
		<ul className={styles.MeetupsList}>
			<li>
				<MeetupsItem />
			</li>
		</ul>
	);
};

export default MeetupsList;
