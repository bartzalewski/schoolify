import React, { Component } from 'react';
import styled from 'styled-components';

const StyledChatTextBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	float: right;
	clear: both;

	input {
		width: 75%;
		border-radius: 15px;
		border: none;
		background: #ececf0;
	}

	button {
		border: none;
		background: #ececf0;
		border-radius: 15px;
		width: 20%;
		cursor: pointer;
	}
`;

export default class ChatTextBox extends Component {
	constructor() {
		super();
		this.state = {
			chatText: ''
		};
	}

	userTyping = e => {
		e.keyCode === 13
			? this.submitMessage()
			: this.setState({ chatText: e.target.value });
	};

	userClickedInput = () => this.props.messageReadFn();

	submitMessage = () => {
		if (this.messageValid(this.state.chatText)) {
			this.props.submitMessageFn(this.state.chatText);
			document.getElementById('chat-text-box').value = '';
		}
	};

	messageValid = txt => txt && txt.replace(/\s/g, '').length;

	render() {
		return (
			<StyledChatTextBox>
				<input
					type="text"
					autoComplete="off"
					id="chat-text-box"
					className="text-field"
					placeholder="Type your message..."
					onKeyUp={e => this.userTyping(e)}
					onFocus={this.userClickedInput}
				></input>
				<button onClick={this.submitMessage}>send</button>
			</StyledChatTextBox>
		);
	}
}
