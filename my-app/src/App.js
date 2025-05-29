import Listing from "./components/Listing";
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 w-full h-full flex-col px-8">
      <NavBar />
      <Listing />
    </div>
  );
}

export default App;
