import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../images/add.svg';
import zszbg from '../images/schools/backgrounds/zsz-zabk-bg.jpg';
import zszlogo from '../images/schools/logos/zsz-zabk-logo.gif';
import lobg from '../images/schools/backgrounds/lo-zabk-bg.jpg';
import lologo from '../images/schools/logos/lo-zabk-logo.jpg';
import sp3bg from '../images/schools/backgrounds/sp3-zabk-bg.jpg';
import sp3logo from '../images/schools/logos/sp3-zabk-logo.jpg';
import p4bg from '../images/schools/backgrounds/p4-zabk-bg.jpg';
import p4logo from '../images/schools/logos/p4-zabk-logo.jpg';
import { ReactComponent as User } from '../images/user.svg';
import PostList from '../components/posts/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const StyledNews = styled.section`
	width: 50vw;
	height: fit-content;
	background: #ececf0;
	padding: 40px;

	.school-title {
		font-size: 1.625rem;
		font-weight: 600;
		user-select: none;
	}

	.school-list {
		font-size: 1.4375rem;
		color: #fe843f;
		font-weight: 400;
		text-decoration: none;
		transition: 0.2s;
		user-select: none;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.home-wrapper {
		display: flex;
		justify-content: space-between;
	}

	.box {
		width: 19.5%;
		height: 250px;
		background-color: white;
		border-radius: 15px;
		border: 1px solid #d2d2d2;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.container {
		width: 100%;
		height: 250px;
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.school-bg {
		width: 100%;
		height: 250px;
		border-radius: 15px;
		user-select: none;
	}

	.school-logo {
		width: 50px;
		height: 50px;
		position: absolute;
		border-radius: 100px;
		margin: 0.5em;
		user-select: none;
	}

	.add {
		width: 75px;
		height: 75px;
		margin-top: 2rem;
	}

	.box-add {
		text-align: center;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}

	.add-title {
		font-size: 1.125rem;
		font-weight: 600;
		user-select: none;
	}

	.wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.add-post,
	.posts-list {
		background: #fff;
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		border-radius: 15px;
		margin-top: 3rem;
	}

	.posts-btn {
		background: #f3f3f5;
		border: 1px solid #d2d2d2;
		border-radius: 15px;
		margin: 0;
		height: 40px;
		width: 70%;
		font-size: 1.125rem;
		text-decoration: none;
		color: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.posts-wrapper {
		margin-top: -80px;
	}

	.posts-list {
		height: fit-content;
		display: block;
		padding: 25px;
	}

	.posts-logo {
		margin: 0;
	}

	.posts-title {
		margin-left: 3.5rem;
		font-size: 1.1875rem;
	}

	.posts-time {
		position: absolute;
		margin-left: 3.5rem;
		font-size: 1.0625rem;
		color: #9b9b9b;
	}

	.posts-desc {
		margin-top: 3rem;
		text-align: justify;
		font-size: 18px;
	}

	.posts-img {
		width: 100%;
		margin-top: 1rem;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.school-title {
			padding-left: 20px;
			padding-top: 20px;
		}

		.school-list {
			padding-right: 20px;
			padding-top: 20px;
		}

		.container {
			padding: 20px;
		}

		.wrapper {
			padding: 20px;
		}

		.add-post {
			margin-top: 1.5rem;
		}

		.posts-list {
			margin-top: 1.5rem;
		}
	}

	@media (max-width: 1124px) {
		width: 80%;
	}

	@media (max-width: 813px) {
		width: 100%;

		.school-title {
			padding-left: 10px;
			padding-top: 10px;
		}

		.school-list {
			padding-right: 10px;
			padding-top: 10px;
		}

		.container {
			padding: 10px;
		}

		.wrapper {
			padding: 10px;
		}

		.add-post {
			width: 100%;
			margin-top: 2rem;
			margin-bottom: 1rem;
		}

		.posts-list {
			width: 100%;
			margin-top: 1rem;
		}

		.add {
			width: 40px;
			height: 40px;
		}

		.school-logo {
			width: 40px;
			height: 40px;
		}

		.user-logo {
			width: 30px;
			height: 30px;
		}
	}

	@media (max-width: 478px) {
		.posts-title {
			font-size: 1rem;
		}
		.posts-time {
			font-size: 0.9rem;
		}
		.posts-desc {
			font-size: 0.8rem;
		}
		.posts-btn {
			font-size: 0.9rem;
		}
		.add-title {
			font-size: 0.9rem;
		}
	}
`;

class News extends Component {
	render() {
		const { posts, auth } = this.props;
		if (!auth.uid) return <Redirect to="/" />;
		return (
			<StyledNews>
				<div className="home-wrapper">
					<h1 className="school-title">Browse schools</h1>
					<Link to="/school-list" className="school-list">
						See All
					</Link>
				</div>
				<div className="container">
					<div className="box">
						<img className="school-logo" src={zszlogo} alt="zsz logo" />
						<img className="school-bg" src={zszbg} alt="zsz background" />
					</div>
					<div className="box">
						<img className="school-logo" src={lologo} alt="lo logo" />
						<img className="school-bg" src={lobg} alt="lo background" />
					</div>
					<div className="box">
						<img className="school-logo" src={sp3logo} alt="sp3 logo" />
						<img className="school-bg" src={sp3bg} alt="sp3 background" />
					</div>
					<div className="box">
						<img className="school-logo" src={p4logo} alt="p4 logo" />
						<img className="school-bg" src={p4bg} alt="p4 background" />
					</div>
					<Link to="/add" className="box box-add">
						<div className="box-wrapper">
							<h1 className="add-title">Add your school!</h1>
							<Add className="add" />
						</div>
					</Link>
				</div>
				<div className="wrapper">
					<div className="add-post">
						<User className="user-logo" />
						<Link to="/create" className="posts-btn">
							Add a post
						</Link>
						<User className="user-logo" />
					</div>
				</div>
				<PostList posts={posts} />
			</StyledNews>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.firestore.ordered.posts,
		auth: state.firebase.auth
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'posts', orderBy: ['createdAt', 'desc'] }])
)(News);
