import React from "react";
import styled from "styled-components";
import Followers from "./Followers";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  // count languange
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  // get the value as array | sort most popular language | slice language to only 5
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 7);

  // most stars per language | sort based from star
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 7);

  // stars, forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      // Stars
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };

      // Forks
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars).slice(-10).reverse();
  forks = Object.values(forks).slice(-7).reverse();

  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "23",
    },
    {
      label: "Javascript",
      value: "80",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="container">
        {/* In case you forget how to make chart with fusion Chart */}
        {/* <ExampleChart data={chartData} /> */}

        <div className="repo-col-1">
          <Pie3D data={mostUsed} />
          <Followers />
        </div>
        <div className="repo-col-2">
          <Column3D data={stars} />
        </div>
        <div className="repo-col-3">
          <Doughnut2D data={mostPopular} />
          <Bar3D data={forks} />
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;
  /* background: maroon; */
  div {
  }
  .repo-col-1,
  .repo-col-3 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }
  .repo-col-1,
  .repo-col-2 {
    margin-bottom: 2rem;
  }
  /* display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  } */
`;

export default Repos;
