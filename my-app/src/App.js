import Table from "./components/Table";
import "./App.css";
import NavBar from "./components/Navbar";
import Search from "./components/Search";
import DataExtraction from "./components/DataExtraction";

function App() {
  return (
    <div className=" overflow-x-hidden flex-col self-center text-xs md:text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 w-full h-full min-h-screen mx-auto md:px-8">
      <NavBar />
      <Search />
      <Table />
      <DataExtraction />
    </div>
  );
}

export default App;
