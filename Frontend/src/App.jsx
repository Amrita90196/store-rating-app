import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [stores, setStores] = useState([]);

  const getStores = async () => {
    try {
      const response = await axios.get("http://localhost:5000/stores");
      setStores(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStores();
  }, []);

  return (
    <div>
      <h1>Store Rating App</h1>

      {stores.map((store) => (
        <div key={store.id}>
          <h3>{store.name}</h3>
          <p>{store.address}</p>
          <p>Rating: {store.rating}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;