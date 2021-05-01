import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

const Login = props => {
	const { actions } = useContext(Context);
	const history = useHistory();

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = "E-mail requerido";
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = "Email no es valido";
				} else if (!values.password) {
					errors.password = "Contraseña requerida";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				actions.setLogin(values, history);
			}}>
			{() => (
				<Form className="registrationForm mx-auto">
					<Field className="m-2" type="email" name="email" placeholder="Ingresa tu e-mail" />
					<ErrorMessage name="email" component="div" />
					<Field className="m-2" type="password" name="password" placeholder="Ingresa tu contraseña" />
					<ErrorMessage name="password" component="div" />
					<Button className="my-3" type="submit">
						Submit
					</Button>
					<p>
						¿Aun no estás registrado?
						<a className="registeredBtn pe-auto" href="#" onClick={() => props.setRegisteredUser(false)}>
							{" "}
							Regístrate
						</a>
					</p>
				</Form>
			)}
		</Formik>
	);
};

Login.propTypes = {
	setRegisteredUser: PropTypes.func
};

export default Login;
