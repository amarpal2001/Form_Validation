import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import './Rgt.css';
function Register(props) {

    const { register, handleSubmit, errors } = useForm({
        mode: "onChange"
    })

    const onSubmit = data => {
        console.log(data);
        console.log(errors);

    }
    return (
        <>
            <div className="container my-4 ">
                <h2 className="text-center my-5 text-black">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" className={classNames("form-control", {
                            "is-invalid": errors.fname
                        })}
                            id="fname"
                            ref={register({
                                required: "This field is required !",
                                minLength: {
                                    value: 4,
                                    message: "minimum 4 characters is required !",
                                },
                            })}
                            name="fname" >
                        </input>

                        {errors.fname
                            && (
                                <div className="invalid-feedback">
                                    {errors.fname.message}
                                </div>
                            )}

                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className={classNames("form-control", {
                            "is-invalid": errors.email
                        })}
                            id="email"
                            ref={register({
                                required: "This field is required !",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$&'*+/=?`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Please enter a valid e-mail address",
                                },
                            })}
                            name="email">
                        </input>

                        {errors.email
                            && (
                                <div className="invalid-feedback">
                                    {errors.email.message}
                                </div>
                            )}

                    </div>

                    <div className="form-group">
                        <label htmlFor="Pnumber">Phone Number</label>
                        <input type="number" className={classNames("form-control", {
                            "is-invalid": errors.Pnumber
                        })}
                            id="Pnumber"
                            ref={register({
                                required: "This field is required !",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: "Please enter a valid 10-digit phone number",
                                },
                            })}
                            name="Pnumber">
                        </input>

                        {errors.Pnumber
                            && (
                                <div className="invalid-feedback">
                                    {errors.Pnumber.message}
                                </div>
                            )}

                    </div>

                    <div className="form-group">
                        <label htmlFor="psw">Password</label>
                        <input type="password" className={classNames("form-control", {
                            "is-invalid": errors.psw
                        })}
                            id="psw"
                            ref={register({
                                required: "This field is required !",
                                pattern: {
                                    value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                    message: "Password must be in (Uppercase,Lowercase,Number/Specialcharacters and min 8 Chars)",
                                },
                            })}
                            name="psw">
                        </input>

                        {errors.psw
                            && (
                                <div className="invalid-feedback">
                                    {errors.psw.message}
                                </div>
                            )}

                    </div>
                    {errors.gender
                        && (
                            <small className="form-text text-danger">
                                {errors.gender.message}
                            </small>
                        )}
                    {errors.check
                        && (
                            <small className="form-text text-danger">
                                {errors.check.message}
                            </small>
                        )}

                    <div className="btn text-center w-100">
                        <button type="submit" className="btn btn-primary w-50">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Register;