import React from "react";

function createAccount(){
    return(
        <div>
            <h3>Create New Account</h3>
            <label for="type">Select Account Type </label>
            <select name="type" id="type">
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
                <option value="Demat">Demat</option>
                <option value="Salary">Salary</option>
            </select>

            <label for="ifsc">Select IFSC </label>
            <select name="ifsc" id="ifsc">
                <option value="001">001</option>
                <option value="002">002</option>
                <option value="003">003</option>
                <option value="004">004</option>
            </select>
            <input type="number" placeholde=" Enter Balance"> </input><br></br>
            <button >Create Account</button> 
        </div>
    );
}
export default createAccount;
