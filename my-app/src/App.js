import Listing from "./components/Listing";
import "./App.css";
import NavBar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 w-full h-full flex-col px-8">
      <NavBar />
      <Search />
      <Listing />
    </div>
  );
}

export default App;
