function StoreCard({ name, desc, rating }) {
  return (
    <div style={{
      border: "1px solid #444",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      background: "#1e1e1e",
      color: "white"
    }}>
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>Rating: ⭐ {rating}</p>
      <button>Rate</button>
    </div>
  );
}

export default StoreCard;