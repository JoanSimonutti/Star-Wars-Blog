import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { PeopleDetails } from "../component/peopleDetails.jsx";
import { PlanetsDetails } from "../component/planetsDetails.jsx";
import { SpeciesDetails } from "../component/speciesDetails.jsx";
import { VehiclesDetails } from "../component/vehiclesDetails.jsx";


export const Details = () => {

    const { store, actions } = useContext(Context)

    const params = useParams()

    useEffect(() => {
        actions.getOne(params.type, params.uid)
    }, [])

    return (
        <div className="container text-center mb-4">
          {params.type==='people' && <PeopleDetails type={'characters'} uid={params.uid} />}
          {params.type==='species' && <SpeciesDetails type={params.type} uid={params.uid} />}
          {params.type==='vehicles' && <VehiclesDetails type={params.type} uid={params.uid} />}
          {params.type==='planets' && <PlanetsDetails type={params.type} uid={params.uid} />}
        </div>
    )
}