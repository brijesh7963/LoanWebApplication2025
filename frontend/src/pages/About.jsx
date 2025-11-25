import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-4">
          <p className="text-justify mt-2">
            This is the full mern crud app you can create student data update and delete it.
            I have used React as frontend and express.js, mongodb as backend.
          </p>
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
};

export default About;
