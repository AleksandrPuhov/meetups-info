import Image from "next/image";
import { IMeetup } from "../../types/meetup";
import styles from "./MeetupsItem.module.scss";

const MeetupsItem = ({ id, imgSrc, name, info, date, users }: IMeetup) => {
	return (
		<>
			<Image
				src={imgSrc}
				alt="Picture of the author"
				width={300}
				height={300}
			/>
			<p>{name}</p>
			<p>{info}</p>
			<p>{date}</p>
			{/* <p>users</p> */}
			<p>btn info routing</p>
		</>
	);
};

export default MeetupsItem;
