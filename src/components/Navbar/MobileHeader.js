import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/logo.png';

const StyledMobileHeader = styled.div`
	width: 100vw;
	height: 50px;
	background: #fff;
	position: fixed;
`;

export default function MobileHeader() {
	return (
		<StyledMobileHeader>
			<Logo />
			schoolify
		</StyledMobileHeader>
	);
}
