import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CustomerDetail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [creditscore, setCreditscore] = useState("");
  const [ammount, setAmmount] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert to numbers
    const incomeNum = Number(income);
    const creditNum = Number(creditscore);
    const amountNum = Number(ammount);

    // --- Normalization (0–1 scale) ---
    const incomeNorm = Math.min(incomeNum / 1000000, 1); // assume max income = 10 lakh
    const creditNorm = Math.min(creditNum / 900, 1); // max credit score = 900

    // --- Score Formula ---
    const score = (0.6 * creditNorm) + (0.4 * incomeNorm);

    // --- Threshold ---
    const threshold = 0.6;

    // --- Decision ---
    const status = score >= threshold ? "PENDING" : "REJECTED";

    try {
      // Save data to backend
      const res = await axios.post("http://localhost:8000/api/v1/customer/create", {
        name,
        email,
        income: incomeNum,
        creditscore: creditNum,
        ammount: amountNum,
        eligibilityScore: score,
        status: status,
      });

      if (res && res.data.success) {
        toast.success("Data Saved Successfully");

        // Navigate based on eligibility
        if (status === "PENDING") {
          navigate("/Eligible");
        } else {
          navigate("/Rejected");
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Add new student"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Your Details</h4>

          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="form-control"
              placeholder="Enter your income"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              value={creditscore}
              onChange={(e) => setCreditscore(e.target.value)}
              className="form-control"
              placeholder="Enter credit score"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              value={ammount}
              onChange={(e) => setAmmount(e.target.value)}
              className="form-control"
              placeholder="Enter loan amount"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Apply Loan
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CustomerDetail;
