import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PeopleDetails = (props) => {
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
                        Gender: {store.detailed?.properties?.gender}
                    </p>
                    <p>
                        Birth year: {store.detailed?.properties?.birth_year}
                    </p>
                    <p>
                        Height: {store.detailed?.properties?.height}
                    </p>
                    <p>
                        Mass: {store.detailed?.properties?.mass}
                    </p>
                    <p>
                        Skin color: {store.detailed?.properties?.skin_color}
                    </p>
                    <p>
                        Hair color: {store.detailed?.properties?.hair_color}
                    </p>
                    <p>
                        Eye color: {store.detailed?.properties?.eye_color}
                    </p>
                </div>
            </div>
        </div>
    )
}