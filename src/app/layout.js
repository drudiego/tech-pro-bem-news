import { Inter } from "next/font/google";
import "./globals.css";
import styles from "../../styles/layout.module.css";
import Nav from "../components/Nav";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Tech Pro Bem News",
	description: "Projeto em Next.js para a Tech Pro Bem",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Nav />
				<div className={styles.container}>
					<main className={styles.main}>
						<Header />
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
