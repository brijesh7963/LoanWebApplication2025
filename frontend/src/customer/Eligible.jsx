import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Eligible = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"Best offers "}>
      <div className="home1" style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ color: "green", fontWeight: "bold" }}>
          YOU HAVE APPLIED LOAN SUCCESSFULLY
        </h1>

        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate("/status")}
        >
          Check Status
        </button>
      </div>
    </Layout>
  );
};

export default Eligible;
