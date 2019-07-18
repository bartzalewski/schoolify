import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../images/add.svg';
import zszbg from '../images/zsz.jpg';
import zszlogo from '../images/zszlogo.gif';
import lobg from '../images/lo.jpg';
import lologo from '../images/lologo.jpg';
import sp3bg from '../images/sp3.jpg';
import sp3logo from '../images/sp3logo.jpg';
import p4bg from '../images/p4.jpg';
import p4logo from '../images/p4logo.jpg';
import zszfeed from '../images/zszfeed.jpg';
import { ReactComponent as User } from '../images/user.svg';

const StyledNews = styled.section`
	width: 50vw;
	height: 300vh;
	background: #ececf0;

	.school-title {
		padding-left: 40px;
		padding-top: 40px;
		font-size: 1.625rem;
		font-weight: 600;
	}

	.school-list {
		font-size: 23px;
		color: #fe843f;
		font-weight: 400;
		padding-right: 40px;
		padding-top: 40px;
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
	}

	.container {
		width: 100%;
		height: 250px;
		display: flex;
		justify-content: space-between;
		padding: 40px;
	}

	.school-bg {
		width: 100%;
		height: 250px;
		border-radius: 15px;
	}

	.school-logo {
		width: 50px;
		height: 50px;
		position: absolute;
		border-radius: 100px;
		margin: 0.5em;
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
	}

	.add-title {
		font-size: 18px;
		font-weight: 600;
	}

	.wrapper {
		width: 100%;
		padding: 40px;
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

	.posts-input {
		background: #f3f3f5;
		border: 1px solid #d2d2d2;
		border-radius: 15px;
		margin: 0;
		height: 40px;
		width: 70%;
		text-align: center;
		font-size: 18px;
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
		font-size: 19px;
	}

	.posts-time {
		position: absolute;
		margin-left: 3.5rem;
		font-size: 17px;
		color: #9b9b9b;
	}

	.posts-desc {
		margin-top: 3rem;
		text-align: justify;
		font-size: 18px;
	}

	.posts-img {
		width: 100%;
	}
`;

const News = () => {
	return (
		<StyledNews>
			<div className="home-wrapper">
				<h1 className="school-title">Browse schools</h1>
				<h2 className="school-list">See All</h2>
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
				<div className="box box-add">
					<div className="box-wrapper">
						<h1 className="add-title">Add your school!</h1>
						<Add className="add" />
					</div>
				</div>
			</div>
			<div className="wrapper">
				<div className="add-post">
					<User />
					<input className="posts-input" type="text" placeholder="Add a post" />
					<User />
				</div>
			</div>
			<div className="wrapper posts-wrapper">
				<div className="posts-list">
					<div className="flex">
						<img
							className="school-logo posts-logo"
							src={zszlogo}
							alt="zsz logo"
						/>
						<h5 className="posts-title">
							ZSZ im. Stanisława Staszica w Ząbkowicach Śląskich
						</h5>
						<p className="posts-time">5 mins</p>
					</div>
					<p className="posts-desc">
						19 czerwca 2019 r. o godz. 8.15 w naszej szkole rozpoczął się
						uroczysty apel z okazji zakończenia roku szkolnego 2018/2019.
						Uroczystość uświetnili przybyli goście: Przewodniczący Komisji
						Oświaty i Kultury Pan Stanisław...
					</p>
					<img className="posts-img" src={zszfeed} alt="zsz feed" />
				</div>
			</div>
		</StyledNews>
	);
};

export default News;
