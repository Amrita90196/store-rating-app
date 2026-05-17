import Navbar from "./components/Navbar";
import StoreCard from "./components/StoreCard";

function App() {

  const stores = [
    { name: "Pizza Palace", desc: "Best pizza 🍕", rating: 4.5 },
    { name: "Burger Hub", desc: "Juicy burgers 🍔", rating: 4.2 },
    { name: "Cafe Coffee", desc: "Chill vibes ☕", rating: 4.7 }
  ];

  return (
    <>
      <Navbar />
      <h1>Welcome 🚀</h1>

      {stores.map((store, index) => (
        <StoreCard
          key={index}
          name={store.name}
          desc={store.desc}
          rating={store.rating}
        />
      ))}
    </>
  );
}

export default App;