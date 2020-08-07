import React from "react";
import styled from "styled-components";
import PostSummary from "./PostSummary";

const StyledPostList = styled.div`
  width: 100%;

  @media (max-width: 1359px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 813px) {
    padding: 10px;
  }
`;

export default function PostList({ posts }) {
  return (
    <StyledPostList id="post-list-item">
      {posts &&
        posts.map((post) => {
          return <PostSummary post={post} key={post.id} />;
        })}
    </StyledPostList>
  );
}
