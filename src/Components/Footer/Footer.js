import React, {Component} from 'react';
import style from './Footer.module.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className={style.fontStyle}>
				<p>Resilia 2020</p>
				<p>Alguns recursos reservados</p>
			</footer>
		);
	}
}
