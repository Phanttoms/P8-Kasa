import { createContext, useContext, useEffect, useState } from "react";

const apiContext = createContext();

export function ApiContextProvider({ children }) {
	const [logements, setLogements] = useState([]);
	const [about, setAbout] = useState([]);
	// const [logement, setLogement] = useState([]);
	const [isError, setIsError] = useState(false);

	const fetchLogements = async () => {
		try {
			const response = await import("../datas/data.json");

			const jsonData = response.default;

			setLogements(jsonData);
		} catch (error) {
			setIsError(true);
		}
	};
	useEffect(() => {
		fetchLogements();
	}, [logements]);

	const fetchAbout = async () => {
		try {
			const response = await import("../datas/dataAbout.json");

			const jsonData = response.default;

			setAbout(jsonData);
		} catch (error) {
			setIsError(true);
		}
	};
	useEffect(() => {
		fetchAbout();
	}, [about]);

	const getLogementById = (id) => {
		const data = logements.find((apart) => {
			return apart.id === id;
		});
		return data;
	};

	return (
		<apiContext.Provider
			value={{
				logements,
				about,
				isError,
				getLogementById,
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
