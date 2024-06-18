import Link from "next/link";

async function fetchArticles() {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=6`
	);

	return await response.json();
}

const ArticlesPage = async () => {
	const articles = await fetchArticles();
	console.log(articles);
	return (
		<div>
			{articles.map((article) => (
				<article key={article.id}>
					<Link href={`/articles/${article.title}`}>
						<h2>{article.title}</h2>
						<p>{article.body}</p>
					</Link>
				</article>
			))}
		</div>
	);
};

export default ArticlesPage;
