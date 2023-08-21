import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
function Check()
{
    const[checkboxes,setCheckboxes]=useState([
        {id:1, label:'Do you want a debit card',isChecked:false},
        {id:2, label:'Opt for Net Banking',isChecked:false},

        {id:3, label:'I agree...',isChecked:false},

    ])
    
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
            label={'Permanent Address same as Mailing Address' }
          />

        </div>
        </Form>
    );
}
export default Check ;
