import { createContext, useContext, useEffect, useState } from "react";

const apiContext = createContext();

export function ApiContextProvider({ children }) {
	const [logements, setLogements] = useState([]);
	const [about, setAbout] = useState([]);
	const [isError, setIsError] = useState(false);

	// Récuperation de tout les logements
	const fetchLogements = async () => {
		try {
			const response = await import("../datas/data.json");

			const jsonData = response.default;

			setIsError(false);
			setLogements(jsonData);
		} catch (error) {
			setIsError(true);
		}
	};
	useEffect(() => {
		fetchLogements();
	}, [logements]);

	// Récuperation du fichier contenant le text de la page About
	const fetchAbout = async () => {
		try {
			const response = await import("../datas/dataAbout.json");

			const jsonData = response.default;

			setIsError(false);
			setAbout(jsonData);
		} catch (error) {
			setIsError(true);
		}
	};
	useEffect(() => {
		fetchAbout();
	}, [about]);

	// // Fonction pour return un seul logement
	// const getLogementById = (id) => {
	// 	setIsError(false);
	// 	const data = logements.find((apart) => {
	// 		return apart.id === id;
	// 	});
	// 	if (data === undefined) {
	// 		setIsError(true);
	// 	}
	// 	return data;
	// };

	return (
		<apiContext.Provider
			value={{
				logements,
				about,
				isError,
				// getLogementById,
			}}
		>
			{children}
		</apiContext.Provider>
	);
}

export function useAPI() {
	const context = useContext(apiContext);

	if (context === undefined) {
		throw new Error("Context must be used within provider");
	}
	return context;
}
