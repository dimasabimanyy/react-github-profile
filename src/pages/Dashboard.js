import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import AppTitle from "../components/AppTitle";
import Footer from "../components/Footer";
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <AppTitle />
        <Navbar></Navbar>
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img" />
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <AppTitle />
      <Navbar></Navbar>
      <Search />
      <User />
      <Info />
      <Repos />
      <Footer />
    </main>
  );
};

export default Dashboard;
