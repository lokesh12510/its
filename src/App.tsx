import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ThemeWrapper from "./themes";

function App() {
	return (
		<>
			<ThemeWrapper>
				{/* Router DOM wrapper */}
				<BrowserRouter children={<AppRoutes />} />
				{/* Router DOM wrapper */}
			</ThemeWrapper>
		</>
	);
}

export default App;
