import React, { Component } from 'react';
import styled from 'styled-components';
import ChatList from '../components/chats/ChatList';
import ChatView from '../components/chats/ChatView';
import ChatTextBox from '../components/chats/ChatTextBox';
import NewChat from '../components/chats/NewChat';
import { db } from '../config/fbConfig';
import firebase from '../config/fbConfig';

const StyledChat = styled.section`
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 2rem;

		.box {
			background: #fff;
			border-radius: 15px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 14vw;
			padding: 1rem;
			transition: 0.2s;

			&:hover {
				transition: 0.2s;
			}

			img {
				width: 100%;
				height: 20vh;
			}

			a {
				text-decoration: none;
				margin-top: 2rem;
				color: inherit;
			}
		}
	}

	.chat-wrapper {
		margin-top: 2rem;
		background: #fff;
		padding: 25px;
		border-radius: 15px;
		display: flex;
		max-height: calc(100vh - 100px - 39px - 32.5px - 32px - 48px);
		position: relative;
		overflow: hidden;
	}

	#chatview-container {
		overflow-y: scroll;
		height: 88%;
		margin-right: -50px;
		padding-right: 33px;

		div {
			@media (max-width: 1359px) {
				font-size: 0.8rem;
			}
		}
	}

	#chat-input-email,
	#chat-input-msg {
		width: 100%;
		font-size: 1rem;
		border: none;
		border-radius: 10px;
		padding: 10px 15px;
		margin: 0.125rem 0;
		background: #ececf0;
	}

	.new-chat-title {
		text-align: center;
		transform: none !important;
		transition: none !important;
		cursor: initial;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		color: inherit;
	}

	.btn-chat-submit {
		margin-top: 0.125rem;
		font-size: 0.9rem;
		background: #ececf0;
		color: inherit;
	}

	.user-sent {
		background-color: #ececf0;
		float: right;
		border-radius: 10px;
		padding: 2.5px 10px;
		word-wrap: break-word;
		clear: both;
		margin-top: 5px;
	}

	.friend-sent {
		background-color: #ececf0;
		float: left;
		border-radius: 10px;
		padding: 2.5px 10px;
		word-wrap: break-word;
		clear: both;
		margin-top: 5px;
	}

	.chat-left,
	.chat-right {
		width: 50%;
		position: relative;
	}

	.chat-right {
		display: flex;
		flex-direction: column;
	}

	.chat-right-view {
		overflow: hidden;
		height: 100%;
	}

	.chat-header {
		text-align: center;

		span {
			font-weight: 600;
		}

		@media (max-width: 1359px) {
			font-size: 0.8rem;
		}
	}

	p {
		margin-top: 2rem;
	}

	@media (max-width: 1359px) {
		.chat-wrapper {
			height: calc(100vh - 60px - 39px - 32.5px - 32px - 33px);
		}
		#chat-input-email,
		#chat-input-msg,
		.btn-chat-submit,
		.new-chat-title {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 1124px) {
		.wrapper {
			display: flex;
			flex-direction: column;

			.box {
				margin-top: 1rem;
				width: 100% !important;
			}
		}
	}
`;

class Chat extends Component {
	constructor() {
		super();
		this.state = {
			selectedChat: null,
			newChatFormVisible: false,
			email: null,
			chats: [],
		};
	}

	selectChat = async (chatIndex) => {
		await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
		this.messageRead();
	};

	newChatBtnClicked = () =>
		this.setState({ newChatFormVisible: true, selectedChat: null });

	submitMessage = (msg) => {
		const docKey = this.buildDocKey(
			this.state.chats[this.state.selectedChat].users.filter(
				(_usr) => _usr !== this.state.email
			)[0]
		);
		db.collection('chats')
			.doc(docKey)
			.update({
				messages: firebase.firestore.FieldValue.arrayUnion({
					sender: this.state.email,
					message: msg,
					timestamp: Date.now(),
				}),
				receiverHasRead: false,
			});
	};

	buildDocKey = (friend) => [this.state.email, friend].sort().join(':');

	clickedChatWhereNotSender = (chatIndex) =>
		this.state.chats[chatIndex].messages[
			this.state.chats[chatIndex].messages.length - 1
		].sender !== this.state.email;

	messageRead = () => {
		const chatIndex = this.state.selectedChat;
		const docKey = this.buildDocKey(
			this.state.chats[chatIndex].users.filter(
				(_usr) => _usr !== this.state.email
			)[0]
		);
		if (this.clickedChatWhereNotSender(chatIndex)) {
			firebase
				.firestore()
				.collection('chats')
				.doc(docKey)
				.update({ receiverHasRead: true });
		}
	};

	goToChat = async (docKey, msg) => {
		const usersInChat = docKey.split(':');
		const chat = this.state.chats.find((_chat) =>
			usersInChat.every((_user) => _chat.users.includes(_user))
		);
		this.setState({ newChatFormVisible: false });
		await this.selectChat(this.state.chats.indexOf(chat));
		this.submitMessage(msg);
	};

	newChatSubmit = async (chatObj) => {
		const docKey = this.buildDocKey(chatObj.sendTo);
		await firebase
			.firestore()
			.collection('chats')
			.doc(docKey)
			.set({
				receiverHasRead: false,
				users: [this.state.email, chatObj.sendTo],
				messages: [
					{
						message: chatObj.message,
						sender: this.state.email,
					},
				],
			});
		this.setState({
			newChatFormVisible: false,
		});
		this.selectChat(this.state.chats.length - 1);
	};

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(async (_usr) => {
			if (!_usr) {
				this.props.history.push('/');
			} else {
				await db
					.collection('chats')
					.where('users', 'array-contains', _usr.email)
					.onSnapshot(async (res) => {
						const chats = res.docs.map((_doc) => _doc.data());
						await this.setState({
							email: _usr.email,
							chats: chats,
						});
					});
			}
		});
	};

	render() {
		return (
			<StyledChat className="site-container">
				<div className="container">
					<h1>Chat</h1>
					<div className="chat-wrapper">
						<div className="chat-left">
							<ChatList
								history={this.props.history}
								newChatBtnFn={this.newChatBtnClicked}
								selectChatFn={this.selectChat}
								chats={this.state.chats}
								userEmail={this.state.email}
								selectedChatIndex={this.state.selectedChat}
							/>
						</div>
						<div className="chat-right">
							{this.state.newChatFormVisible ? null : (
								<ChatView
									user={this.state.email}
									chat={this.state.chats[this.state.selectedChat]}
								/>
							)}
							{this.state.selectedChat !== null &&
							!this.state.newChatFormVisible ? (
								<ChatTextBox
									messageReadFn={this.messageRead}
									submitMessageFn={this.submitMessage}
								/>
							) : null}
							{this.state.newChatFormVisible ? (
								<NewChat
									goToChatFn={this.goToChat}
									newChatSubmitFn={this.newChatSubmit}
								/>
							) : null}
						</div>
					</div>
				</div>
			</StyledChat>
		);
	}
}

export default Chat;
