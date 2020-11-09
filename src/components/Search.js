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
            <MdSearch />
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
  position: relative;
  display: grid;
  margin: 1rem auto;
  gap: 2rem;
  .form-control {
    transition: 0.3s ease-in-out;
    background: var(--light-bg);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    padding: 0.1rem 0.7rem;
    border-radius: 20px;
    input {
      border-color: transparent;
      outline: none;
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
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
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
