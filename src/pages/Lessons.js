import React from 'react';
import styled from 'styled-components';

const StyledLessons = styled.section`
	width: 50vw;
	height: 89.2vh;
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
	}
	.tg td {
		font-family: Arial, sans-serif;
		font-size: 14px;
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
		font-size: 14px;
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
				<table class="tg">
					<tr>
						<th class="tg-baqh" colspan="7">
							1A
						</th>
					</tr>
					<tr>
						<td class="tg-phtq">No</td>
						<td class="tg-phtq">Hour</td>
						<td class="tg-phtq">Monday</td>
						<td class="tg-phtq">Tuesday</td>
						<td class="tg-phtq">Wednesday</td>
						<td class="tg-phtq">Thursday</td>
						<td class="tg-hmp3">Friday</td>
					</tr>
					<tr>
						<td class="tg-0pky">1</td>
						<td class="tg-0pky">8:00-8:45</td>
						<td class="tg-0pky">bio</td>
						<td class="tg-0pky">geo</td>
						<td class="tg-0pky">ger</td>
						<td class="tg-0pky">his</td>
						<td class="tg-0lax">rel</td>
					</tr>
					<tr>
						<td class="tg-phtq">2</td>
						<td class="tg-phtq">8:50-9:35</td>
						<td class="tg-phtq">math</td>
						<td class="tg-phtq">eco</td>
						<td class="tg-phtq">chem</td>
						<td class="tg-phtq">it</td>
						<td class="tg-hmp3">ger</td>
					</tr>
					<tr>
						<td class="tg-0pky">3</td>
						<td class="tg-0pky">9:40-10:25</td>
						<td class="tg-0pky">eng</td>
						<td class="tg-0pky">chem</td>
						<td class="tg-0pky">pe</td>
						<td class="tg-0pky">eng</td>
						<td class="tg-0lax">math</td>
					</tr>
					<tr>
						<td class="tg-phtq">4</td>
						<td class="tg-phtq">10:45-11:30</td>
						<td class="tg-phtq">it</td>
						<td class="tg-phtq">rel</td>
						<td class="tg-phtq">math</td>
						<td class="tg-phtq">eng</td>
						<td class="tg-hmp3">math</td>
					</tr>
					<tr>
						<td class="tg-0pky">5</td>
						<td class="tg-0pky">11:35-12:20</td>
						<td class="tg-0pky">pe</td>
						<td class="tg-0pky">esp</td>
						<td class="tg-0pky">math</td>
						<td class="tg-0pky">pe</td>
						<td class="tg-0lax">eco</td>
					</tr>
					<tr>
						<td class="tg-l5at">6</td>
						<td class="tg-phtq">12:25-13:10</td>
						<td class="tg-phtq">pe</td>
						<td class="tg-phtq">eng</td>
						<td class="tg-phtq">it</td>
						<td class="tg-phtq" />
						<td class="tg-hmp3">esp</td>
					</tr>
					<tr>
						<td class="tg-0lax">7</td>
						<td class="tg-0lax">13:15-14:00</td>
						<td class="tg-0lax">chem</td>
						<td class="tg-0lax" />
						<td class="tg-0lax" />
						<td class="tg-0lax" />
						<td class="tg-0lax" />
					</tr>
				</table>
			</div>
		</StyledLessons>
	);
};

export default Lessons;
