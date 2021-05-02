import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import Uploaded from "../component/Uploaded";
import Upload from "../component/Upload";

export const Files = () => {
	const { actions } = useContext(Context);
	const [files, setFiles] = useState("");

	useEffect(() => {
		actions.getFiles(setFiles);
	}, []);

	return (
		<Container>
			<Row className="mt-5">
				<Col md={12} className="text-align-center">
					<h1>Tus archivos</h1>
				</Col>
				<Col className="logoutBtn">
					<Dropdown>
						<Dropdown.Toggle id="loggedButton">Hola {localStorage.getItem("name")} </Dropdown.Toggle>
						<Dropdown.Menu className="navDropDn">
							<Dropdown.Item href="/" onClick={() => localStorage.clear()}>
								Cerrar sesión
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Row>
			<Row>
				<Col>
					<Uploaded files={files} setFiles={setFiles} />
				</Col>
			</Row>
			<Row>
				<Col>
					<Upload files={files} setFiles={setFiles} />
				</Col>
			</Row>
		</Container>
	);
};
