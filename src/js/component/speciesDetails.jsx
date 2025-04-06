import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const SpeciesDetails = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-details">
            <div className="d-flex flex-column">
                <figure>
                    <figcaption>
                        <h1> {store.detailed?.properties?.name} </h1>
                    </figcaption>
                    <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${props.type}/${props.uid}.jpg`} alt="" />
                </figure>
                <div>
                    <p>
                        Classification: {store.detailed?.properties?.classification}
                    </p>
                    <p>
                        Designation: {store.detailed?.properties?.designation}
                    </p>
                    <p>
                        Language: {store.detailed?.properties?.language}
                    </p>
                    <p>
                        Skin colors: {store.detailed?.properties?.skin_colors}
                    </p>
                    <p>
                        Hair colors: {store.detailed?.properties?.hair_colors}
                    </p>
                    <p>
                        Average height: {store.detailed?.properties?.average_height}
                    </p>
                    <p>
                    Average lifespan: {store.detailed?.properties?.average_lifespan}
                    </p>
                </div>
            </div>
        </div>
    )
}