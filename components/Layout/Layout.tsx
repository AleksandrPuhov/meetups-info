import { FC } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: FC = ({ children }) => (
	<>
		<Header />
		<Wrapper>{children}</Wrapper>
		<Footer />
	</>
);

export default Layout;
