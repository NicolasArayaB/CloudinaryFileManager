import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Uploaded = props => {
	const handleClick = url => {
		window.open(url);
	};

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
								<Button onClick={() => handleClick(file.url)}>Descargar</Button>
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
