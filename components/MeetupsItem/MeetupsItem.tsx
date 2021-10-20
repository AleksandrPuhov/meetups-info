import Image from "next/image";
import { IMeetup } from "../../types/Meetup";
import styles from "./MeetupsItem.module.scss";

const MeetupsItem = ({ id, imgSrc, name, info, date, users }: IMeetup) => {
	return (
		<>
			<Image
				src=""
				alt="Picture of the author"
				// width={500} automatically provided
				// height={500} automatically provided
				// blurDataURL="data:..." automatically provided
				// placeholder="blur" // Optional blur-up while loading
			/>
			<p>img</p>
			<p>name</p>
			<p>info text</p>
			<p>date</p>
			<p>users</p>
			<p>btn info routing</p>
		</>
	);
};

export default MeetupsItem;
