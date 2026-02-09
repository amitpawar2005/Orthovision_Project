import { useState } from "react";
import { Link } from "react-router-dom";

// --- NAVBAR COMPONENT ---
function Navbar() {
  const [hover, setHover] = useState(null);

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        {/* BRAND */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={styles.logoBadge}>AI</div>
          <div>
            <h2 style={{ margin: 0, color: "#0f172a", fontSize: "1.2rem" }}>OrthoVision</h2>
            <small style={{ color: "#64748b" }}>AI Fracture Analysis</small>
          </div>
        </div>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: "34px" }}>
          {["Home", "Analyze", "About"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onMouseEnter={() => setHover(item)}
              onMouseLeave={() => setHover(null)}
              style={{
                ...styles.navLink,
                color: hover === item ? "#2563EB" : "#334155",
              }}
            >
              {item}
              <span style={{ ...styles.navUnderline, width: hover === item ? "100%" : "0%" }} />
            </Link>
          ))}
        </div>

        {/* AUTH ACTIONS */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onMouseEnter={() => setHover("login")}
            onMouseLeave={() => setHover(null)}
            style={{
              ...styles.btnSecondary,
              background: hover === "login" ? "rgba(37,99,235,0.05)" : "transparent",
            }}
          >
            Login
          </button>
          <button
            onMouseEnter={() => setHover("signup")}
            onMouseLeave={() => setHover(null)}
            style={{
              ...styles.btnPrimary,
              transform: hover === "signup" ? "translateY(-2px)" : "none",
              boxShadow: hover === "signup" ? "0 10px 25px rgba(56,189,248,0.5)" : "0 6px 20px rgba(37,99,235,0.3)",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

// --- STYLES OBJECT ---
const styles = {
  nav: {
    width: "100%",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  navContainer: {
    width: "85%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0",
  },
  logoBadge: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #2563EB, #38BDF8)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(56,189,248,0.4)",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "500",
    position: "relative",
    transition: "all 0.2s",
  },
  navUnderline: {
    position: "absolute",
    left: 0,
    bottom: "-4px",
    height: "2px",
    background: "#2563EB",
    transition: "width 0.2s",
  },
  btnPrimary: {
    padding: "10px 22px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #2563EB, #38BDF8)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  btnSecondary: {
    padding: "10px 22px",
    borderRadius: "10px",
    border: "2px solid #2563EB",
    color: "#2563EB",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
  },
};

export default Navbar;
