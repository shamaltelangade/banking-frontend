import React, { useState } from 'react';
import './register.css';
import axios from "axios";
import { Col, Container, Row } from 'reactstrap';


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
    const [pan, setPan] = useState('');
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
    const [occupationType, setoccupationType] = useState('sel1');
    const [sourceOfIncome, setsourceOfIncome] = useState('sel2');
    const [grossAnnualIncome, setgrossAnnualIncome] = useState('sel3');
    const [sameAsCurrent, setSameAsCurrent] = useState(false);
    const [debitCard, setDebitCard] = useState(false);
    const [netBanking, setNetBanking] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');


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

    const submitActionHandler = (event) => {
        event.preventDefault();
        if (occupationType != "sel1" && sourceOfIncome != "sel2" && grossAnnualIncome != "sel3") {
            if (password == confPassword) {
                axios
                    .post(baseURL, {
                        title: title,
                        firstName: firstName,
                        lastName: lastName,
                        middleName: middleName,
                        fatherName: fathersName,
                        email: email,
                        mobileNo: mobileNum,
                        aadhar: aadhar,
                        addressLine1: addressLine1,
                        addressLine2: addressLine2,
                        landmark: landmark,
                        state: state,
                        district: city,
                        pincode: pincode,
                        samePermanentAddress: sameAsCurrent,
                        addressLine1P: paddressLine1,
                        addressLine2P: paddressLine2,
                        landmarkP: plandmark,
                        stateP: pstate,
                        districtP: pcity,
                        pincodeP: ppincode,
                        occupationType: occupationType,
                        occupation: sourceOfIncome,
                        annualIncome: grossAnnualIncome,
                        pan: pan,
                        dob: dob,
                        username: username,
                        password: password
                    })
                    .then((response) => {
                        alert(response.data);
                        // navigate("/dashboard");
                    })
                    .catch(error => {
                        alert("error===" + error);
                    });
            }
            else {
                alert("Password and confirm password must match");
            }
        }
        else {
            alert("Please fill all the compulsory fields");
        }
    };

    return (
        <div className="c">
            <div className="flex-box">
                <div className="v">
                    <form onSubmit={submitActionHandler}>
                        <h2 className='r'>Registeration Form</h2>
                        <div className='reg-form'>
                            <h3>Personal Details</h3>
                            <p>Fields marked * are complusary</p>
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
                                <input type="text" value={pan} onChange={(e) => setPan(e.target.value)} required></input>

                            </div>

                            <div className='input8'>
                                <label>Mobile Number*</label>

                                <input type="text" value={mobileNum} onChange={mobileNumChangeHandler} required></input>
                            </div>
                            <div className='input8'>
                                <label>Date Of Birth*</label>
                                <input type="date" value={dob} onChange={dobChangeHandler} required></input>

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

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value={sameAsCurrent} onChange={() => {
                                        setSameAsCurrent(!sameAsCurrent);
                                    }} id="permanentAddress" />
                                    <label class="form-check-label" for="permanentAddress">
                                        Same as current address
                                    </label>
                                </div>



                            </div>

                            <div className='input8'>
                                <label>Address Line1 *</label>
                                <input disabled={sameAsCurrent} type="text" value={paddressLine1} onChange={paddressLine1ChangeHandler} required></input>

                            </div>
                            <div className='input8'>
                                <label>Address Line2*</label>
                                <input disabled={sameAsCurrent} type="text" value={paddressLine2} onChange={paddressLine2ChangeHandler} required></input>

                            </div>
                            <div className='input8'>
                                <label>Landmark*</label>
                                <input disabled={sameAsCurrent} type="text" value={plandmark} onChange={plandmarkChangeHandler} required></input>

                            </div>
                            <div className='input8'>
                                <label>State*</label>
                                <input disabled={sameAsCurrent} type="text" value={pstate} onChange={pstateChangeHandler} required></input>

                            </div>
                            <div className='input8'>
                                <label>City*</label>

                                <input disabled={sameAsCurrent} type="text" value={pcity} onChange={pcityChangeHandler} required></input>
                            </div>
                            <div className='input8'>
                                <label>Pincode*</label>
                                <input disabled={sameAsCurrent} type="text" value={ppincode} onChange={ppincodeChangeHandler} required></input>

                            </div>


                            <h3>Occupation Detail</h3>
                            <div className='input4'>
                                <label>Occupation Type*</label>
                                <select required value={occupationType} class="form-select" aria-label="Occupation Type" onChange={(e) => {
                                    setoccupationType(e.target.value);
                                }}>
                                    <option value="sel1">Select Occupation Type</option>
                                    {["Private Sector", "Public Sector", "Governement Sector", "Business", "Student", "Self Employed", "Housewife", "Others"].map((k) => {
                                        return (
                                            <option key={k} value={k}>{k}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className='input4'>
                                <label>Source Of Income*</label>

                                <select required value={sourceOfIncome} class="form-select" aria-label="Source of  Income" onChange={(e) => {
                                    setsourceOfIncome(e.target.value);
                                }}>
                                    <option value="sel2">Select Source of Income</option>
                                    {["Manufacturing", "Trading", "Service", "Retailing", "Agriculture", "Real Estate", "Others"].map((k) => {
                                        return (
                                            <option key={k} value={k}>{k}</option>
                                        );
                                    })}
                                </select>

                            </div>
                            <div className='input4'>
                                <label>Gross Annual Income*</label>

                                <select required value={grossAnnualIncome} class="form-select" aria-label="Gross Annual Income" onChange={(e) => {
                                    setgrossAnnualIncome(e.target.value);
                                }}>
                                    <option value="sel3">Select Gross Annual Income</option>
                                    {["< 1 Lakhs", "1 Lakh to 5 Lakhs", "5 Lakhs to 12 Lakhs", ">12 Lakhs"].map((k) => {
                                        return (
                                            <option key={k} value={k}>{k}</option>
                                        );
                                    })}
                                </select>

                            </div>

                            <h3>Debit / ATM Card</h3>

                            <div className='k'>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value={netBanking} onChange={() => {
                                        setNetBanking(!netBanking);
                                    }} id="netBanking" />
                                    <label class="form-check-label" for="netBanking">
                                        Opt for Internet Banking?
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value={debitCard} onChange={() => {
                                        setDebitCard(debitCard);
                                    }} id="debitCard" />
                                    <label class="form-check-label" for="debitCard">
                                        Opt for Debit Card?
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="agree" checked />
                                    <label class="form-check-label" for="agree">
                                        I agree to the terms & conditions
                                    </label>
                                </div>


                            </div>

                            <Container style={{marginTop: "50px"}}>
                                <Row>
                                    <Col className='col-md-6 col-12'>
                                        <label htmlFor="username" class="form-label">Username</label>
                                        <input required minLength="8" type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" class="form-control" aria-describedby="usernameHelp" />
                                        <div id="usernameHelp" class="form-text">
                                            Your username must be between 8-20 characters                                        </div>
                                        <label htmlFor="password" class="form-label">Password</label>
                                        <input required minLength="8" type="text" value={password} onChange={(e) => setPassword(e.target.value)} id="password" class="form-control" aria-describedby="passwordHelp" />
                                        <div id="passwordHelp" class="form-text">
                                            Your password must be 8-30 characters long, contain letters, characters and numbers.
                                        </div>
                                        <label htmlFor="confPassword" class="form-label">Confirm Password</label>
                                        <input required minLength="8" type="text" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} id="confPassword" class="form-control" aria-describedby="confPasswordHelp" />
                                        <div id="confPasswordHelp" class="form-text">
                                            Password must match with confirm password                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <div className='btt'>
                                <button id="b1" type='submit'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;