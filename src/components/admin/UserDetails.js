import React from 'react';

function UserDetails({ user }) {

    const stringConcat = (isComma, strings) => {
        let res = "";
        for(let i=0;i<strings.length;i++) {
            if(strings[i] != null) {
                res += (strings[i] + (isComma ? ", ": " "));
            }
        }
        return res;
    } 

  return (
    <div>
      <div>
        <strong>Name:</strong> {stringConcat(false, [user.title, user.firstName, user.middleName, user.lastName])}
      </div>
      <div>
        <strong>Father's Name:</strong> {user.fatherName}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Mobile No:</strong> {user.mobileNo}
      </div>
      <div>
        <strong>Aadhar Number:</strong> {user.aadhar}
      </div>
      <div>
        <strong>PAN Number:</strong> {user.pan}
      </div>
      <div>
        <strong>Current Address</strong> {stringConcat(true,[user.addressLine1, user.addressLine2, user.landmark, user.district, user.state, `India (${user.pincode})`])}
      </div>
      <div>
        <strong>Permananent Address:</strong> {user.samePermanentAddress ? stringConcat(true,[user.addressLine1, user.addressLine2, user.landmark, user.district, user.state, `India (${user.pincode})`]) : stringConcat(true,[user.addressLine1P, user.addressLine2P, user.landmarkP, user.districtP, user.stateP, `India (${user.pincodeP})`])}
      </div>
      <div>
        <strong>Occupation Type:</strong> {user.occupationType}
      </div>
      <div>
        <strong>Occupation:</strong> {user.occupation}
      </div>
      <div>
        <strong>Total Gross Annual Income:</strong> {user.annualIncome}
      </div>
      <div>
        <strong>Net Banking Opted:</strong> {user.netBankingOpted ? "Yes" : "No"}
      </div>
      <div>
        <strong>Debit Card Opted:</strong> {user.debitCardOpted ? "Yes" : "No"}
      </div>
    </div>
  );
}

export default UserDetails;
