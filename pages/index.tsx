import type { NextPage } from "next";
import MeetupsList from "../components/MeetupsList/MeetupsList";
import styles from "../styles/Index.module.scss";

const Index: NextPage = () => {
	return (
		<>
			<p>search by name and by date</p>
			<MeetupsList />
		</>
	);
};

export default Index;
