import React, {useState} from 'react'
import '../styles/Vehicule.css'

const Vehicule = (props) => {
    // hook d'affichage des details
    const [afficherDetails, setAfficherDetails] = useState(false);
    const [klaxoner, setKlaxoner] = useState(false);

    const handleDetails = () => {
        setAfficherDetails(true)
    }

    const handleKlaxon = () => {
        setKlaxoner(true)
    }

    return (
        <div className="Vehicule">
            <div className="vehiculeRow">
                {props.type.toUpperCase()}
            </div>
            <div className="vehiculeRow">
                Marque: {props.marque}
            </div>
            <div className="vehiculeRow">
                Anée de construction: {props.annee}
            </div>
            <div className="vehiculeRow">
                Couleur: {props.couleur}
            </div>
            <button className="vehiculeRow" onClick={handleDetails} sx={{width: "50%",}}>Détails</button>
            <button className="vehiculeRow" onClick={handleKlaxon} sx={{width: "50%",}}>Klaxonner</button>
        </div>

    )
}

export default Vehicule