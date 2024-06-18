import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	// console.log(articles);
	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
}

// export const getStaticProps = async () => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?_limit=6`
// 	);
// 	const articles = await res.json();
// 	return { props: { articles } };
// };
