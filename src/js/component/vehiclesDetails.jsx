import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const VehiclesDetails = (props) => {
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
                        Speed: {store.detailed?.properties?.max_atmosphering_speed}
                    </p>
                    <p>
                        Passengers: {store.detailed?.properties?.passengers}
                    </p>
                    <p>
                        Length: {store.detailed?.properties?.length}
                    </p>
                    <p>
                        Cargo capacity: {store.detailed?.properties?.cargo_capacity}
                    </p>
                    <p>
                        Vehicle class: {store.detailed?.properties?.vehicle_class}
                    </p>
                    <p>
                        Manufacturer: {store.detailed?.properties?.manufacturer}
                    </p>
                    <p>
                        Price: {store.detailed?.properties?.cost_in_credits}
                    </p>
                </div>
            </div>
        </div>
    )
}