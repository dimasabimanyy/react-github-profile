import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <Wrapper className="container">
      {isUser && user.picture && <img src={user.picture} alt={user} />}

      <div>
        {isUser && user.name && (
          <h4>
            Welcome, <span>{user.name}</span>
          </h4>
        )}
      </div>
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
          className="btn"
        >
          Logout
        </button>
      ) : (
        <button className="btn" onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; */
  text-align: center;
  padding: 1rem 0;
  h4 {
    font-weight: 400;
    margin: 0.7rem auto;
  }
  img {
    width: 65px !important;
    height: 65px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    text-transform: uppercase;
    background: transparent;
    border: 2px solid var(--secondary-light-f);
    border-radius: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    /* background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer; */
  }
`;

export default Navbar;
