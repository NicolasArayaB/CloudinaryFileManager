import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Upload = props => {
	const { actions } = useContext(Context);

	const myWidget = cloudinary.createUploadWidget(
		{
			cloudName: "pet-cloud-img",
			upload_preset: "romerotest"
		},
		(error, result) => {
			if (result.event == "success") {
				actions.fileUpload(result.info, localStorage.getItem("name"), props.setFiles);
			} else if (result.status) alert(result.statusText, error);
		}
	);

	return (
		<>
			<Button onClick={() => myWidget.open()} type="submit">
				Subir nuevo archivo
			</Button>
		</>
	);
};

Upload.propTypes = {
	files: PropTypes.array,
	setFiles: PropTypes.func
};

export default Upload;
