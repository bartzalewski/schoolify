import React from 'react';
import styled from 'styled-components';

const StyledLessons = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	.container {
		padding: 40px;
	}

	.tg {
		border-collapse: collapse;
		border-spacing: 0;
		border-color: #aabcfe;
		width: 100%;

		@media (max-width: 813px) {
			display: none;
		}
	}
	.tg td {
		font-family: Arial, sans-serif;
		font-size: 0.875rem;
		padding: 10px 5px;
		border-style: solid;
		border-width: 1px;
		overflow: hidden;
		word-break: normal;
		border-color: #aabcfe;
		color: #669;
		background-color: #e8edff;
	}
	.tg th {
		font-family: Arial, sans-serif;
		font-size: 0.875rem;
		font-weight: normal;
		padding: 10px 5px;
		border-style: solid;
		border-width: 1px;
		overflow: hidden;
		word-break: normal;
		border-color: #aabcfe;
		color: #039;
		background-color: #b9c9fe;
	}
	.tg .tg-phtq {
		background-color: #d2e4fc;
		border-color: inherit;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-hmp3 {
		background-color: #d2e4fc;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-baqh {
		text-align: center;
		vertical-align: top;
	}
	.tg .tg-l5at {
		background-color: #d2e4fc;
		font-family: serif !important;
		border-color: inherit;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-0pky {
		border-color: inherit;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-0lax {
		text-align: left;
		vertical-align: top;
	}
`;

const Lessons = () => {
	return (
		<StyledLessons>
			<div className="container">
				<h1>Lessons</h1>
				<table className="tg">
					<tr>
						<th className="tg-baqh" colspan="7">
							1A
						</th>
					</tr>
					<tr>
						<td className="tg-phtq">No</td>
						<td className="tg-phtq">Hour</td>
						<td className="tg-phtq">Monday</td>
						<td className="tg-phtq">Tuesday</td>
						<td className="tg-phtq">Wednesday</td>
						<td className="tg-phtq">Thursday</td>
						<td className="tg-hmp3">Friday</td>
					</tr>
					<tr>
						<td className="tg-0pky">1</td>
						<td className="tg-0pky">8:00-8:45</td>
						<td className="tg-0pky">bio</td>
						<td className="tg-0pky">geo</td>
						<td className="tg-0pky">ger</td>
						<td className="tg-0pky">his</td>
						<td className="tg-0lax">rel</td>
					</tr>
					<tr>
						<td className="tg-phtq">2</td>
						<td className="tg-phtq">8:50-9:35</td>
						<td className="tg-phtq">math</td>
						<td className="tg-phtq">eco</td>
						<td className="tg-phtq">chem</td>
						<td className="tg-phtq">it</td>
						<td className="tg-hmp3">ger</td>
					</tr>
					<tr>
						<td className="tg-0pky">3</td>
						<td className="tg-0pky">9:40-10:25</td>
						<td className="tg-0pky">eng</td>
						<td className="tg-0pky">chem</td>
						<td className="tg-0pky">pe</td>
						<td className="tg-0pky">eng</td>
						<td className="tg-0lax">math</td>
					</tr>
					<tr>
						<td className="tg-phtq">4</td>
						<td className="tg-phtq">10:45-11:30</td>
						<td className="tg-phtq">it</td>
						<td className="tg-phtq">rel</td>
						<td className="tg-phtq">math</td>
						<td className="tg-phtq">eng</td>
						<td className="tg-hmp3">math</td>
					</tr>
					<tr>
						<td className="tg-0pky">5</td>
						<td className="tg-0pky">11:35-12:20</td>
						<td className="tg-0pky">pe</td>
						<td className="tg-0pky">esp</td>
						<td className="tg-0pky">math</td>
						<td className="tg-0pky">pe</td>
						<td className="tg-0lax">eco</td>
					</tr>
					<tr>
						<td className="tg-l5at">6</td>
						<td className="tg-phtq">12:25-13:10</td>
						<td className="tg-phtq">pe</td>
						<td className="tg-phtq">eng</td>
						<td className="tg-phtq">it</td>
						<td className="tg-phtq" />
						<td className="tg-hmp3">esp</td>
					</tr>
					<tr>
						<td className="tg-0lax">7</td>
						<td className="tg-0lax">13:15-14:00</td>
						<td className="tg-0lax">chem</td>
						<td className="tg-0lax" />
						<td className="tg-0lax" />
						<td className="tg-0lax" />
						<td className="tg-0lax" />
					</tr>
				</table>
			</div>
		</StyledLessons>
	);
};

export default Lessons;
