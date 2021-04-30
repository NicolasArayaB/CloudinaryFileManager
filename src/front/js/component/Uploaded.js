import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../store/appContext";

const Uploaded = () => {
	const { actions } = useContext(Context);
	const [files, setFiles] = useState("");

	const handleClick = url => {
		window.open(url);
	};

	useEffect(() => {
		actions.getFiles(setFiles);
	}, []);

	return (
		<Table striped bordered hover className="my-5">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Subido por</th>
					<th>Subido en</th>
					<th>Formato</th>
					<th>Descargar</th>
				</tr>
			</thead>
			<tbody>
				{files
					? files.map((file, index) => (
							<tr key={index}>
								<td>{file.filename}</td>
								<td>{file.uploaded_by}</td>
								<td>{file.uploaded_at}</td>
								<td>{file.file_format}</td>
								<td>
									<button onClick={() => handleClick(file.url)}>Descargar</button>
								</td>
							</tr>
					  ))
					: ""}
			</tbody>
		</Table>
	);
};

export default Uploaded;
