import React, { useContext } from "react";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { Card } from "../component/card.jsx";


export const Favorites = () => {

    const {store, actions} = useContext(Context)
    
    return (
       <div className="container text-start mb-4">
                <section>
                    <h2 className="title-outline-sith">MY FAVORITES</h2>
                    <div className="row">

                    {store.favorites.map((favorito)=>{
                        return (
                            <Card name={favorito.name} img={favorito.img} uid={favorito.uid} type={favorito.type} />
                        )
                    })
                       
                        }
                    </div>
                </section>       
            </div>
    )


}