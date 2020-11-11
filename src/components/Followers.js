import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { followers } = React.useContext(GithubContext);
  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 400px;
  background: var(--darkest-bg);
  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--darkest-bg);
    color: var(--gray-f);
    font-family: var(--secondary-ff);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    font-size: 1rem;
  }
  .followers {
    position: relative;
    overflow-x: hidden;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    padding: 1.7rem 2rem;
    gap: 1.5rem 1rem;
  }

  @media screen and (max-width: 800px) {
    .followers {
      padding: 0.5rem 0.2rem;
    }
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.2rem;
    }
    a {
      color: var(--gray-f);
      font-size: 0.98rem;
      font-family: var(--primary-ff);
    }

    @media screen and (max-width: 800px) {
      article {
        h4 {
          font-size: 0.8rem;
          margin-bottom: 0.1rem;
        }
      }
    }

    @media screen and (max-width: 600px) {
      article {
        a {
          display: hidden;
        }
      }
    }
  }
`;
export default Followers;
