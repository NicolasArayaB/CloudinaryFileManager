import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const Upload = () => {
	const { actions } = useContext(Context);

	const myWidget = cloudinary.createUploadWidget(
		{
			cloudName: "pet-cloud-img",
			upload_preset: "romerotest"
		},
		(error, result) => {
			if (result.event == "success") {
				actions.fileUpload(result.info, localStorage.getItem("name"));
				console.log(result);
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

export default Upload;
