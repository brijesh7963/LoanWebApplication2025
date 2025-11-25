import React from "react";
import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Loanstatus = () => {
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

  return (
    <Layout title={"All students data "}>
      <div className="container student-container">
        <div className="student-btn">
          <h2>ALL LOAN STATUS</h2>

          <div>
            {/*   <form onSubmit={handleSearch}>
              <div className="mb-3">
                <input
                  type="text"
                  value={rollno}
                  onChange={(e) => setRollno(e.target.value)}
                  className="form-control"
                  id="rollnosearch"
                  placeholder="Enter student rollno "
                  required
                />
                <button type="submit" className="btn btn-primary searchbtn">
                  SEARCH
                </button>
              </div>
            </form> */}
          </div>
        </div>
        <ul>
          {data.map((item) => (
            <div key={item._id} className="table-container">
              <table className="student-table">
                <div className="student-edit">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => navigate(`/students/edit/${item._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger mx-2"
                    onClick={(e) => handleDelete({ e, id: item._id })}
                  >
                    Delete
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

export default Loanstatus;
