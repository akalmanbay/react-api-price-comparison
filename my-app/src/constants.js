import test_img from "./assets/image.png";

export const API_URLS = [
  {
    shopName: "Magnum",
    url: "https://magnum.kz:1337/api/download-catalog",
  },
];

export const savedData = JSON.parse(localStorage.getItem("myData"));
export let products = [
  {
    img: test_img,
    name: "Молоко шадринское тепличное дадада 250мл",
    price_magnum: 750,
    price_small: 60810,
  },
  {
    img: test_img,
    name: "Молоко шадринское 250мл",
    price_magnum: 3750,
    price_small: 810,
  },
];

export const tenge = (
  <svg
    className="h-2 w-auto"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 92.83 122.88">
    <path d="M92.83,39.49c0,6.69-1.21,10-3.68,10H58.78v69.4c0,1.51-1.05,2.53-3.23,3.11a39.21,39.21,0,0,1-9.12.83,35.34,35.34,0,0,1-9.25-.9c-2.08-.57-3.13-1.6-3.13-3V49.54H3.68c-2.46,0-3.68-3.36-3.68-10a24.38,24.38,0,0,1,.9-7.71c.6-1.6,1.53-2.4,2.78-2.4H89.15c1.31,0,2.27.8,2.82,2.43a25.12,25.12,0,0,1,.86,7.68ZM3.68,20.16C1.22,20.16,0,16.8,0,10.11A24,24,0,0,1,.9,2.4C1.49.8,2.43,0,3.68,0H89.15C90.46,0,91.41.81,92,2.43a25.49,25.49,0,0,1,.86,7.68c0,6.69-1.22,10.05-3.68,10.05Z" />
  </svg>
);
