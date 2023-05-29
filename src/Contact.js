//function component life cycle method and state
import React,{useEffect,useState} from "react";

function Contact()
{
    useEffect(() =>{
        console.log("useeffect called");
    },)

    const [name, setName] = useState('Nandani');
    const [age, setAge]  = useState(21);

    return (
        <div>
            <h1>Contact Component</h1>
            <p>Name : {name}</p>
            <p>Age : {age}</p>

            <button onClick={() => {setName("Nandani Koli")}}>Change name</button>
            <button onClick={() => {setAge(22)}}>Change age</button>

        </div>
    );
}

export default Contact;