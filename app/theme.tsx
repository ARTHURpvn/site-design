'use client';

import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const Theme = () => {
    const [theme, setTheme] = useState<string>(""); 

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);

        } else {
            const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(userPrefersDark ? 'dark' : 'light');

        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        if (theme) {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="absolute top-4 right-4">
            <div onClick={toggleTheme} className="cursor-pointer">
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </div>
        </div>
    );
};

export default Theme;