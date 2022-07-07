import { User } from "../../../models/user.Class"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ROLES } from "../../../models/levels.enum";



const RegisterForm = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {

            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Email format not correct')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'Role must be USER or ADMIN')
                .required('EL Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')], 'Passwords must match!')
                })
                .required('You must confirm the password')
        }
    )

    const submit = () => {
        console.log('User Create')
    }

    return (
        <>
            <h4>REGISTER FORM</h4>
            <Formik
                initialValues={initialValues}

                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (

                    <Form>

                        <Field
                            id="username"
                            className="form-control mt-1"
                            name="username"
                            placeholder="Introduce tu username"
                            type="text"
                        />
                        {
                            errors.username && touched.username &&
                            <p className="error">{errors.username}</p>
                        }
                        <Field
                            id="email"
                            className="form-control mt-1"
                            name="email"
                            placeholder="Introduce tu email"
                            type="text"
                        />
                        {
                            errors.email && touched.email &&
                            <p className="error">{errors.email}</p>
                        }

                        <Field
                            id="password"
                            className="form-control mt-1"
                            name="password"
                            placeholder="Escribe tu password"
                            type="password" />
                        {
                            errors.password && touched.password &&
                            <p className="error">{errors.password}</p>
                        }
                        <Field
                            id="confirm"
                            className="form-control mt-1"
                            name="confirm"
                            placeholder="Repite tu password"
                            type="password" />
                        {
                            errors.confirm && touched.confirm &&
                            <p className="error">{errors.confirm}</p>
                        }
                        <button type="submit">Register</button>
                    </Form>
                )
                }


            </Formik>
        </>
    )
}
export default RegisterForm