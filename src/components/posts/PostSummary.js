import React from 'react';
import styled from 'styled-components';

const StyledPostSummary = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function PostSummary({ post }) {
	return (
		<StyledPostSummary>
			<div className="posts-list">
				<div className="flex">
					<img
						className="school-logo posts-logo"
						src={post.schoolLogo}
						alt="school logo"
					/>
					<h5 className="posts-title">{post.schoolName}</h5>
					<p className="posts-time">5 mins</p>
				</div>
				<p className="posts-desc">{post.content}</p>
				<img
					className="posts-img"
					src={post.postBackground}
					alt="school feed"
				/>
			</div>
		</StyledPostSummary>
	);
}
