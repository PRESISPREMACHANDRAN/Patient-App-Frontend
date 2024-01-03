import React from 'react'
import Header from './Header'

const AddPatient = () => {
  return (
    <div>
      <Header/>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Patient Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Gender</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">UHID Number</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Hospital Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Date of Birth</label>
                        <input type="date" name="" id="" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Doctor Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Email ID</label>
                        <input type="email" name="" id="" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" />
                        
                      </div>
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Pin Code</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Submit</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default AddPatient