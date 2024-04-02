import { useThemeContext } from "../../contexts/theme-context";

const Logo = () => {

   const { theme, setTheme } = useThemeContext();

    // if theme is dark mode, return dark mode logo...

    // if theme is light mode, return light mode logo...


    return (
        <>
            <div style={{ background: theme === 'dark' ? '#000' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>Logo {theme}</div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change</button>
        </>
    )
}

export default Logo;
