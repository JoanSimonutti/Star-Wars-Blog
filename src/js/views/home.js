import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";
import starwars1 from "../../../docs/starwars1.png" 

export const Home = () => {

	const { store, actions } = useContext(Context)


	return (
		<>
			<section className="d-flex text-center justify-content-center pb-4 img-glow-white">
				<img src={starwars1} alt="hero" width="1920" height="450" /*src="https://i.redd.it/jnjrm2iy9b051.png"*/ />
			</section>
			<div className="container">
				<section>
					<h2 className="title-outline-sith">CHARACTERS</h2>
					<div className="row">
						{
							store.people?.map(el => <Card key={el.uid} type={'people'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${el.uid}.jpg`} />)
						}
					</div>
				</section>
				<div className="saber-separator"></div>
				<section>
					<h2 className="title-outline-sith">SPECIES</h2>
					<div className="row">
						{
							store.species?.map(el => <Card key={el.uid} type={'species'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/species/${el.uid}.jpg`} />)
						}
					</div>
				</section>
				<div className="saber-separator"></div>
				<section>
					<h2 className="title-outline-sith">VEHICLES</h2>
					<div className="row">
						{
							store.vehicles?.map(el => <Card key={el.uid} type={'vehicles'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${el.uid}.jpg`} />)
						}
					</div>
				</section>
				<div className="saber-separator"></div>
				<section>
					<h2 className="title-outline-sith">PLANETS</h2>
					<div className="row">
						{
							store.planets?.map(el => <Card key={el.uid} type={'planets'} name={el.name} uid={el.uid}
								img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${el.uid}.jpg`} />)
						}
					</div>
				</section>
			</div>
		</>
	);
}