import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Context } from "../store/appContext";

const Register = props => {
	const { actions } = useContext(Context);

	return (
		<Container>
			<Formik
				initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
				validate={values => {
					const errors = {};
					if (!values.name) {
						errors.name = "Nombre requerido";
					} else if (!values.email) {
						errors.email = "Email requirido";
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = "Ingresa un email valido";
					} else if (!values.password) {
						errors.password = "Debes ingresar una contraseña";
					} else if (values.password != values.confirmPassword) {
						errors.confirmPassword = "Tu contraseña no coincide";
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting }) => {
					await actions.register(values);
					props.setRegisteredUser(true);
				}}>
				{({ isSubmitting }) => (
					<Form className="registrationForm mx-auto">
						<Field className="m-2" type="name" name="name" placeholder="Ingresa tu nombre" />
						<ErrorMessage name="name" component="div" />
						<Field className="m-2" type="email" name="email" placeholder="Ingresa tu e-mail" />
						<ErrorMessage name="email" component="div" />
						<Field className="m-2" type="password" name="password" placeholder="Ingresa tu contraseña" />
						<ErrorMessage name="password" component="div" />
						<Field
							className="m-2"
							type="password"
							name="confirmPassword"
							placeholder="Ingresa nuevamente tu contraseña"
						/>
						<ErrorMessage name="confirmPassword" component="div" />
						<Button className="my-3" type="submit" disabled={isSubmitting}>
							Submit
						</Button>
						<p className="mb-0">¿Ya estás registrado?</p>
						<a className="registeredBtn pe-auto" href="#" onClick={() => props.setRegisteredUser(true)}>
							{" "}
							Ingresa a tu cuenta
						</a>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

Register.propTypes = {
	setRegisteredUser: PropTypes.func
};

export default Register;
