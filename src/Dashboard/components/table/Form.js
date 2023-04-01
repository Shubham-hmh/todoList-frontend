import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';

const signUpSchema = yup.object({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    dueDate: yup.string().required("DueDate is Required"),
    status: yup.string().required("Status is Required"),


});
const Form = () => {

    const navigate = useNavigate();

    const addinpdata = async (e) => {
        const { title, description, dueDate, status } = e;
        const res = await fetch("https://todolist-api-6olz.onrender.com/api/todo/", {
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

    const formik = useFormik({
        initialValues: {
            title: '',
            description: "",
            dueDate: "",
            status: "",

        },
        validationSchema: signUpSchema,
        onSubmit: values => {
            addinpdata(values);
        },
    });

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4" onSubmit={formik.handleSubmit} >
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type='text' name='title' value={formik.values.title} onChange={formik.handleChange("title")} onBlur={formik.handleBlur("title")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Title of Todo :' />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <input type="name" name="description" value={formik.values.description} onChange={formik.handleChange("description")} onBlur={formik.handleBlur("description")} placeholder='Enter Description' className="form-control" id="exampleInputPassword1" />
                        <div className="error">
                            {formik.touched.description && formik.errors.description}
                        </div>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Due Date</label>
                        <input type="Date" name="dueDate" value={formik.values.dueDate} onChange={formik.handleChange("dueDate")} onBlur={formik.handleBlur("dueDate")} placeholder='Enter DueDate' className="form-control" id="exampleInputPassword1" />
                        <div className="error">
                            {formik.touched.dueDate && formik.errors.dueDate}
                        </div>
                    </div>



                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Status</label>
                        <input type="text" name="status" value={formik.values.status} onChange={formik.handleChange("status")} onBlur={formik.handleBlur("status")} placeholder='Enter Status' className="form-control" id="exampleInputPassword1" />
                        <div className="error">
                            {formik.touched.status && formik.errors.status}
                        </div>
                    </div>

                    <button className="button border-0 btn btn-primary" >Add Todo</button>


                </div>
            </form>

        </div>
    )
}
export default Form;