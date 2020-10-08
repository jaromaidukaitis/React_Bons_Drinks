import React, {Component} from 'react';
import style from './Header.module.css';

export default class Header extends Component {
	render() {
		return (
			<header className={style.fontStyle}>
				<nav>
					<ul>
						<li>Drinks</li>
						<li>Sobre Nós</li>
						<li>Bons Drinks</li>
						<li>Nosso Time</li>
						<li>Contato</li>
					</ul>
				</nav>
			</header>
		);
	}
}
