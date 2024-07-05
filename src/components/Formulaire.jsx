import React, { useState } from 'react';

const Formulaire = (props) => {
    const [type, setType] = useState('');
    const [marque, setMarque] = useState('');
    const [annee, setAnnee] = useState('');
    const [couleur, setCouleur] = useState('');


    const onFormSubmit = (event) => {
        event.preventDefault();
        alert(`Vehicule de type ${type} bien ajouté`);
    };

    return (
        <div className="Formulaire">
            <h1>Ajouter un véhicule</h1>
            <form onSubmit={onFormSubmit}>
                <label>Type:</label>
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <br/>
                <br/>
                <label>Marque :</label>
                <input
                    type="email"
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                />
                <br/>
                <br/>
                <label>Année:</label>
                <input
                    type="text"
                    value={annee}
                    onChange={(e) => setAnnee(e.target.value)}
                />
                <br/>
                <br/>
                <label>Couleur:</label>
                <input
                    type="text"
                    value={couleur}
                    onChange={(e) => setCouleur(e.target.value)}
                />
                <br/>
                <br/>
                <input type="submit" value="Ajouter un vehicule"/>
            </form>
        </div>
    );
};

export default Formulaire;
