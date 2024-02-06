import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';

const AddPatient = () => {

  const [input, changeInput] = useState({
    uhid: "",
    name: "",
    hospitalName: "",
    doctorName: "",
    gender: "",
    dob: "",
    email:"",
    address:"",
    mobileNo:"",
    pin:""
  });

const readValue=(e)=>[
  changeInput({...input,[e.target.name]:e.target.value})
]

const submitValue=()=>{
  console.log(input)
  axios.post("http://localhost:4000/add",input).then(
    (response)=>{
if (response.data.status == "success") {
  alert("successfully added")
} else {

  alert("error occured....")
}
    }
  );
}


  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Patient Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="gender"
                  value={input.gender}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  UHID Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="uhid"
                  value={input.uhid}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Hospital Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="hospitalName"
                  value={input.hospitalName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="form-control"
                  name="dob"
                  value={input.dob}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Doctor Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="doctorName"
                  value={input.doctorName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="mobileNo"
                  value={input.mobileNo}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={input.address}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Pin Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="pin"
                  value={input.pin}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPatient