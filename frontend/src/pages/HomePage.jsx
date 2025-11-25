import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  if (auth.user === null) {
    return (
      <Layout title={"Welcome"}>
        <div className="home1">
          <h1>Please Register and Login</h1>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => navigate(`/register`)}
          >
            Register
          </button>
          <button
            type="button"
            class="btn btn-success mx-2"
            onClick={() => navigate(`/login`)}
          >
            Login
          </button>
        </div>
      </Layout>
    );
  }
  return (
  <Layout title={"Best offers "}>
    <div
      className="home1"
      style={{
        textAlign: "center",
        marginTop: "40px",
        color: "darkblue",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      <h1>Welcome {auth.user.name}</h1>
      <br />

      <div
        style={{
          background: "#e8f0ff",
          padding: "20px",
          borderRadius: "10px",
          display: "inline-block",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>USER NAME : {auth.user.name}</h2>
        <h2>USER GMAIL ID : {auth.user.email}</h2>
        <h2>USER PHONE : {auth.user.phone}</h2>
      </div>

      <br /><br />

      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={() => navigate(`/customer/create`)}
      >
        CLICK HERE TO APPLY LOAN
      </button>
    </div>
  </Layout>
);

};

export default HomePage;
