import React from "react";
import { Table } from "react-bootstrap";

const Uploaded = () => {
	return (
		<Table striped bordered hover className="my-5">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Subido por</th>
					<th>Ver/Descargar?</th> {/* revisar! */}
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Holi</td>
					<td>Estoy</td>
					<td>Probando</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default Uploaded;
