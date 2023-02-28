import React, { useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate} from 'react-router-dom'


const Edit = () => {

    const navigate =useNavigate();
    const [inpval, setINP] = useState({
      title:"",
      description:"",
      status:"",
      dueDate:""
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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`https://todolist-api-6olz.onrender.com/find/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
       getdata();
    }, []);

    const updateUser=async(e)=>{
        e.preventDefault();
        const {title,description,status,dueDate}=inpval;
        const res2 =await fetch(`https://todolist-api-6olz.onrender.com/updateUser/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,description,status,dueDate
            })
        });

        const data2 =await res2.json();
        console.log(data2);

        if(res2.status===400 || !data2){
            alert("fill the data ");
        }
        else{
            alert("data has been updated..")
            navigate("/");
        }



    }




    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Title</label>
                        <input type="text" value={inpval.title} onChange={setdata} name="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <input type="text" value={inpval.description} onChange={setdata} name="description" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Due Date</label>
                        <input type="Date" name='dueDate' value={inpval.dueDate} onChange={setdata} class="form-control" id="exampleInputPassword1" />

                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Status</label>
                        <input type="text" name='status' value={inpval.status} onChange={setdata} class="form-control" id="exampleInputPassword1" />

                    </div>


                    <button type="submit" onClick={updateUser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;
