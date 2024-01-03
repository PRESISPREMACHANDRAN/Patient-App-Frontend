import React, { useState } from "react";
import Header from "./Header";

const ViewAll = () => {
  const [data,changeData]=useState(

    [
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":"12-1-1992","mobileNo":45677888899},
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":12-1-1992,'mobileNo':45677888899},
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":12-1-1992,'mobileNo':45677888899},
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":12-1-1992,'mobileNo':45677888899},
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":12-1-1992,'mobileNo':45677888899},
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":12-1-1992,'mobileNo':45677888899},
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":12-1-1992,'mobileNo':45677888899},
      {"SlNo":1,"uhidNo":1,"patientName":"DEV","hospitalName":'xyx',"doctorName":'sam',"gender":'male',"dob":12-1-1992,'mobileNo':45677888899}
    ]
  )
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
                    </tr>
                  </thead>
                  <tbody>

                  {data.map(
                    (value,index)=>{
                                        return (
                                          <tr>
                                            <th scope="row">{value.SlNo}</th>
                                            <td>{value.uhidNo}</td>
                                            <td>{value.patientName}</td>
                                            <td>{value.hospitalName}</td>
                                            <td>{value.doctorName}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.mobileNo}</td>
                                          </tr>
                                        );

                    }
                  )}
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
