import headerStyles from "../../../styles/Header.module.css";

function Header() {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Tech Pro Bem</span> News
			</h1>
			<p className={headerStyles.description}>Últimas notícias!</p>
		</div>
	);
}

export default Header;
