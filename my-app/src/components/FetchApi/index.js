import { API_URLS } from "../../constants";

export default function ExtractData() {
  fetch(API_URLS[0].url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json(); // parse JSON body
    })
    .then((data) => {
      console.log("Data received:", data);
      localStorage.setItem("myData", JSON.stringify(data));
      console.log("Data stored:");
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
