import React from 'react';
import styled from 'styled-components';
import PostSummary from './PostSummary';

const StyledPostList = styled.div`
	margin-top: -80px;
	width: 100%;
	padding: 40px;

	@media (max-width: 1359px) {
		padding: 20px;
		margin-top: -40px;
	}

	@media (max-width: 813px) {
		padding: 10px;
	}
`;

export default function PostList({ posts }) {
	return (
		<StyledPostList>
			{posts &&
				posts.map(post => {
					return <PostSummary post={post} key={post.id} />;
				})}
		</StyledPostList>
	);
}