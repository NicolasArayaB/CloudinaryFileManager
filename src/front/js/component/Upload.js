import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const Upload = () => {
	const { actions, store } = useContext(Context);

	const myWidget = cloudinary.createUploadWidget(
		{
			cloudName: "pet-cloud-img",
			upload_preset: "romerotest"
		},
		(error, result) => {
			if (result.event == "success") {
				console.log(result.info, "uploadInfo");
				actions.fileUpload(result.info, store.login.name);
			}
		}
	);

	const handleClick = () => {
		myWidget.open();
	};

	useEffect(() => {}, []);

	return (
		<>
			<Button onClick={() => handleClick()} type="submit">
				Subir nuevo archivo
			</Button>
		</>
	);
};

export default Upload;
