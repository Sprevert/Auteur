import Head from 'next/head'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { mainListItems, secondaryListItems } from '../components/listItems';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Portail Auteur</title>
				<link rel="icon" href="/favicon.ico" />

				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<main>
				<h1 className="title">
					Portail Auteur
				</h1>
				<List>{mainListItems}</List>
				<Button variant="contained" color="primary">
					Hello World
				</Button>
				<p className="description">
					Get started by editing <code>pages/index.js</code>
				</p>


			</main>

			<footer>

			</footer>

		</div>
	)
}
