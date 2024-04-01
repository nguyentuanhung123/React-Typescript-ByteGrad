import React, { createContext, useState } from 'react'
import { useContext } from "react";

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type Theme = 'dark' | 'light';

type ThemeContext = {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {

    const [theme, setTheme] = useState<Theme>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme,}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('Theme context should be used within ThemeContextProvider');
    }
    return context;
}
