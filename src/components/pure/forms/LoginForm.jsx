import { useState } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const LoginForm = () => {


    const initialCredentials = {
        email: '',
        password: ''
    };

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Email format not correct')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
             .min(6)

        }
    )




    return (
        <>
            <h4>LOGIN FORM</h4>
            <Formik
                initialValues={initialCredentials}

                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credential',values)
                }}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                    } = props

                    return (
                        <Form>

                            <Field
                                id="email"
                                className="form-control mt-1"
                                name="email"
                                placeholder="Introduce tu email"
                                type="email"
                            />
                            {
                                errors.email && touched.email &&
                                <p className="error">
                                    {errors.email}
                                </p>
                            }

                            <Field
                                id="password"
                                className="form-control mt-1"
                                name="password"
                                placeholder="Escribe tu password"
                                type="password" />
                            {
                                errors.password && touched.password &&
                                <p className="error">
                                    {errors.password}
                                </p>
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}


            </Formik>
        </>
    )
}
export default LoginForm;