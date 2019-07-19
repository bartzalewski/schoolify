import React from 'react';
import styled from 'styled-components';
import PostSummary from './PostSummary';

const StyledPostList = styled.div`
	margin-top: -80px;
	width: 100%;
	padding: 40px;
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
