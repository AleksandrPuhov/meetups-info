import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>My meetups</title>
		</Head>
		<Layout>
			<main>
				<Component {...pageProps} />
			</main>
		</Layout>
	</>
);

export default MyApp;
