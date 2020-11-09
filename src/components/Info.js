import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 1,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="container">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
      <span className={color}>{icon}</span>
    </article>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  .item {
    border-radius: var(--radius);
    background: var(--darkest-bg);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.7rem 1rem;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #dd614a;
      color: #fff;
    }
    .green {
      background: #44af69;
      color: #fff;
    }
    .purple {
      background: #6957da;
      color: #fff;
    }
    .yellow {
      background: #c79e24;
      color: #fff;
    }
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 900px) {
    padding: 1rem 0;
  }
  
  @media screen and (max-width: 800px) {
    gap: .5rem;
`;

export default UserInfo;
