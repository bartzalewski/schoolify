import React, { Component } from 'react';
import styled from 'styled-components';

const StyledChatTextBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	float: right;
	clear: both;

	input {
		width: 85%;
		border-radius: 15px;
		border: none;
		background: #ececf0;
	}

	input:focus::placeholder {
		color: #293347;
	}

	button {
		border: none;
		width: 0.00001px;
		height: 0.00001px;
		visibility: hidden;
	}

	svg {
		cursor: pointer;
		transition: 0.2s;

		&:hover {
			fill: #fe843f;
			transition: 0.2s;
		}
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

	handleSubmit = () => {
		const submitBtn = document.getElementById('submit-message-btn');
		submitBtn.click();
	};

	componentDidUpdate() {
		this.nameInput.focus();
	}

	componentDidMount() {
		this.nameInput.focus();
	}

	render() {
		return (
			<StyledChatTextBox>
				<input
					type="text"
					autoComplete="off"
					autoFocus
					ref={input => {
						this.nameInput = input;
					}}
					id="chat-text-box"
					className="text-field"
					placeholder="Type your message..."
					onKeyUp={e => this.userTyping(e)}
					onFocus={this.userClickedInput}
				></input>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					onClick={this.handleSubmit}
					xmlns="http://www.w3.org/2000/svg"
					className="submit-message-icon"
				>
					<g clip-path="url(#clip0)">
						<path d="M39.6188 20.3737C39.6388 20.3476 39.6575 20.322 39.6731 20.2924C39.6905 20.2602 39.7031 20.2276 39.7149 20.1933C39.7214 20.1746 39.7327 20.1589 39.7375 20.1393C39.7405 20.1267 39.7379 20.1137 39.7397 20.1006C39.7453 20.0663 39.7458 20.0319 39.7458 19.9963C39.7458 19.9606 39.7445 19.9262 39.7384 19.8914C39.7362 19.8788 39.7388 19.8667 39.7358 19.8549C39.731 19.8353 39.7192 19.8201 39.7127 19.8014C39.7005 19.7658 39.687 19.7323 39.6692 19.6997C39.6536 19.6727 39.6357 19.6488 39.6166 19.6244C39.594 19.5957 39.5709 19.5692 39.544 19.5448C39.5187 19.5222 39.4909 19.504 39.4618 19.4861C39.4435 19.4748 39.4296 19.4583 39.4096 19.4487L13.7517 6.83725C13.5204 6.72244 13.2412 6.76593 13.0546 6.94554C12.8681 7.12514 12.8137 7.40216 12.9194 7.63917L18.4241 20.0141L13.3443 32.82C13.2538 33.0487 13.3086 33.3088 13.4812 33.4814C13.4886 33.4888 13.4956 33.4958 13.5034 33.5027C13.6939 33.6749 13.9705 33.7106 14.1984 33.5932L39.4213 20.5468C39.4392 20.5377 39.4518 20.5225 39.4683 20.5111C39.4979 20.492 39.5253 20.4724 39.5509 20.4485C39.5762 20.425 39.5979 20.4007 39.6188 20.3737ZM14.7328 8.68897L36.4937 19.3848L19.4908 19.3848L14.7328 8.68897ZM15.0938 31.7445L19.5087 20.6151L36.6111 20.6147L15.0938 31.7445Z" />
						<path d="M13.6617 20.0006C13.6617 19.6605 13.3869 19.3857 13.0468 19.3857L0.870189 19.3857C0.530114 19.3857 0.255271 19.6605 0.255271 20.0006C0.255271 20.1702 0.323981 20.3242 0.43531 20.4355C0.546639 20.5468 0.700587 20.6155 0.87019 20.6155L13.0468 20.6155C13.3869 20.6155 13.6617 20.3407 13.6617 20.0006Z" />
						<path d="M11.7418 24.1689L5.65348 24.1689C5.3134 24.1689 5.03856 24.4438 5.03856 24.7838C5.03856 24.9535 5.10727 25.1074 5.2186 25.2187C5.32993 25.3301 5.48388 25.3988 5.65348 25.3988L11.7418 25.3988C12.0819 25.3988 12.3567 25.1239 12.3567 24.7838C12.3567 24.4438 12.0819 24.1689 11.7418 24.1689Z" />
						<path d="M5.21909 15.6518C5.33042 15.7631 5.48437 15.8318 5.65398 15.8318L11.7423 15.8318C12.0823 15.8318 12.3572 15.557 12.3572 15.2169C12.3572 14.8769 12.0823 14.602 11.7423 14.602L5.65397 14.602C5.3139 14.602 5.03906 14.8768 5.03906 15.2169C5.03906 15.3865 5.10777 15.5405 5.21909 15.6518Z" />
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="40" height="40" />
						</clipPath>
					</defs>
				</svg>
				<button id="submit-message-btn" onClick={this.submitMessage}></button>
			</StyledChatTextBox>
		);
	}
}
