import React from "react";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Uploaded = props => {
	return (
		<Table striped bordered hover className="my-5">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Subido por</th>
					<th>Fecha</th>
					<th>Formato</th>
					<th>Descargar</th>
				</tr>
			</thead>
			<tbody>
				{props.files ? (
					props.files.map((file, index) => (
						<tr key={index}>
							<td>{file.filename}</td>
							<td>{file.uploaded_by}</td>
							<td>
								{file.uploaded_at
									.split("T")[0]
									.split("-")
									.reverse()
									.join("-")}
							</td>
							<td>{file.file_format}</td>
							<td>
								<Button onClick={() => window.open(file.url)}>Descargar</Button>
							</td>
						</tr>
					))
				) : (
					<tr />
				)}
			</tbody>
		</Table>
	);
};

Uploaded.propTypes = {
	files: PropTypes.array,
	setFiles: PropTypes.func
};
export default Uploaded;
