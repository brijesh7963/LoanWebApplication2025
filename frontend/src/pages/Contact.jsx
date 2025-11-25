import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
       
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about this project
          </p>
          <p className="mt-3">
            <BiMailSend /> : viki914011@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9140117963
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

export default Contact;
