import React from "react";
import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Adminpage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/customer/alldata"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error:", error);
        setError("Error occurred while fetching data");
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/v1/admin/status/${id}`, {
        status: "APPROVED",
      });

      // Update UI immediately
      setData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "APPROVED" } : item
        )
      );

      toast.success("Customer Approved!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/v1/admin/status/${id}`, {
        status: "REJECTED",
      });

      // Update UI immediately
      setData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "REJECTED" } : item
        )
      );

      toast.success("Customer Rejected!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"All students data "}>
      <div className="container student-container">
        <div className="student-btn">
          <h2>LOAN REVIEWS</h2>
        </div>
        <ul>
          {data.map((item) => (
            <div key={item._id} className="table-container">
              <table className="student-table">
                <div className="student-edit">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleApprove(item._id)}
                  >
                    APPROVE
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger mx-2"
                    onClick={() => handleReject(item._id)}
                  >
                    REJECT
                  </button>
                </div>
                <tr>
                  <th>Email</th>
                  <td colSpan={2}>{item.email}</td>
                  <th rowSpan={2}>STATUS</th>
                </tr>
                <tr>
                  <th>Name</th>
                  <td colSpan={2}>{item.name}</td>
                </tr>
                <tr>
                  <th rowSpan={3}>DETAILS</th>
                  <th>INCOME</th>
                  <td>{item.income}</td>
                  <td
                    rowSpan={3}
                    style={{
                      color:
                        item.status === "APPROVED"
                          ? "green"
                          : item.status === "REJECTED"
                          ? "red"
                          : "blue",
                      fontWeight: "bold",
                    }}
                  >
                    {item.status || "Pending"}
                  </td>
                </tr>
                <tr>
                  <th>CREDIT SCORE</th>
                  <td>{item.creditscore}</td>
                </tr>
                <tr>
                  <th>AMMOUNT</th>
                  <td>{item.ammount}</td>
                </tr>
              </table>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Adminpage;
