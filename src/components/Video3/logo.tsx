import { useThemeContext } from "../../contexts/theme-context";

const Logo = () => {

   const { theme, setTheme } = useThemeContext();

    // if theme is dark mode, return dark mode logo...

    // if theme is light mode, return light mode logo...


    return (
        <>
            <div>Logo {theme }</div>
            <button onClick={() => setTheme('dark')}>Change to Dark</button>
            <button onClick={() => setTheme('light')}>Change to Light</button>
        </>
    )
}

export default Logo;
