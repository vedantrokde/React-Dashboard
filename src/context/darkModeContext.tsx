import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
	darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }: { children: any }) => {
	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	return (
		<DarkModeContext.Provider
			// @ts-ignore:next-line
			value={{ darkMode: state.darkMode, dispatch }}
		>
			{children}
		</DarkModeContext.Provider>
	);
};
