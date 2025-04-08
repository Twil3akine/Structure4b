import { useEffect, useState } from "react";
// @ts-ignore
import MoonIcon from "@/assets/moon.svg?react";
// @ts-ignore
import SunIcon from "@/assets/sun.svg?react";

const ToggleTheme = () => {
    const [theme, setTheme] = useState<"light"|"dark">('light');

    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = saved ?? (prefersDark ? "dark" : "light");
        setTheme(initial);
        document.documentElement.setAttribute("data-theme", initial);
    }, []);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    };

    return (
        <button onClick={toggle} className="toggle-theme">
            {theme === "dark" ? <MoonIcon/> : <SunIcon />}
        </button>
    )
};

export default ToggleTheme;