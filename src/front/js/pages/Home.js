import React, { useState } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/home.scss";
import Login from "../component/Login";
import Register from "../component/Register";

export const Home = () => {
	const [registeredUser, setRegisteredUser] = useState(true);

	return (
		<Container>
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
