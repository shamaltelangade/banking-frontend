import React, { useState } from 'react';
import './register.css';
import CheckboxContainer from './checkbox';
import Check from './checkbox2';
import Dropdown from 'react-bootstrap/Dropdown';

import axios from "axios";

const Register = () => {
    const baseURL = "http://localhost:8080/register";
    const [title, settitle] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [middleName, setmiddleName] = useState('');
    const [fathersName, setfathersName] = useState('');
    const [mobileNum, setmobileNum] = useState('');
    const [email, setemail] = useState('');
    const [aadhar, setaadhar] = useState('');
    const [dob, setdob] = useState('');
    const [addressLine1, setaddressLine1] = useState('');
    const [addressLine2, setaddressLine2] = useState('');
    const [landmark, setlandmark] = useState('');
    const [state, setstate] = useState('');
    const [city, setcity] = useState('');
    const [pincode, setpincode] = useState('');
    const [paddressLine1, setpaddressLine1] = useState('');
    const [paddressLine2, setpaddressLine2] = useState('');
    const [plandmark, setplandmark] = useState('');
    const [pstate, setpstate] = useState('');
    const [pcity, setpcity] = useState('');
    const [ppincode, setppincode] = useState('');
    const [occupationType, setoccupationType] = useState('');
    const [sourceOfIncome, setsourceOfIncome] = useState('');
    const [grossAnnualIncome, setgrossAnnualIncome] = useState('');
    //const[, set] = useState('');


    const titleChangeHandler = (event) => {
        settitle(event.target.value)
    }
    const firstNameChangeHandler = (event) => {
        setfirstName(event.target.value)
    }
    const middleNameChangeHandler = (event) => {
        setmiddleName(event.target.value)
    }
    const lastNameChangeHandler = (event) => {
        setlastName(event.target.value)
    }
    const fathersNameChangeHandler = (event) => {
        setfathersName(event.target.value)
    }
    const mobileNumChangeHandler = (event) => {
        setmobileNum(event.target.value)
    }
    const emailChangeHandler = (event) => {
        setemail(event.target.value)
    }
    const aadharChangeHandler = (event) => {
        setaadhar(event.target.value)
    }
    const dobChangeHandler = (event) => {
        setdob(event.target.value)
    }
    const addressLine1ChangeHandler = (event) => {
        setaddressLine1(event.target.value)
    }
    const addressLine2ChangeHandler = (event) => {
        setaddressLine2(event.target.value)
    }
    const landmarkChangeHandler = (event) => {
        setlandmark(event.target.value)
    }
    const stateChangeHandler = (event) => {
        setstate(event.target.value)
    }
    const cityChangeHandler = (event) => {
        setcity(event.target.value)
    }
    const pincodeChangeHandler = (event) => {
        setpincode(event.target.value)
    }
    const paddressLine1ChangeHandler = (event) => {
        setpaddressLine1(event.target.value)
    }
    const paddressLine2ChangeHandler = (event) => {
        setpaddressLine2(event.target.value)
    }
    const plandmarkChangeHandler = (event) => {
        setplandmark(event.target.value)
    }
    const pstateChangeHandler = (event) => {
        setpstate(event.target.value)
    }
    const pcityChangeHandler = (event) => {
        setpcity(event.target.value)
    }
    const ppincodeChangeHandler = (event) => {
        setppincode(event.target.value)
    }
    const occupationTypeChangeHandler = (event) => {
        setoccupationType(event.target.value)
    }
    const sourceOfIncomeChangeHandler = (event) => {
        setsourceOfIncome(event.target.value)
    }
    const grossAnnualIncomeChangeHandler = (event) => {
        setgrossAnnualIncome(event.target.value)
    }




    const submitActionHandler = (event) => {
        event.preventDefault();
        axios
            .post(baseURL, {
                title: title,
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                fathersName: fathersName,
                mobileNum: mobileNum,
                aadhar: aadhar,
                email: email,
                dob: dob,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                landmark: landmark,
                state: state,
                city: city,
                pincode: pincode,
                paddressLine1: paddressLine1,
                paddressLine2: paddressLine2,
                plandmark: plandmark,
                pstate: pstate,
                pcity: pcity,
                ppincode: ppincode,
                occupationType: occupationType,
                sourceOfIncome: sourceOfIncome,
                grossAnnualIncome: grossAnnualIncome

            })
            .then((response) => {
                alert(response.data);
            })
            .catch(error => {
                alert("error===" + error);
            });
    };
    return (
        <div className="c">
            <div className="flex-box">
                <div className="v">
                    <form onSubmit={submitActionHandler}>
                        <h2 className='r'>Register</h2>
                        <h3>Personal Details</h3>
                        <div className='input8'>
                            <label>Title*</label>
                            <input type="text" value={title} onChange={titleChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>First Name*</label>
                            <input type="text" value={firstName} onChange={firstNameChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>Middle Name</label>
                            <input type="text" value={middleName} onChange={middleNameChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>Last Name*</label>

                            <input type="text" value={lastName} onChange={lastNameChangeHandler} required></input>
                        </div>
                        <div className='input8'>
                            <label>Father's Name*</label>

                            <input type="text" value={fathersName} onChange={fathersNameChangeHandler} required></input>
                        </div>
                        <div className='input8'>
                            <label>Email Id</label>
                            <input type="text" value={email} onChange={emailChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>Aadhar Card Number*</label>
                            <input type="text" value={aadhar} onChange={aadharChangeHandler} required></input>

                        </div>

                        <div className='input8'>
                            <label>PAN Card Number*</label>
                            <input type="text" required></input>

                        </div>

                        <div className='input8'>
                            <label>Mobile Number*</label>

                            <input type="text" value={mobileNum} onChange={mobileNumChangeHandler} required></input>
                        </div>
                        <div className='input8'>
                            <label>Date Of Birth*</label>
                            <input type="text" value={dob} onChange={dobChangeHandler} required></input>

                        </div>
                        <h3>Residential
                            Address
                        </h3>
                        <div className='input8'>
                            <label>Address Line1 *</label>

                            <input type="text" value={addressLine1} onChange={addressLine1ChangeHandler} required></input>
                        </div>
                        <div className='input8'>
                            <label>Address Line2*</label>
                            <input type="text" value={addressLine2} onChange={addressLine2ChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>Landmark*</label>
                            <input type="text" value={landmark} onChange={landmarkChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>State*</label>
                            <input type="text" value={state} onChange={stateChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>City*</label>
                            <input type="text" value={city} onChange={cityChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>Pincode*</label>
                            <input type="text" value={pincode} onChange={pincodeChangeHandler} required></input>

                        </div>




                        <h3>Permanent Address</h3>
                        <div className="f">
                            <Check />


                        </div>
                        <div className='input8'>
                            <label>Address Line1 *</label>
                            <input type="text" value={paddressLine1} onChange={paddressLine1ChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>Address Line2*</label>
                            <input type="text" value={paddressLine2} onChange={paddressLine2ChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>Landmark*</label>
                            <input type="text" value={plandmark} onChange={plandmarkChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>State*</label>
                            <input type="text" value={pstate} onChange={pstateChangeHandler} required></input>

                        </div>
                        <div className='input8'>
                            <label>City*</label>

                            <input type="text" value={pcity} onChange={pcityChangeHandler} required></input>
                        </div>
                        <div className='input8'>
                            <label>Pincode*</label>
                            <input type="text" value={ppincode} onChange={ppincodeChangeHandler} required></input>

                        </div>


                        <h3>Occupation Detail</h3>
                        <div className='input4'>
                            <label>Occupation Type*</label>
                            {/* <input type="text" value={occupationType}onChange={occupationTypeChangeHandler} required></input> */}
                            {/* <select name="dropdown"> */}
                            {/* <option value="option1">Option 1</option> */}
                            {/* <option value="option2">Option 2</option> */}

                            {/* <option value="option3">Option 3</option> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Occupation Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                            {/* </select> */}
                        </div>
                        <div className='input4'>
                            <label>Source Of Income*</label>
                            {/* <input type="text" value={sourceOfIncome}onChange={sourceOfIncomeChangeHandler} required></input> */}
                            {/* <select name="dropdown"> */}
                            {/* <option value="option1">Option 1</option> */}
                            {/* <option value="option2">Option 2</option> */}

                            {/* <option value="option3">Option 3</option> */}


                            {/* </select> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Source of Income
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div className='input4'>
                            <label>Gross Annual Income*</label>
                            {/* <input type="text" value={grossAnnualIncome}onChange={grossAnnualIncomeChangeHandler} required></input> */}
                            {/* <select name="dropdown"> */}
                            {/* <option value="option1">Option 1</option> */}
                            {/* <option value="option2">Option 2</option> */}

                            {/* <option value="option3">Option 3</option> */}


                            {/* </select> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Gross annual Income
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>

                        <h3>Debit / ATM Card</h3>

                        <div className='k'>
                            <CheckboxContainer />
                        </div>
                        <div className='btt'>
                            <button id="b1" type='submit'>Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register