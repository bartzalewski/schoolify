import React from 'react';
import styled from 'styled-components';
import english from '../../images/subjects/english.svg';
import german from '../../images/subjects/german.svg';
import spanish from '../../images/subjects/spanish.svg';
import math from '../../images/subjects/math.svg';
import physics from '../../images/subjects/physics.svg';
import bio from '../../images/subjects/bio.svg';
import religion from '../../images/subjects/religion.svg';
import it from '../../images/subjects/it.svg';
import pe from '../../images/subjects/pe.svg';
import eco from '../../images/subjects/eco.svg';
import geo from '../../images/subjects/geo.svg';
import chem from '../../images/subjects/chem.svg';
import history from '../../images/subjects/history.svg';

const StyledGrades = styled.aside`
	width: 25vw;
	height: 44.6vh;
	padding: 25px;
	border-right: 1px solid #d2d2d2;
	top: calc(100vh - 100px - 30.4vh);
	position: fixed;
	background: #fff;

	.title {
		font-size: 32px;
		font-weight: 600;
	}

	img {
		height: 40px;
		margin: 10px;
		cursor: pointer;
	}

	.subjects {
		margin-left: -10px;
		width: 104%;
	}
`;

const Grades = () => {
	return (
		<StyledGrades>
			<h1 className="title">Grades</h1>
			<div className="subjects">
				<img title="English" src={english} alt="english subject" />
				<img title="German" src={german} alt="german subject" />
				<img title="Spanish" src={spanish} alt="spanish subject" />
				<img title="Math" src={math} alt="math subject" />
				<img title="Physics" src={physics} alt="physics subject" />
				<img title="Biology" src={bio} alt="biology subject" />
				<img title="Religion" src={religion} alt="religion subject" />
				<img title="IT" src={it} alt="it subject" />
				<img title="Physical E." src={pe} alt="physical education subject" />
				<img title="Economy" src={eco} alt="economy subject" />
				<img title="Geometry" src={geo} alt="geography subject" />
				<img title="Chem" src={chem} alt="chem subject" />
				<img title="History" src={history} alt="history subject" />
			</div>
		</StyledGrades>
	);
};

export default Grades;
