import { createContext, useContext, useEffect, useState } from "react";

const apiContext = createContext();

export function ApiContextProvider({ children }) {
	const [logements, setLogements] = useState([]);
	const [about, setAbout] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// Récuperation de tout les logements
	const fetchLogements = async () => {
		try {
			const response = await fetch("http://localhost:3000/datas/data.json");

			const jsonData = await response.json();

			setLogements(jsonData);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchLogements();
	}, []);

	// Récuperation du fichier contenant le text de la page About
	const fetchAbout = async () => {
		try {
			const response = await fetch(
				"http://localhost:3000/datas/dataAbout.json"
			);

			const jsonData = await response.json();

			setAbout(jsonData);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchAbout();
	}, []);

	// Fonction pour return un seul logement
	//un peu de refacto pour éviter d'appeler une variable une seule fois et de la retourner tout de suite
	const getLogementById = (id) => {
		return logements.find((apart) => {
			return apart.id === id;
		});
	};

	return (
		<apiContext.Provider
			value={{
				logements,
				about,
				isError,
				getLogementById,
				isLoading,
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
