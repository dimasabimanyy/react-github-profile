import React from "react";
import styled from "styled-components";

function AppTitle() {
  return (
    <Wrapper className="container">
      <h2>Github Profiler</h2>
      <h4>
        Built by <span>dimasabimanyy</span>
      </h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  h2 {
    margin-bottom: 0.5rem;
  }
  h4 {
    font-family: var(--cursive-ff);
    color: #ffd908;
    font-size: 1.4rem;
  }
`;

export default AppTitle;
