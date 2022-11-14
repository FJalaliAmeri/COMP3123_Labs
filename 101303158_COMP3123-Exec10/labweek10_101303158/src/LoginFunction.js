import React, { Fragment, useState } from "react";

export default function LoginFunction(props) {
    
    const default_values = {
        email: "",
        full_name: "",
        address_1: "",
        address_2: "",
        city: "",
        province: "",
        post_code: "",
        agreement: false
    }

    let [data, setData] = useState(default_values)
    
    data.provinces = ["ON", "BC", "PE", "NU", "QC", "SK", "NS", "YT", "MB", "NL", "AB", "NT", "NB"]

    const onSubmit = (event) => {
        event.preventDefault()
      
    }

    const clearForm = (event) => {
        event.preventDefault()
        setData({...default_values})
    }

    const onValueChanged = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    return(
        <Fragment >
            <div className='shadow-lg p-4 m-5 bg-white rounded'>
                <form>
                    <div className='row text-center'>
                        <div className="form-group col-md-6">
                            <label className="pb-1" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={data.email} 
                                onChange={event => onValueChanged(event)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="pb-1" htmlFor="full_name">Full Name</label>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                className="form-control"
                                placeholder="Enter Full Name"
                                value={data.full_name}
                                onChange={event => onValueChanged(event)} />
                        </div>
                    </div>
                    <div className="row pt-3 text-center">
                        <div className="form-group col">
                            <label className="pb-1" htmlFor="address_1">Address 1</label>
                            <input  
                                type="text"
                                id="address_1"
                                name="address_1"
                                className="form-control"
                                placeholder="Enter Address 1"
                                value={data.address_1}
                                onChange={event => onValueChanged(event)} />
                        </div>
                    </div>
                    <div className="row pt-3 text-center">
                        <div className="form-group col">
                            <label className="pb-1" htmlFor="address_2">Address 2</label>
                            <input
                                type="text"
                                id="address_2"
                                name="address_2"
                                className="form-control"
                                placeholder="Enter Address 2"
                                value={data.address_2}
                                onChange={event => onValueChanged(event)} />
                        </div>
                    </div>
                    <div className='row text-center pt-3'>
                        <div className="form-group col-md-4">
                            <label className="pb-1" htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="form-control"
                                placeholder="Enter City"
                                value={data.city}
                                onChange={event => onValueChanged(event)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="pb-1" htmlFor="province">Province</label>
                            <select id="province" name="province" className="form-select" onChange={event => onValueChanged(event)}>
                                {
                                data.provinces.map(province => (
                                    <option key={province} value={province}>{province}</option>
                                ))
                                }   
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="pb-1" htmlFor="post_code">Post Code</label>
                            <input 
                                type="text"
                                id="post_code"
                                name="post_code"
                                className="form-control"
                                placeholder="Enter Post Code"
                                value={data.post_code}
                                onChange={event => onValueChanged(event)} />
                        </div>
                    </div>
                    <div className="form-check pt-4">
                        <input 
                            type="checkbox"
                            id="agreement"
                            name="agreement"
                            className="form-check-input ml-5"
                            checked={data.agreement}
                            onChange={event => onValueChanged(event)} />
                        <label htmlFor="agreement" className="form-check-label">I agree to the Terms & Conditions</label>
                    </div>
                    <div className="col-md-12 text-center">
                        <input 
                            type="submit" 
                            name="btnSubmit"
                            className="btn btn-success p-2" 
                            value="Submit" 
                            onClick={ (e) => onSubmit(e)} />
                        <input 
                            type="reset" 
                            className="btn btn-danger p-2 m-2"
                            value="Clear" 
                            onClick={ e => clearForm(e)} />
                    </div>
                    </form>
                </div>
                <div>
                <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h4>Email:</h4>
                                </div>
                                <div className='col-6'>
                                    {data.email}
                                </div>

                                <div className='col-6'>
                                    <h4>Fullname:</h4>
                                </div>
                                <div className='col-6'>
                                    {data.full_name}
                                </div>
                                
                                <div className='col-6'>
                                    <h4>Address:</h4>
                                </div>
                                <div className='col-6'>
                                    {data.address_1 + ' - ' + data.address_2}
                                </div>
                                
                                <div className='col-6'>
                                    <h4>City:</h4>
                                </div>
                                <div className='col-6'>
                                    {data.city}
                                </div>
                                
                                <div className='col-6'>
                                    <h4>Province:</h4>
                                </div>
                                <div className='col-6'>{data.province}</div>
                                
                                <div className='col-6'>
                                    <h4>Postal Code:</h4>
                                </div>
                                <div className='col-6'>{data.post_code}</div>
                            </div>
                        </div>
                </div>
        </Fragment>
    )
}