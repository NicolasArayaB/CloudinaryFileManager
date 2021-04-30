import React, { useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const Upload = () => {
	const { actions } = useContext(Context);

	useEffect(() => {}, []);

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.File label="Subir archivo" ref={fileInput} />
				</Form.Group>
				<Button type="submit">Subir</Button>
			</Form>
		</>
	);
};

export default Upload;
