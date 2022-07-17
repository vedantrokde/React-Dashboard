import { Login } from "@mui/icons-material";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./common/data/formSource";
import Home from "./containers/home/Home";
import Details from "./containers/users/details/Details";
import List from "./containers/users/list/List";
import New from "./containers/users/new/New";

import "./App.scss";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="users">
						<Route index element={<List />} />
						<Route
							path="new"
							element={
								<New inputs={userInputs} title="Add New User" />
							}
						/>
						<Route path=":userId" element={<Details />} />
					</Route>
					<Route path="products">
						<Route index element={<List />} />
						<Route
							path="new"
							element={
								<New
									inputs={productInputs}
									title="Add New Product"
								/>
							}
						/>
						<Route path=":productId" element={<Details />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
