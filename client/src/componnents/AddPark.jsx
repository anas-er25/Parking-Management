import { useState } from "react";

function AddPark({ onAdd, parking }) {
  const [newPark, setNewPark] = useState({ name: "", type: "", city: "" });

  // Calcul du prochain ID en fonction de la longueur actuelle des données
  const nextId = parking.length + 1;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPark({ ...newPark, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParkWithId = { ...newPark, id: nextId };
    onAdd(newParkWithId);
    setNewPark({ name: "", type: "", city: "" });
  };

  return (
    <div>
      <h2>Ajouter un parking</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newPark.name}
          onChange={handleInputChange}
          placeholder="Nom du parking"
        />
        <input
          type="text"
          name="type"
          value={newPark.type}
          onChange={handleInputChange}
          placeholder="Type du parking"
        />
        <input
          type="text"
          name="city"
          value={newPark.city}
          onChange={handleInputChange}
          placeholder="Ville du parking"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddPark;
