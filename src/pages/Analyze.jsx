import { useState } from "react";

function Analyze() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f9",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "600px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#1e3a8a" }}>Upload X-ray Image</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginTop: "20px" }}
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{
              marginTop: "20px",
              width: "100%",
              borderRadius: "8px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Analyze;
