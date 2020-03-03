import React from 'react';
import styled from 'styled-components';
import plans from '../images/plans.svg';
import { Link } from 'react-router-dom';

const StyledTeacherPanel = styled.section`
	a {
		text-decoration: none;
		color: inherit;
	}

	.teacher-panel-bio {
		margin: 2rem 0;
	}

	.teacher-panel-wrapper {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 5px;
	}

	.box {
		width: 100%;
		height: 150px;
		border-radius: 15px;
		background: #fff;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		transition: 0.2s;

		img,
		p {
			user-select: none;
		}

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}
`;

const TeacherPanel = props => {
	const profile = props.profile;
	return (
		<StyledTeacherPanel className="site-container">
			<div className="container">
				<h1>Teacher Panel</h1>
				<div className="teacher-panel-bio">
					<p>
						Your name: {profile.firstName} {profile.lastName}
					</p>
					<p>Your school: {profile.schoolName}</p>
					<p>
						Current lesson:{' '}
						{profile.currentLesson ? profile.currentLesson : 'none'}
					</p>
				</div>
				<div className="teacher-panel-wrapper">
					<Link to="/" className="box">
						<img src={plans} alt="plans" />
						<p>Plans</p>
					</Link>
					<Link to="/" className="box">
						<img src="" alt="classes" />
						<p>Classes</p>
					</Link>
					<Link to="/" className="box">
						<img src="" alt="school" />
						<p>School</p>
					</Link>
					<Link to="/" className="box">
						<img src="" alt="grades" />
						<p>Grades</p>
					</Link>
					<Link to="/" className="box">
						<img src="" alt="posts" />
						<p>Posts</p>
					</Link>
				</div>
			</div>
		</StyledTeacherPanel>
	);
};

export default TeacherPanel;
