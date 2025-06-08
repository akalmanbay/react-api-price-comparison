import { useEffect, useState } from "react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle the class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="p-7 md:p-5 flex justify-between items-center transition-colors duration-300">
      <h2 className="md:text-xl font-bold text-gray-800 dark:text-white">
        Сравнение цен на продукты: Казахстан
      </h2>
      <ul className="hidden md:flex justify-end items-center md:w-8/12 text-gray-700 dark:text-gray-300">
        <li className="px-1 md:px-5 hover:underline cursor-pointer">
          Динамика цен
        </li>
        <li className="px-1 md:px-5 hover:underline cursor-pointer">
          Контакты
        </li>
        <li className="px-1 md:px-5 hover:underline cursor-pointer">
          Избранное
        </li>
      </ul>

      <label className="w-1/12 cursor-pointer select-none p-2">
        <div className="relative ">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="sr-only peer"
          />
          <div className="block h-5 w-8 rounded-full border border-gray-400 bg-gray-200 dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-gray-200 transition-colors duration-300"></div>
          <div className="dot absolute left-1 top-1 h-3 w-3 rounded-full bg-white dark:bg-gray-900 peer-checked:left-5 transition-all duration-300"></div>
        </div>
      </label>
    </nav>
  );
}
