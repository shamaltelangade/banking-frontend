import Table from 'react-bootstrap/Table';
import Header from './dashboard/Header';

function TransferSuccessful() {
  return (<><Header/>
    <Table striped bordered hover>
        <h1>Transer Successful!</h1>
      
      <tbody>
        <tr>
          <td>Reference ID</td>
          <td></td>
        </tr>
        
        <tr>
          <td>Transaction Mode</td>
          <td>Dummy </td>
        </tr>
        <tr>
          <td>Paid to Account</td>
          <td> </td>
        </tr>

        <tr>
          <td>Amount</td>
          <td> </td>
        </tr>
        <tr>
          <td>From Account</td>
          <td> </td>
        </tr>
        <tr>
          <td>Date</td>
          <td> </td>
        </tr>
        <tr>
          <td>Remarks</td>
          <td> </td>
        </tr>
        
      </tbody>
    </Table>
    </>
  );
}

export default TransferSuccessful;