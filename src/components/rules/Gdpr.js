import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledGdpr = styled.div`
	text-align: justify;

	.flex {
		display: flex;
		align-items: center;
	}

	svg {
		cursor: pointer;
		transition: 0.2s;

		&:hover {
			fill: #fe843f;
			transition: 0.2s;
		}
	}

	h2,
	h3 {
		font-weight: normal;
	}

	h2 {
		font-size: 2rem;
		margin-left: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	ul {
		padding-inline-start: 40px;
	}
`;

export default function Gdpr() {
	return (
		<StyledGdpr>
			<div className="flex">
				<Link to="/">
					<svg
						width="50"
						height="50"
						viewBox="0 0 50 50"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0)">
							<path d="M37.5814 17.6464C37.5132 17.6464 3.52549 17.6464 3.52549 17.6464L10.6862 9.62029C11.1506 9.09978 11.1051 8.30144 10.5846 7.83709C10.0642 7.37283 9.26571 7.41814 8.80136 7.93875L0.736724 16.9778C-0.245599 18.0792 -0.245501 19.7397 0.736821 20.8408L8.80146 29.8799C9.05106 30.1597 9.39686 30.3021 9.74423 30.3021C10.0434 30.3021 10.3437 30.1963 10.5847 29.9816C11.1052 29.5172 11.1506 28.7189 10.6863 28.1984L3.52559 20.1722C3.52559 20.1722 37.5132 20.1722 37.5815 20.1722C43.0364 20.1722 47.474 24.6101 47.474 30.0648C47.474 35.5195 43.0363 39.9574 37.5815 39.9574H31.5678C30.8703 39.9574 30.3048 40.5229 30.3048 41.2203C30.3048 41.9178 30.8703 42.4833 31.5678 42.4833H37.5815C44.4291 42.4833 50 36.9124 50 30.0648C49.9999 23.2172 44.429 17.6464 37.5814 17.6464Z" />
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="50" height="50" />
							</clipPath>
						</defs>
					</svg>
				</Link>
				<h2>Privacy Policy</h2>
			</div>
			<br />
			<p>
				At schoolify, accessible from schoolify.app, one of our main priorities
				is the privacy of our visitors. This Privacy Policy document contains
				types of information that is collected and recorded by schoolify and how
				we use it.
			</p>
			<p>
				If you have additional questions or require more information about our
				Privacy Policy, do not hesitate to contact us.
			</p>
			<br />
			<h3>General Data Protection Regulation (GDPR)</h3>
			<br />
			<p>We are a Data Controller of your information.</p>
			<p>
				schoolify legal basis for collecting and using the personal information
				described in this Privacy Policy depends on the Personal Information we
				collect and the specific context in which we collect the information:
			</p>
			<br />
			<ul>
				<li>schoolify needs to perform a contract with you</li>
				<li>You have given schoolify permission to do so</li>
				<li>
					Processing your personal information is in schoolify legitimate
					interests
				</li>
				<li>schoolify needs to comply with the law</li>
			</ul>
			<br />
			<p>
				schoolify will retain your personal information only for as long as is
				necessary for the purposes set out in this Privacy Policy. We will
				retain and use your information to the extent necessary to comply with
				our legal obligations, resolve disputes, and enforce our policies.
			</p>
			<p>
				If you are a resident of the European Economic Area (EEA), you have
				certain data protection rights. If you wish to be informed what Personal
				Information we hold about you and if you want it to be removed from our
				systems, please contact us.
			</p>
			<p>
				In certain circumstances, you have the following data protection rights:
			</p>
			<br />
			<ul>
				<li>
					The right to access, update or to delete the information we have on
					you.
				</li>
				<li>The right of rectification.</li>
				<li>The right to object.</li>
				<li>The right of restriction.</li>
				<li>The right to data portability.</li>
				<li>The right to withdraw consent.</li>
			</ul>
			<br />
			<h3>Log Files</h3>
			<br />
			<p>
				schoolify follows a standard procedure of using log files. These files
				log visitors when they visit websites. All hosting companies do this and
				a part of hosting services' analytics. The information collected by log
				files include internet protocol (IP) addresses, browser type, Internet
				Service Provider (ISP), date and time stamp, referring/exit pages, and
				possibly the number of clicks. These are not linked to any information
				that is personally identifiable. The purpose of the information is for
				analyzing trends, administering the site, tracking users' movement on
				the website, and gathering demographic information.
			</p>
			<br />
			<h3>Privacy Policies</h3>
			<br />
			<p>
				You may consult this list to find the Privacy Policy for each of the
				advertising partners of schoolify.
			</p>
			<p>
				Third-party ad servers or ad networks uses technologies like cookies,
				JavaScript, or Web Beacons that are used in their respective
				advertisements and links that appear on schoolify, which are sent
				directly to users' browser. They automatically receive your IP address
				when this occurs. These technologies are used to measure the
				effectiveness of their advertising campaigns and/or to personalize the
				advertising content that you see on websites that you visit.
			</p>
			<p>
				Note that schoolify has no access to or control over these cookies that
				are used by third-party advertisers.
			</p>
			<br />
			<h3>Third Party Privacy Policies</h3>
			<br />
			<p>
				schoolify's Privacy Policy does not apply to other advertisers or
				websites. Thus, we are advising you to consult the respective Privacy
				Policies of these third-party ad servers for more detailed information.
				It may include their practices and instructions about how to opt-out of
				certain options.
			</p>
			<p>
				You can choose to disable cookies through your individual browser
				options. To know more detailed information about cookie management with
				specific web browsers, it can be found at the browsers' respective
				websites. What Are Cookies?
			</p>
			<br />
			<h3>Children's Information</h3>
			<br />
			<p>
				Another part of our priority is adding protection for children while
				using the internet. We encourage parents and guardians to observe,
				participate in, and/or monitor and guide their online activity.
			</p>
			<p>
				schoolify does not knowingly collect any Personal Identifiable
				Information from children under the age of 13. If you think that your
				child provided this kind of information on our website, we strongly
				encourage you to contact us immediately and we will do our best efforts
				to promptly remove such information from our records.
			</p>
			<br />
			<h3>Online Privacy Policy Only</h3>
			<br />
			<p>
				Our Privacy Policy applies only to our online activities and is valid
				for visitors to our website with regards to the information that they
				shared and/or collect in schoolify. This policy is not applicable to any
				information collected offline or via channels other than this website.
			</p>
			<br />
			<h3>Consent</h3>
			<br />
			<p>
				By using our website, you hereby consent to our Privacy Policy and agree
				to its terms.
			</p>
		</StyledGdpr>
	);
}
