const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/rome-italy-temple-1090342.jpg"
  },
  {
    templeName: "Colonia Juárez Chihuahua Mexico",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-mexico/400x250/colonia-juarez-mexico-temple-mormon-1064567-wallpaper.jpg"
  }
];

const container = document.querySelector("#temples-container");
const titleElement = document.querySelector("main h2");

function displayTemples(filteredTemples, titleText) {
  container.innerHTML = "";
  titleElement.textContent = titleText;
  
  filteredTemples.forEach(temple => {
    let card = document.createElement("figure");
    
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    
    container.appendChild(card);
  });
}

// Initial load
displayTemples(temples, "Home");

// Filter event listeners
document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples, "Home");
});

document.querySelector("#old").addEventListener("click", () => {
  let oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
  displayTemples(oldTemples, "Old Temples (Built before 1900)");
});

document.querySelector("#new").addEventListener("click", () => {
  let newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  displayTemples(newTemples, "New Temples (Built after 2000)");
});

document.querySelector("#large").addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples, "Large Temples (> 90,000 sq ft)");
});

document.querySelector("#small").addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples, "Small Temples (< 10,000 sq ft)");
});

// Footer dynamic dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;