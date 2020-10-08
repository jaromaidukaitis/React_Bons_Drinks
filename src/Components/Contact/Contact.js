import React, {Component} from 'react';
import contactPic from '../../img/contact-pic.jpg';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<h2>Contato</h2>
				<div>
					<img src={contactPic} alt="" />
					<form action="">
						<label for="name">Nome</label>
						<input type="text" name="name" id="formName" />
						<label for="email">Email</label>
						<input type="email" name="email" id="formEmail" />
						<label for="message">Mensagem</label>
						<textarea name="message" id="formMessage" cols="30" rows="10" />
					</form>
				</div>
			</div>
		);
	}
}

export default Home;
