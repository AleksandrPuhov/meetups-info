import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/404.module.scss";

const Error = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, [router]);

	return (
		<div className={styles.Error}>
			<p>Something is going wrong...</p>
			<p>Redirect to Home Page.</p>
		</div>
	);
};

export default Error;
