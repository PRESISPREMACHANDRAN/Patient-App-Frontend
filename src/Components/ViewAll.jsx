import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [data, changeData] = useState({ data: [] });

  const fetchData = () => {
    axios.post("http://localhost:4000/viewAll").then((response) => {
      console.log(response.data)
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">UHID Number</th>
                      <th scope="col">Patient Name</th>
                      <th scope="col">Hospital Name</th>
                      <th scope="col">Doctor Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Date of Birth</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Pin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.SlNo}</th>
                          <td>{value.uhid}</td>
                          <td>{value.name}</td>
                          <td>{value.hospitalName}</td>
                          <td>{value.doctorName}</td>
                          <td>{value.gender}</td>
                          <td>{value.dob}</td>
                          <td>{value.mobileNo}</td>
                          <td>{value.email}</td>
                          <td>{value.address}</td>
                          <td>{value.pin}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
