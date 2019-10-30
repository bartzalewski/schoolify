import React, { Component } from 'react';
import styled from 'styled-components';

const StyledChatList = styled.div`
	.list-item {
		display: flex;
		background: white;
		border-radius: 10px;
		width: 95%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 5px 15px;
		margin-top: 0.25rem;
		transition: 0.2s;
		font-size: 0.9rem;
		cursor: pointer;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.list-item-selected {
		background: #ececf0;
	}

	.list-item-avatar {
		width: 40px;
		height: 40px;
		background: #aaa;
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.list-item-user {
		font-weight: 600;
		margin-left: 1rem;
	}

	.list-item-fragment {
		font-weight: 400;
	}

	.btn {
		border-radius: 10px;
		background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
		color: #fff;
		font-weight: 600;
		border: none;
		height: 50px;
		width: 95%;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 10px 25px;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	@media (max-width: 1359px) {
		.list-item-user,
		.list-item-avatar {
			font-size: 0.8rem;
		}
		.list-item-avatar {
			width: 30px;
			height: 30px;
		}
		.btn {
			font-size: 0.8rem;
		}
	}
`;

export default class ChatList extends Component {
	newChat = () => {
		this.props.newChatBtnFn();
	};

	selectChat = index => {
		this.props.selectChatFn(index);
	};

	userIsSender = chat =>
		chat.messages[chat.messages.length - 1].sender === this.props.userEmail;

	render() {
		if (this.props.chats.length > 0) {
			return (
				<StyledChatList>
					<button className="btn" onClick={this.newChat}>
						New Message
					</button>
					<div className="list">
						{this.props.chats.map((_chat, _index) => {
							return (
								<div key={_index}>
									<div
										className={
											this.props.selectedChatIndex === _index
												? 'list-item-selected list-item'
												: 'list-item'
										}
										onClick={() => this.selectChat(_index)}
									>
										<div className="list-item-avatar">
											{
												_chat.users
													.filter(_user => _user !== this.props.userEmail)[0]
													.split('')[0]
											}
										</div>
										<div className="list-item-user">
											{
												_chat.users.filter(
													_user => _user !== this.props.userEmail
												)[0]
											}{' '}
											{
												<div className="list-item-fragment">
													<span>
														{_chat.messages[
															_chat.messages.length - 1
														].message.substring(0, 30)}
													</span>
												</div>
											}
										</div>
										{_chat.receiverHasRead === false &&
										!this.userIsSender(_chat) ? (
											<div className="list-item-icon">
												<div className="notification-important"></div>
											</div>
										) : null}
									</div>
									<div className="divider"></div>
								</div>
							);
						})}
					</div>
				</StyledChatList>
			);
		} else {
			return (
				<div>
					<button className="btn" onClick={this.newChat}>
						New Message
					</button>
					<div className="list"></div>
				</div>
			);
		}
	}
}
