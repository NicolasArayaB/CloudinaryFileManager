import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
			<Row>
				<Col className="mt-5">
					<h1>Tus archivos</h1>
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
