import React, { useState } from 'react'

type Theme = 'light' | 'dark' | 'system';

const Themes = () => {

    const themeOptions = ['light', 'dark', 'system'];
 
    const [selectedTheme, setSelectedTheme] = useState<Theme>('light');
 
    return (
        <section className='min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl mb-5 font-semibold'>Themes</h1>

            <ThemeOptions themeOptions={themeOptions} selectedTheme={selectedTheme} onThemeClick={(theme) => setSelectedTheme(theme)}/>

            <p className='mt-10'>
                Selected theme: <strong>{selectedTheme}</strong>
            </p>
        </section>
    )
}

export default Themes;

type ThemeOptionProps<T extends React.ReactNode> = {
    themeOptions: T[];
    selectedTheme: T;
    onThemeClick: (theme: T) => void
}

function ThemeOptions<T>({ themeOptions, selectedTheme, onThemeClick }: ThemeOptionProps<T>){
    return(
        <ul className='list-disc'>
            {
                themeOptions.map((theme, index) => {
                    return(
                        <li key={index}>
                            <button 
                                onClick={() => onThemeClick(theme)}
                                className={theme === selectedTheme ? 'font-bold' : ''}>
                                {theme}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}
