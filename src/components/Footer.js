import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        Built with{" "}
        <a href="https://reactjs.org/" alt="react js">
          React js
        </a>{" "}
        -{" "}
        <a href="https://www.fusioncharts.com/" alt="fusion chart">
          Fusion Chart
        </a>{" "}
        -{" "}
        <a href="https://styled-components.com/" alt="styled components">
          Styled Components
        </a>{" "}
        and more
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  text-align: center;
  padding: 2.5rem 0;
  margin-top: 3rem;
  font-family: var(--cursive-ff);
  font-size: 1.3rem;
  color: var(--gray-f);
  a {
    color: var(--gray-f);
  }
  a:hover {
    color: #ffd908;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 1rem;
    a {
      font-size: 1.1rem;
    }
  }
`;

export default Footer;
