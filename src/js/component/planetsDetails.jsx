import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetsDetails = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-details">
            <div className="d-flex flex-row align-items-center justify-content-center gap-4 mt-3">
                <figure>
                    <figcaption>
                        <h1> {store.detailed?.properties?.name} </h1>
                    </figcaption>
                    <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${props.type}/${props.uid}.jpg`} alt="" />
                </figure>
                <div>
                    <p>
                        Gravity: {store.detailed?.properties?.gravity}
                    </p>
                    <p>
                        Population: {store.detailed?.properties?.population}
                    </p>
                    <p>
                        Climate: {store.detailed?.properties?.climate}
                    </p>
                    <p>
                        Terrain: {store.detailed?.properties?.terrain}
                    </p>
                    <p>
                        Surface water: {store.detailed?.properties?.surface_water}
                    </p>
                    <p>
                        Rotation period: {store.detailed?.properties?.rotation_period}
                    </p>
                    <p>
                        Orbital period: {store.detailed?.properties?.orbital_period}
                    </p>
                    <br /> <br />
                    <Link to="/">
                        <button className="btn button-starwars">Return</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}