import Table from "./components/Table";
import "./App.css";
import NavBar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex-col self-center text-xs md:text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 w-full h-full mx-auto md:px-8">
      <NavBar />

      <Search />

      <Table />
    </div>
  );
}

export default App;
