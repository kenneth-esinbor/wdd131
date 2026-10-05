document.addEventListener("DOMContentLoaded", () => {
    // Retrieve and increment review counter in localStorage
    let reviewCount = Number(localStorage.getItem("reviewCount_ls")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount_ls", reviewCount);

    // Display counter on confirmation page
    const countDisplay = document.querySelector("#reviewsCount");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
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