import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn back-home">
          Back home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    color: var(--secondary-light-f);
    font-size: 10rem;
    font-family: var(--cursive-ff);
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-family: var(--cursive-ff);
  }
  .back-home {
    border-radius: 20px;
    border: 1px solid var(--secondary-light-f);
    padding: 0.5rem 1.3rem !important;
    outline: none;
  }

  @media screen and (max-width: 1150px) {
    h1 {
      font-size: 7rem;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      margin-bottom: -0.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    button {
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem !important;
    }
  }
`;
export default Error;
