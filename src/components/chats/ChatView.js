import React, { Component } from 'react';

export default class ChatView extends Component {
	componentDidMount = () => {
		const container = document.getElementById('chatview-container');
		if (container) {
			container.scrollTo(0, container.scrollHeight);
		}
	};

	componentDidUpdate = () => {
		const container = document.getElementById('chatview-container');
		if (container) {
			container.scrollTo(0, container.scrollHeight);
		}
	};

	render() {
		const { chat, user } = this.props;

		if (chat === undefined) {
			return <main></main>;
		} else {
			return (
				<div className="chat-right-view">
					<div>
						<div className="chat-header">
							Your conversation with{' '}
							{chat.users.filter(_usr => _usr !== user)[0]}
						</div>
					</div>
					<main id="chatview-container">
						{chat.messages.map((_msg, _index) => {
							return (
								<div
									key={_index}
									className={_msg.sender === user ? 'user-sent' : 'friend-sent'}
								>
									{_msg.message}
								</div>
							);
						})}
					</main>
				</div>
			);
		}
	}
}
