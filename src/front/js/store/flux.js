const getState = ({ setStore }) => {
	return {
		store: {
			login: [],
			files: []
		},
		actions: {
			setLogin: (userData, history) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(userData),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						if (data.status == 200) {
							const loginData = {
								token: data.token,
								email: data.user.email,
								id: data.user.id,
								name: data.name
							};
							setStore({ login: loginData });

							if (typeof Storage !== "undefined") {
								localStorage.setItem("token", loginData.token);
								localStorage.setItem("email", loginData.email);
								localStorage.setItem("name", loginData.name);
								history.push("/files");
								history.go();
							} else {
								// LocalStorage no soportado en este navegador
								alert("Lo sentimos, tu navegador no es compatible.");
							}
						} else {
							alert(data.msg);
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			register: userData => {
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify(userData),
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(data => {
						console.log("Usuario registrado con exito");
					})
					.catch(error => {
						console.log(error);
					});
			},

			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const nameLocal = localStorage.getItem("name");
				setStore({
					role: {
						token: tokenLocal,
						name: nameLocal
					}
				});
			},

			fileUpload: (filesArr, setFiles, file, userName) => {
				const fileInfo = {
					filename: file.original_filename,
					uploaded_by: userName,
					uploaded_at: file.created_at,
					file_format: file.format,
					url: file.url
				};

				fetch(process.env.BACKEND_URL + `/api/files`, {
					method: "POST",
					body: JSON.stringify(fileInfo),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						setFiles(...filesArr, data.files);
						console.log(filesArr);
					})
					.catch(error => console.log("Unexpected error", error));
			},

			getFiles: setFiles => {
				fetch(process.env.BACKEND_URL + `/api/files`, {
					method: "GET",
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						setFiles(data.files);
						console.log(data, "filesData");
					})
					.catch(error => console.log("Unexpected error", error));
			}
		}
	};
};

export default getState;
