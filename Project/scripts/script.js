// Data source: Array of café objects
const cafes = [
    {
        id: "c1",
        name: "Bean & Leaf Emporium",
        category: "roast",
        rating: 4.9,
        neighborhood: "Downtown Business District",
        description: "Specializing in micro-lot single-origin pour-overs and house-roasted espresso blends.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "c2",
        name: "The Cozy Mug Café",
        category: "cozy",
        rating: 4.7,
        neighborhood: "University Hills",
        description: "A peaceful sanctuary filled with plush armchairs, books, and soothing ambient music.",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "c3",
        name: "Velvet Crema Roasters",
        category: "roast",
        rating: 4.8,
        neighborhood: "Arts Quarter",
        description: "Industrial chic setting known for velvety microfoam lattes and signature cold brews.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "c4",
        name: "Morning Dew Espresso Bar",
        category: "cozy",
        rating: 4.6,
        neighborhood: "Riverside Promenade",
        description: "Bright, sunlit seating area overlooking the water, perfect for morning contemplation.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "c5",
        name: "Midnight Roast Lounge",
        category: "top",
        rating: 5.0,
        neighborhood: "Central Plaza",
        description: "Open late with premium espresso drinks, artisanal pastries, and vibrant jazz notes.",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "c6",
        name: "Heritage Corner Coffee",
        category: "top",
        rating: 4.9,
        neighborhood: "Old Town Historic District",
        description: "Operating out of a restored brick building, serving timeless classics with modern flair.",
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Year and Last Modified
    const yearSpan = document.querySelector("#currentyear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const modifiedP = document.querySelector("#lastModified");
    if (modifiedP) modifiedP.textContent = `Last Modification: ${document.lastModified}`;

    // 2. Mobile Navigation Toggle
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    // 3. Home Page Spotlight Feature (Conditional Branching & Template Literals)
    const spotlightContainer = document.querySelector("#spotlight-container");
    if (spotlightContainer) {
        // Pick top-rated café using array methods
        const featured = cafes.reduce((prev, current) => (prev.rating > current.rating) ? prev : current);
        spotlightContainer.innerHTML = `
            <img src="${featured.image}" alt="${featured.name}" loading="lazy">
            <div class="spotlight-info">
                <h3>${featured.name}</h3>
                <p><strong>Rating:</strong> ⭐ ${featured.rating} / 5.0</p>
                <p><strong>Neighborhood:</strong> ${featured.neighborhood}</p>
                <p>${featured.description}</p>
                <a href="cafes.html" class="cta-btn secondary-btn">View All Cafés</a>
            </div>
        `;
    }

    // 4. Cafes Page Catalog Rendering & Filtering
    const cafesGrid = document.querySelector("#cafes-grid");
    if (cafesGrid) {
        displayCafes(cafes);

        const filterButtons = document.querySelectorAll(".filter-btn");
        filterButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove("active"));
                e.target.classList.add("active");

                const filter = e.target.getAttribute("data-filter");
                let filteredCafes = cafes;

                if (filter === "cozy") {
                    filteredCafes = cafes.filter(cafe => cafe.category === "cozy");
                } else if (filter === "roast") {
                    filteredCafes = cafes.filter(cafe => cafe.category === "roast");
                } else if (filter === "top") {
                    filteredCafes = cafes.filter(cafe => cafe.rating >= 4.8);
                }

                displayCafes(filteredCafes);
            });
        });
    }

    // 5. Contact Form Dropdown Population & LocalStorage Handling
    const cafeSelect = document.querySelector("#cafeName");
    if (cafeSelect) {
        cafes.forEach(cafe => {
            const option = document.createElement("option");
            option.value = cafe.name;
            option.textContent = cafe.name;
            cafeSelect.appendChild(option);
        });
    }

    const reviewForm = document.querySelector("#review-form");
    if (reviewForm) {
        reviewForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Retrieve current count from localStorage or initialize to 0
            let reviewCount = Number(localStorage.getItem("coffeeReviewCount")) || 0;
            reviewCount++;
            localStorage.setItem("coffeeReviewCount", reviewCount);

            // Hide form and show success message using DOM manipulation
            reviewForm.style.display = "none";
            const successMsg = document.querySelector("#submission-message");
            const counterDisplay = document.querySelector("#review-counter");

            if (successMsg && counterDisplay) {
                counterDisplay.textContent = reviewCount;
                successMsg.classList.remove("hidden-msg");
            }
        });
    }
});

// Helper function to render cafes exclusively using template literals
function displayCafes(arr) {
    const cafesGrid = document.querySelector("#cafes-grid");
    if (!cafesGrid) return;

    cafesGrid.innerHTML = arr.map(cafe => `
        <article class="cafe-card">
            <img src="${cafe.image}" alt="${cafe.name}" loading="lazy">
            <div class="cafe-details">
                <h3>${cafe.name}</h3>
                <span class="rating-badge">⭐ ${cafe.rating}</span>
                <p class="neighborhood">📍 ${cafe.neighborhood}</p>
                <p class="description">${cafe.description}</p>
            </div>
        </article>
    `).join('');
}