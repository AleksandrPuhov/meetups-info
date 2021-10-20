import { FC } from "react";
import styles from "./Wrapper.module.scss";

const Wrapper: FC = ({ children }) => (
	<div className={styles.Wrapper}>{children}</div>
);

export default Wrapper;
