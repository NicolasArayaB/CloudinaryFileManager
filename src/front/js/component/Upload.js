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
				actions.fileUpload(props.files, props.setFiles, result.info, localStorage.getItem("name"));
			}
		}
	);

	const handleClick = () => {
		myWidget.open();
	};

	return (
		<>
			<Button onClick={() => handleClick()} type="submit">
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
