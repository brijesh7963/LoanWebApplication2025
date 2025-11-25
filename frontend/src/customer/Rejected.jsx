import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Rejected = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"Best offers "}>
      <div className="home1" style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ color: "darkred", fontWeight: "bold" }}>
          SORRY! YOU ARE NOT ELIGIBLE FOR LOAN
        </h1>

        <button
          className="btn btn-danger mt-4"
          onClick={() => navigate("/customer/create")}
        >
          GO BACK
        </button>
      </div>
    </Layout>
  );
};

export default Rejected;
