import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../images/add.svg';
import zszbg from '../images/zsz.jpg';
import zszlogo from '../images/zszlogo.gif';
import lobg from '../images/lo.jpg';
import lologo from '../images/lologo.jpg';
import sp3bg from '../images/sp3.jpg';
import sp3logo from '../images/sp3logo.jpg';
import p4bg from '../images/p4.png';
import p4logo from '../images/p4logo.jpg';

const StyledNews = styled.section`
	width: 50vw;
	height: 89.2vh;
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
		width: 50px;
		height: 50px;
	}

	.box-add {
		text-align: center;
		cursor: pointer;
	}

	.add-title {
		font-size: 18px;
		font-weight: 600;
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
					<h1 className="add-title">Add your school!</h1>
					<Add className="add" />
				</div>
			</div>
		</StyledNews>
	);
};

export default News;
