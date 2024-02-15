import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesPath from "./components/RoutesPath";
import { ApiContextProvider } from "./context/apiContext";

function App() {
	return (
		<>
			<ApiContextProvider>
				<Header />
				<RoutesPath />
				<Footer />
			</ApiContextProvider>
		</>
	);
}

export default App;
