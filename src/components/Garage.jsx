import React from 'react';
import Vehicule from './Vehicule.jsx';

const Garage = () => {
    let vehiculeList = [
        {id: 1, type: "voiture", marque: "Ford", annee: "1998", couleur: "rouge"},
        {id: 2, type: "camion", marque: "Volvo", annee: "2003", couleur: "vert"},
        {id: 3, type: "moto", marque: "Ducati", annee: "2019", couleur: "bleu"},
    ];

    //vehiculeList = [];

    return (
        <div className="Garage">
            <h1>Garage</h1>
            {vehiculeList.length > 0 ?
                <div className="vehiculeItem">
                    {vehiculeList.map((vehicule) => (
                        <Vehicule
                            key={vehicule.id}
                            type={vehicule.type}
                            marque={vehicule.marque}
                            annee={vehicule.annee}
                            couleur={vehicule.couleur}
                        />
                    ))}
                </div> : <>Votre garage est vide</>}
        </div>
    );
};

export default Garage;
