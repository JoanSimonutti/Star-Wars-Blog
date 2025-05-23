import React, { useContext } from "react";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { Card } from "../component/card.jsx";


export const Favorites = () => {

    const { store, actions } = useContext(Context)

    return (
        <div className="container text-start mb-4">
            <section>
                <h2 className="title-outline-sith">MY FAVORITES</h2>
                <div className="row">
                    {
                        store.favorites.length === 0 ? (
                            <h1 className="text-center my-5">
                                NO FAVORITES TO SHOW<br />
                                ADD FAVORITES ON THE HOME PAGE
                            </h1>
                        ) : (
                            store.favorites.map((favorito) => (
                                <Card
                                    key={favorito.uid}
                                    name={favorito.name}
                                    img={favorito.img}
                                    uid={favorito.uid}
                                    type={favorito.type}
                                />
                            ))
                        )
                    }
                </div>
            </section>
        </div>
    )


}