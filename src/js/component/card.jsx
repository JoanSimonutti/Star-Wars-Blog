import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Card = (props) => {
    const {store, actions} = useContext(Context);
    const handleFav = (fav) => {
        actions.addRemoveFavorite(fav)
    }
    const fav = {...props}
   

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card card-starwars  my-2">
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption className="mt-2">{props.name}</figcaption>
                </figure>
                <div className="d-flex justify-content-around">
                    <Link to={`/details/${props.type}/${props.uid}`}>
                    <button className="btn button-starwars">Learn more</button>
                    </Link>
                    <button className="btn button-starwars" onClick={()=>handleFav(props)}>Fav</button>
                </div>
            </div>
        </div>
    )
}