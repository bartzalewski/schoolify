import React from 'react';
import styled from 'styled-components';

const StyledClassPlan = styled.div`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.container {
			padding: 20px;
		}
	}

	@media (max-width: 1124px) {
		width: 80%;
	}

	@media (max-width: 813px) {
		width: 100%;

		.container {
			padding: 10px;
		}

		h1 {
			font-size: 1.2rem;
		}
	}

	.tg {
		border-collapse: collapse;
		border-spacing: 0;
		border-color: #aabcfe;
		width: 100%;
		margin-top: 2rem;

		@media (max-width: 813px) {
			display: none;
		}
	}
	.tg td {
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
		font-size: 0.875rem;
		font-weight: bold;
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

export default function ClassPlan() {
	return (
		<StyledClassPlan className="zsz-page">
			<div className="container">
				<h1>ZSZ im. Stanisława Staszica w Ząbkowicach Śląskich</h1>
				<table className="tg">
					<tr>
						<th className="tg-baqh" colspan="7">
							4TI
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
						<td className="tg-0pky">mat</td>
						<td className="tg-0pky">j.ang</td>
						<td className="tg-0pky">r_mat</td>
						<td className="tg-0pky">witryny</td>
						<td className="tg-0lax">witryny</td>
					</tr>
					<tr>
						<td className="tg-phtq">2</td>
						<td className="tg-phtq">8:50-9:35</td>
						<td className="tg-phtq">mat</td>
						<td className="tg-phtq">witryny</td>
						<td className="tg-phtq">j.pol</td>
						<td className="tg-phtq">witryny</td>
						<td className="tg-hmp3">witryny</td>
					</tr>
					<tr>
						<td className="tg-0pky">3</td>
						<td className="tg-0pky">9:40-10:25</td>
						<td className="tg-0pky">witryny</td>
						<td className="tg-0pky">witryny</td>
						<td className="tg-0pky">adm.baz.da</td>
						<td className="tg-0pky">r_mat</td>
						<td className="tg-0lax">j.pol</td>
					</tr>
					<tr>
						<td className="tg-phtq">4</td>
						<td className="tg-phtq">10:45-11:30</td>
						<td className="tg-phtq">witryny</td>
						<td className="tg-phtq">adm.baz.da</td>
						<td className="tg-phtq">adm.baz.da</td>
						<td className="tg-phtq">Rel</td>
						<td className="tg-hmp3">j.ang</td>
					</tr>
					<tr>
						<td className="tg-0pky">5</td>
						<td className="tg-0pky">11:35-12:20</td>
						<td className="tg-0pky">adm.baz.da</td>
						<td className="tg-0pky">adm.baz.da</td>
						<td className="tg-0pky">j.pol</td>
						<td className="tg-0pky">wf</td>
						<td className="tg-0lax">Z_W</td>
					</tr>
					<tr>
						<td className="tg-l5at">6</td>
						<td className="tg-phtq">12:25-13:10</td>
						<td className="tg-phtq">prog.aplik</td>
						<td className="tg-phtq">adm.baz.da</td>
						<td className="tg-phtq">prog.aplik</td>
						<td className="tg-phtq">wf</td>
						<td className="tg-hmp3">prog.aplik</td>
					</tr>
					<tr>
						<td className="tg-0lax">7</td>
						<td className="tg-0lax">13:15-14:00</td>
						<td className="tg-0lax">prog.aplik</td>
						<td className="tg-0lax">j.niem</td>
						<td className="tg-0lax">prog.aplik</td>
						<td className="tg-0lax">prog.aplik</td>
						<td className="tg-0lax" />
					</tr>
					<tr id="lol">
						<td className="tg-phtq">8</td>
						<td className="tg-phtq">14:05-14:50</td>
						<td className="tg-phtq">prog.aplik</td>
						<td className="tg-phtq">wf</td>
						<td className="tg-phtq"></td>
						<td className="tg-phtq">prog.aplik</td>
						<td className="tg-phtq" />
					</tr>
				</table>
			</div>
		</StyledClassPlan>
	);
}
