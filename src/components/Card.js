import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    login,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
      </header>
      <div className="user-right">
        <h3>{name}</h3>
        {/* <p>@{twitter_username || "-"}</p> */}
        <a href={html_url} className="github-username">
          @{login}
        </a>
        <p className="bio">{bio}</p>
        <div className="links">
          <p>
            <MdBusiness></MdBusiness> {company}
          </p>
          <p>
            <MdLocationOn></MdLocationOn> {location || "-"}
          </p>
          <p>
            <a href={`https://${blog}`}>
              <MdLink></MdLink> {blog}
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 700px;
  margin: 0 auto;
  header {
    text-align: right;
    padding: 1em;
    img {
      width: 190px;
      height: 190px;
      border: 6px solid var(--light-bg);
      border-radius: 50%;
    }
  }
  .user-right {
    padding: 1em;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      font-size: 1.6rem;
      margin-bottom: 0.1rem;
    }
    .github-username {
      cursor: pointer;
      color: var(--gray-f);
      font-size: 1.4rem;
      font-family: var(--cursive-ff);
      &:hover {
        color: #ffd908;
      }
    }
    .bio {
      font-family: var(--primary-ff);
      color: var(--gray-f);
      margin: 0.7rem 0;
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      p,
      a {
        margin-bottom: 0.4rem;
        margin-right: 0.6rem;
        display: flex;
        align-items: center;
        color: var(--gray-f);
      }
      svg {
        margin-right: 0.3rem;
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 1fr;
    header {
      padding: 0;
      text-align: center;
      img {
        width: 130px;
        height: 130px;
      }
    }
    .user-right {
      padding: 0;
      text-align: center;
    }
    .bio {
      margin: 0;
    }
    .links {
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 768px) {
    .user-right {
      h3 {
        font-size: 1.4rem;
      }
    }
  }
`;
export default Card;
