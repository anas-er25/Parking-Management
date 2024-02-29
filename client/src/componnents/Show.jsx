import { useEffect, useState } from "react";

function Show() {
  
  const [parking, setParking] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/parking")
      .then((response) => response.json())
      .then((data) => {
        setParking(data);
      });
  }, []);

  return (
   <>
      {parking.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="justify-content-center">
          <h1>Liste des Parking</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              {parking.map((park, id) => {
                return (
                  <tr key={id}>
                    <td scope="row">{park.id}</td>
                    <td scope="row">{park.name}</td>
                    <td scope="row">{park.type}</td>
                    <td scope="row">{park.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Show;
