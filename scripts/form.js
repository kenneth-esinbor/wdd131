const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Dynamically populate product select options
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#productName");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id; // Using array's id as value per instructions
            option.textContent = product.name; // Using array's name field for display
            productSelect.appendChild(option);
        });
    }

    // Footer dynamic year & last modified
    const yearSpan = document.querySelector("#currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const modifiedP = document.querySelector("#lastModified");
    if (modifiedP) {
        modifiedP.textContent = `Last Modification: ${document.lastModified}`;
    }
});