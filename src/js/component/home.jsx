import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div>
			<div className="container text-center">
  <div className="row">
    <div className="col">
      <Card/>
    </div>
    <div className="col">
	  <Card/> 
    </div>
    <div className="col">
	  <Card/>
    </div>
  </div>
</div>
		</div>
		<>
		<Footer/>
		</>
</div>
	);
};

export default Home;
