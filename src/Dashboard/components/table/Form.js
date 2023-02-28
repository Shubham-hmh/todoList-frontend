import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Form = () => {

    const[status,setStatus]=useState("");
    const options = ['Acive', 'Pending', 'delay', 'completed'];
    const navigate = useNavigate();

    const [inpval, setINP] = useState({
        title: "",
        description: "",
        dueDate: "",
        status: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { title, description, dueDate, status } = inpval;

        const res = await fetch("https://todolist-api-6olz.onrender.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description, dueDate, status
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            console.log("data added");
            navigate("/");


        }
    }

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" value={inpval.title} onChange={setdata} name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" value={inpval.description} onChange={setdata} name="description" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Due Date</label>
                        <input type="Date" name='dueDate' value={inpval.dueDate} onChange={setdata} className="form-control" id="exampleInputPassword1" />

                    </div>

                    {/* <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Status</label>
                        <input type="text" name='status' value={inpval.status} onChange={setdata} class="form-control" id="exampleInputPassword1" />

                    </div> */}

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Status</label>
                    <select name="status" className="form-control" id="exampleInputPassword1" onChange={setdata}>
                        <option value={inpval.status} >Please choose option</option>
                        {options.map((option, index) => {
                            return <option key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                    </div>
              


                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form;