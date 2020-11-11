import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";
const Search = () => {
  const [user, setUser] = React.useState("");
  const { requests, error, searchGithubUser, isLoading } = React.useContext(
    GithubContext
  );
  // get things from global context
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
      // optional

      // setUser('')
    }
  };

  return (
    <section className="section section-search">
      <Wrapper className="container">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch className="md-search" />
            <input
              type="text"
              placeholder="Enter github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && !isLoading && (
              <button type="submit" className="btn-search">
                Search
              </button>
            )}
          </div>
        </form>
        <h4>requests : {requests} / 60</h4>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  margin: 1rem auto;
  position: relative;
  /* gap: 2rem; */
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    .form-control {
      background: transparent !important;
      column-gap: 0 !important;
      grid-template-columns: 1fr !important;
      row-gap: 0.7rem;
      input {
        border-radius: 20px;
        border: 2px solid var(--light-bg) !important;
      }
      .md-search {
        display: none !important;
      }
      .btn-search {
        margin: 0 auto;
        background: var(--light-bg);
        width: 90px;
        height: 35px;
        border-radius: 20px;
        font-size: 0.8rem !important;
      }
    }
    h4 {
      margin: 0 auto;
      margin-top: 0.4rem;
      text-align: center;
    }
  }
  .form-control {
    position: relative;
    transition: 0.3s ease-in-out;
    background: var(--light-bg);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    padding: 0.1rem 0.7rem;
    border-radius: 20px;
    form {
      border-radius: 20px;
    }
    input {
      border-color: transparent;
      outline: none;
      /* border-top-left-radius: 20px;
      border-bottom-left-radius: 20px; */
      color: var(--dark-f) !important;
      padding: 0.3rem 0.5rem;
      font-size: 0.95rem !important;
      font-family: var(--secondary-ff);
    }
    input::placeholder {
      text-transform: capitalize;
      font-size: 1rem;
    }
    button {
      border-color: transparent;
      text-transform: capitalize;
      background: transparent;
      cursor: pointer;
      color: var(--dark-f);
      font-weight: 500;
      font-family: var(--secondary-ff);
      outline: none;
      font-size: 1rem !important;
    }

    svg {
      color: var(--dark-f);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h4 {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    color: var(--gray-f);
    font-weight: 400;
    font-size: 1.5rem;
    font-family: var(--cursive-ff);
  }

  /* @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h4 {
      padding: 0 0.5rem;
    }
  } */

  @media screen and (max-width: 768px) {
    gap: 0.4rem;
    h4 {
      font-size: 1.2rem;
    }
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-85%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
