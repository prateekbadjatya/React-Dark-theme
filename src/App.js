import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <button onClick={handleChange} className="btn">
            Toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map(art => {
          return <Article key={art.id} {...art} />;
        })}
      </section>
    </main>
  );
}

export default App;
