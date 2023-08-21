import React,{useState} from 'react';
import {Form} from 'react-bootstrap';


function CheckboxContainer()
{
    const[checkboxes,setCheckboxes]=useState([
        {id:1, label:'Do you want a debit card',isChecked:false},
        {id:2, label:'Opt for Net Banking',isChecked:false},

        {id:3, label:'I agree...',isChecked:false},


    ]);
    const handleCheckboxChange=(id) =>{
        const updatedCheckbboxes=checkboxes.map((checkbox)=>
        checkbox.id==id?{...checkbox,isChecked:!checkbox.isChecked}:checkbox
        );
        setCheckboxes(updatedCheckbboxes);
    };

    return (
        <Form>
            <div key={`default-checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox`}
            label={'Do you want a debit card'}
          />

          <Form.Check
            type={'checkbox'}
            label={`Opt for Net banking`}
            id={`disabled-default-checkbox`}
          />
          <Form.Check
            type={'checkbox'}
            label={`I agree...`}
            id={`disabled-default-checkbox`}
          />
        </div>
        </Form>
    );
    // return(
    //     <div>
    //         {checkboxes.map((checkbox)=>(
    //          <label key={checkbox.id}>
    //             <input
    //             type="checkbox"
    //             checked={checkbox.isChecked}
    //             onChange={()=>handleCheckboxChange(checkbox.id)}
    //             />
    //             {checkbox.label}
    //          </label>   
    //         )
    //         )}
    //     </div>
    // );
}
export default CheckboxContainer ;
