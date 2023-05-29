import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'

function Users() {
    const [user,setUser] = useState([]);

    useEffect(() => {
        fetch('https://dummy.restapiexample.com/api/v1/employees').then((data) => {
            data.json().then(result=> {
                console.log("results" ,result);
                setUser(result.data);
            })
        })
    },[])
    
    return (
        <div>
            <h1>List of users</h1>
            {/* {
                user.map((item, i) =>
                    <ul key={i}>
                        <li>{item.name},{item.age}</li>
                    </ul>
                )} */}
            {/* {user.length === 6 ? <div>yes it is true</div>: <div>NO it is not true</div>} */}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </div>
    );
}

export default Users;