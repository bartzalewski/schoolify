import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from '../../config/fbConfig';

const StyledNewChat = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export default class NewChat extends Component {
	constructor() {
		super();
		this.state = {
			username: null,
			message: null
		};
	}

	userTyping = (type, e) => {
		switch (type) {
			case 'username':
				this.setState({ username: e.target.value });
				break;

			case 'message':
				this.setState({ message: e.target.value });
				break;

			default:
				break;
		}
	};

	submitNewChat = async e => {
		e.preventDefault();
		const userExists = await this.userExists();
		if (userExists) {
			const chatExists = await this.chatExists();
			chatExists ? this.goToChat() : this.createChat();
		}
	};

	createChat = () => {
		this.props.newChatSubmitFn({
			sendTo: this.state.username,
			message: this.state.message
		});
	};

	goToChat = () =>
		this.props.goToChatFn(this.buildDocKey(), this.state.message);

	buildDocKey = () => {
		return [firebase.auth().currentUser.email, this.state.username]
			.sort()
			.join(':');
	};

	chatExists = async () => {
		const docKey = this.buildDocKey();
		const chat = await firebase
			.firestore()
			.collection('chats')
			.doc(docKey)
			.get();
		console.log(chat.exists);
		return chat.exists;
	};

	userExists = async () => {
		const usersSnapshot = await firebase
			.firestore()
			.collection('users')
			.get();
		const exists = usersSnapshot.docs
			.map(_doc => _doc.data().email)
			.includes(this.state.username);
		this.setState({ serverError: !exists });
		return exists;
	};

	render() {
		return (
			<StyledNewChat>
				<h3 className="btn new-chat-title">Send a message!</h3>
				<form onSubmit={e => this.submitNewChat(e)}>
					<label>
						<input
							id="chat-input-email"
							type="text"
							autoComplete="off"
							onChange={e => this.userTyping('username', e)}
							placeholder="Your friend's email"
						/>
					</label>
					<label>
						<input
							id="chat-input-msg"
							type="text"
							autoComplete="off"
							onChange={e => this.userTyping('message', e)}
							placeholder="Your message"
						/>
					</label>
					<button className="btn btn-chat-submit" type="submit">
						Submit
					</button>
				</form>
			</StyledNewChat>
		);
	}
}
