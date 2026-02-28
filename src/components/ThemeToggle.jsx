import { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {

    const [dark, setDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme && savedTheme === "light") {
            setDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }

    }, []);

    const toggle = () => {
        setDark((d) => {
            const next = !d;
            if (next) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }

            return next;
        });
    };

  return (
    <button 
       onClick={toggle}
       className="w-9 h-9 rounded-full border border-[hsl(220,14%,86%)] flex items-center justify-center text-[hsl(215,15%,45%)] hover:text-[hsl(210,20%,10%)] hover:border-[hsl(230,80%,55%)] transition-all"
       aria-label="Toggle theme">
        { dark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}

export default ThemeToggle
