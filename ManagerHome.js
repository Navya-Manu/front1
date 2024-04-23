import React,{useState,useEffect} from 'react';
import axios from 'axios';
const ManagerHome=()=>{
    const[employees,setEmployees]=useState([]);


    // useEffect(()=>{
    //     fetchEmployees();
    // }, [])

    const fetchEmployees = async () => {
        console.log("inside fetch function");
        try {
            const response = await axios.get('http://localhost:8085/api/employees/all');
            if (response.status === 200) {
                setEmployees(response.data);
            } else {
                console.error('failed', response.status);
            }
        } catch (error) {
            console.error('error fetching', error);
        }
    };

    return(
        <div>
            <h2>Manager Home</h2>
            {/* <button onClick={()=>fetchEmployees()}>Fetch employee</button> */}
            <button onClick={fetchEmployees}>Fetch employee</button>
            <ul>
                {employees && employees.map(employee=>(
                    <li key={employee.empId}>{employee.empName}-{employee.role}-{employee.email} 

                    </li>
                ))}
            </ul>
            
        </div>
    );
};
export default ManagerHome;