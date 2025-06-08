import { API_URLS } from "../../constants";

function FetchApi() {
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

// {
//   img: test_img,
//   name: "Молоко шадринское тепличное дадада 250мл",
//   price_magnum: 750,
//   price_small: 60810,
// }

export default function DataExtraction() {
  // FetchApi();
  const savedData = JSON.parse(localStorage.getItem("myData"));
  console.log(savedData.data.product);
  return <div></div>;
}
