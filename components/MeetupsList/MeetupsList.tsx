import { FC } from "react";
import { IMeetup } from "../../types/meetup";
import MeetupsItem from "../MeetupsItem/MeetupsItem";

import styles from "./MeetupsList.module.scss";

type MeetupsListTypeProps = {
	meetupsList: [IMeetup];
};

const MeetupsList: FC<MeetupsListTypeProps> = ({ meetupsList }) => {
	return (
		<ul className={styles.MeetupsList}>
			{meetupsList &&
				meetupsList.map((meetup) => (
					<li key={meetup.id}>
						<MeetupsItem {...meetup} />
					</li>
				))}
		</ul>
	);
};

export default MeetupsList;
