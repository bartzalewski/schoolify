import React, { Component } from 'react';
import { storage } from '../../config/fbConfig';

export default class FeedUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			url: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}
	handleChange = e => {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			this.setState(() => ({ image }));
		}
	};
	handleUpload = () => {
		const { image } = this.state;
		const uploadTask = storage.ref(`images/feed/${image.name}`).put(image);
		uploadTask.on(
			'state_changed',
			error => {
				console.log(error);
			},
			() => {
				storage
					.ref('images/feed')
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						console.log(url);
						this.setState({ url });
					});
			}
		);
		uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			console.log('File available at', downloadURL);
			return downloadURL;
		});
	};
	render() {
		return (
			<>
				<input type="file" onChange={this.handleChange} />
				<button onClick={this.handleUpload}>upload</button>
			</>
		);
	}
}
