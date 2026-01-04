const API_KEY = "7J9C2DPBZYJLQB2RER5M2VMWA";

async function getWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Location not found");
    }
    return await res.json();
}

function formatWeatherData(data) {
    return {
        city: data.resolvedAddress,
        tempC: data.currentConditions.temp,
        tempF: data.currentConditions.temp * 9/5 + 32,
        conditions: data.currentConditions.conditions
    };
}

function updateBackground(temp) {
    if (temp >= 25) {
        document.body.className = "hot";
    } else if (temp <= 5) {
        document.body.className = "cold";
    } else {
        document.body.className = "normal";
    }
}

function displayWeather(w) {
    document.getElementById("cityName").textContent = w.city;
    document.getElementById("conditions").textContent = w.conditions;
    document.getElementById("tempValue").textContent = w.tempC.toFixed(1);
    document.getElementById("tempUnit").textContent = "C";

    updateBackground(w.tempC);

    document.getElementById("weatherOutput").classList.remove("hidden");
}

document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const loc = document.getElementById("locationInput").value.trim();
    if (!loc) return;

    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("weatherOutput").classList.add("hidden");

    try {
        const raw = await getWeather(loc);
        const w = formatWeatherData(raw);
        displayWeather(w);
    } catch (err) {
        alert("Could not fetch weather data.");
    }

    document.getElementById("loading").classList.add("hidden");
});

// Toggle Celsius / Fahrenheit
document.getElementById("toggleBtn").addEventListener("click", () => {
    const val = document.getElementById("tempValue");
    const unit = document.getElementById("tempUnit");

    if (unit.textContent === "C") {
        val.textContent = (Number(val.textContent) * 9/5 + 32).toFixed(1);
        unit.textContent = "F";
    } else {
        val.textContent = ((Number(val.textContent) - 32) * 5/9).toFixed(1);
        unit.textContent = "C";
    }
});

