import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Policy = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
       
        <div className="col-md-4">
          <h1>ALL DATA ARE SAFE</h1>
          <button
          type="button"
          class="btn btn-success mx-2"
          onClick={() => navigate(`/`)}
        >
         HomePage
        </button>
        </div>
        
      </div>
      
    </Layout>
  );
}

export default Policy;
