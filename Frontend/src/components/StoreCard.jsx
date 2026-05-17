function StoreCard() {
  return (
    <div style={{
      border: "1px solid #444",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      background: "#1e1e1e",
      color: "white"
    }}>
      <h3>Pizza Palace</h3>
      <p>Best pizza in town 🍕</p>
      <p>Rating: ⭐ 4.5</p>
      <button>Rate</button>
    </div>
  );
}

export default StoreCard;