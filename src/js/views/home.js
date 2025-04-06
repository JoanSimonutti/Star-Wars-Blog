import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)


	return (
		<>
			<section className="d-flex text-center justify-content-center pb-3">
				<img src="https://i.redd.it/jnjrm2iy9b051.png" alt="hero" width="1920" height="450" />
			</section>
			<div className="container">
				<section>
					<h2 className="title-holo-sun">CHARACTERS</h2>
					<div className="row cards-container">
						{
							store.people?.map(el => <Card key={el.uid} type={'people'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${el.uid}.jpg`} />)
						}
					</div>
				</section>
				<div className="separator-container">
					<span className="separator-text">May the force be with you</span>
					<div className="separator-starwars"></div>
				</div>
				<section>
					<h2 className="title-outline">SPECIES</h2>
					<div className="row">
						{
							store.species?.map(el => <Card key={el.uid} type={'species'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/species/${el.uid}.jpg`} />)
						}
					</div>
				</section>
				<div className="separator-container">
					<span className="separator-text">May the force be with you</span>
					<div className="separator-starwars"></div>
				</div>
				<section>
					<h2 className="title-pulse">VEHICLES</h2>
					<div className="row">
						{
							store.vehicles?.map(el => <Card key={el.uid} type={'vehicles'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${el.uid}.jpg`} />)
						}
					</div>
				</section>
				<div className="separator-container">
					<span className="separator-text">May the force be with you</span>
					<div className="separator-starwars"></div>
				</div>
				<section>
					<h2 className="title-scan">PLANETS</h2>
					<div className="row">
						{
							store.planets?.map(el => <Card key={el.uid} type={'planets'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${el.uid}.jpg`} />)
						}
						<h2 className="title-stars">PLANETS</h2> <br/><br/>
						<h2 className="title-holo">PLANETS</h2><br/>
						<h2 className="title-electric">PLANETS</h2><br/>

						
					</div>
				</section>
			</div>
		</>
	);
}