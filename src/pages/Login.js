import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container login-page-wrap">
        <img src={loginImg} alt="github user" />
        <h1>Github Profile</h1>
        <h4>A nicer look at your github profile</h4>
        <button className="btn" onClick={loginWithRedirect}>
          Login / Sign Up
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  .login-page-wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h4 {
    font-size: 1.3rem;
    color: var(--gray-f);
    font-family: var(--cursive-ff);
    margin-bottom: 2rem;
  }
  img {
    width: 300px;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.2rem;
    margin-bottom: 0.5rem;
  }
  button {
    border-radius: 20px;
    border: 1px solid var(--secondary-light-f);
    padding: 0.5rem 1.3rem !important;
    outline: none;
  }

  @media screen and (max-width: 1150px) {
    h1 {
      font-size: 2.8rem;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 1.8rem;
      margin-bottom: 0.2rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    button {
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem !important;
    }
  }
`;
export default Login;
