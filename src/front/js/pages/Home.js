import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/home.scss";
import Login from "../component/Login";
import Register from "../component/Register";

export const Home = () => {
	const { store } = useContext(Context);
	const [registeredUser, setRegisteredUser] = useState(true);
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		localStorage.getItem("token") ? setRedirect(!redirect) : "";
	}, []);

	return (
		<Container>
			{redirect ? <Redirect to="/files" /> : ""}
			<Row>
				<Col className="my-5">
					<h1 className="text-center">File Manager</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					{registeredUser ? (
						<Login setRegisteredUser={setRegisteredUser} />
					) : (
						<Register setRegisteredUser={setRegisteredUser} />
					)}
				</Col>
			</Row>
		</Container>
	);
};
