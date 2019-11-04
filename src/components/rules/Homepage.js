import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/logo.svg';
import homebg from '../../images/homebg.svg';

const StyledHomepage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export default function Homepage() {
	return (
		<StyledHomepage>
			{window.innerWidth <= 1124 ? (
				<>
					<Logo className="home-logo" />
					<div className="title">schoolify</div>
					<h1>
						the <span>first</span> globalized electronic diary for schools.
					</h1>
					<div className="home-container">
						<img className="home-bg" src={homebg} alt="home background" />
					</div>
				</>
			) : null}
			{window.innerWidth > 1125 ? (
				<>
					<Logo className="home-logo" />
					<div className="title">schoolify</div>
					<div className="home-container">
						<img className="home-bg" src={homebg} alt="home background" />
					</div>
				</>
			) : null}
		</StyledHomepage>
	);
}
