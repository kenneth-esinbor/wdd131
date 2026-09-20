// Footer Dynamic Content: Current Year & Last Modified Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Weather & Wind Chill Calculation Logic
const temperature = 30; // Static value in °C matching HTML content
const windSpeed = 10;   // Static value in km/h matching HTML content

/**
 * Calculates the wind chill factor using metric units (°C and km/h).
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Wind chill temperature rounded to 1 decimal place
 */
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.3965 * temp) * Math.pow(speed, 0.16) - 11.37 * Math.pow(speed, 0.16) + 0.6215 * temp;

const windChillElement = document.getElementById('windchill');

// Viable Metric conditions: Temperature <= 10 °C AND Wind speed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${chill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}