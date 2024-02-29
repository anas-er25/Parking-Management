import React, { useEffect, useState } from "react";
import AddPark from "./componnents/AddPark";
import Show from "./componnents/Show";

function App() {
  const [parking, setParking] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/parking")
      .then((response) => response.json())
      .then((data) => {
        setParking(data);
      });
  }, []);
  const addParking = async (newPark) => {
    try {
      const response = await fetch("http://localhost:3000/parking", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPark),
      });
      const data = await response.json();
      setParking(data);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du parking:', error);
    }
  };

  return (
    <div className="Container">
      <Show />
      <AddPark onAdd={addParking} parking={parking} />
    </div>
  );
}

export default App;
