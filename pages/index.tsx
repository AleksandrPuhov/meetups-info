import type { GetStaticProps } from "next";
import { FC } from "react";
import MeetupsList from "../components/MeetupsList/MeetupsList";
import { MEETUPS_LIST } from "../mock/mock-data";
import styles from "../styles/Index.module.scss";
import { IMeetup } from "../types/meetup";

type MeetupsListTypeProps = {
	meetupsList: [IMeetup];
};

export const getStaticProps: GetStaticProps = async (context) => {
	// const response = await fetch("https://jsonplaceholder.typicode.com/users");
	// const data = await response.json();

	const data = await MEETUPS_LIST;

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { meetupsList: data },
	};
};

const Index: FC<MeetupsListTypeProps> = ({ meetupsList }) => {
	return (
		<>
			<p>search by name and by date</p>
			<MeetupsList meetupsList={meetupsList} />
		</>
	);
};

export default Index;
