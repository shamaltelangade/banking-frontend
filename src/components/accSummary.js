import React from "react";
function accSummary(){
    const summaryURL ="https://"
    const [transactions,setTransaction] = useState([]);
    const [acc,setAcc] = useState();
    
    const fetchTransaction = () =>{
        axios.get(summaryURL).then((response)=>{
            setTransaction(response.data);
        }).catch(error=>{
            alert("Error occurred while loading data:"+error);
        });
    }
    useEffect(()=>{
        fetchTransaction();
    },[acc]);

    return(
        <div>
            <label for="accNum">Select Account</label>

                <select name="accNum" id="accNum">
                <option value="12345">12345</option>
                <option value="12346">12346</option>
                <option value="12347">12347</option>
                <option value="23525">23525</option>
                </select>
        <Table striped>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                transactions.map((transaction) =>
                    
                    <tr >
                    <td>transaction.accNum</td>
                    <td>transaction.transactionType</td>
                    <td>transaction.amount</td>
                </tr>
                )}
                
            </tbody>
        </Table>
    
    </div>
    );
}
export default accSummary;