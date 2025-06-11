import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import cardImage from "../../img/card-image.png"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div>
				<div className="container text-center">
					<div className="row">
						<div className="col-md-6 col-lg-3">
							<Card cardImage={cardImage} />
						</div>
						<div className="col-md-6 col-lg-3">
							<Card cardImage={cardImage}/>
						</div>
						<div className="col-md-6 col-lg-3">
							<Card cardImage={cardImage}/>
						</div>
						<div className="col-md-6 col-lg-3">
							<Card cardImage={cardImage}/>
						</div>
					</div>
				</div>
			</div>
			<>
				<Footer />
			</>
		</div>
	);
};
//Como nota adicional, he intentado que no se vea el espacio en blanco al final de la pantalla, pero no he conseguido hacerlo sin que se rompra algo 
export default Home;
