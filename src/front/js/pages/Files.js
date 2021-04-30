import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Uploaded from "../component/Uploaded";
import Upload from "../component/Upload";

export const Files = () => {
	return (
		<Container>
			<Row>
				<Col className="mt-5">
					<h1>Tus archivos</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<Uploaded />
				</Col>
			</Row>
			<Row>
				<Col>
					<Upload />
				</Col>
			</Row>
		</Container>
	);
};
