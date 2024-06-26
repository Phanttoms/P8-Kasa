import { createContext, useContext, useEffect, useState } from "react";
import jsonData from "../datas/data.json";
import jsonDataAbout from "../datas/dataAbout.json";

const apiContext = createContext();

export function ApiContextProvider({ children }) {
	const [logements, setLogements] = useState([]);
	const [about, setAbout] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// Récuperation de tout les logements
	const fetchLogements = async () => {
		try {
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
			setAbout(jsonDataAbout);
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
