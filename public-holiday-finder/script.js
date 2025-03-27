const countrySelect = document.getElementById("country");

async function loadCountries() {
    const countries = {
        "US": "United States",
        "FR": "France",
        "DE": "Germany",
        "RW": "Rwanda"
    };

    for (let code in countries) {
        let option = document.createElement("option");
        option.value = code;
        option.textContent = countries[code];
        countrySelect.appendChild(option);
    }
}

loadCountries();

async function fetchHolidays() {
    const apiKey = config.API_KEY; 
    const country = document.getElementById("country").value;
    const year = document.getElementById("year").value;
    const url = `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=${year}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        displayHolidays(data.response.holidays);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("results").innerHTML = "Error fetching holidays.";
    }
}

function displayHolidays(holidays) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Holidays:</h2>";

    holidays.forEach(holiday => {
        resultsDiv.innerHTML += `<p><strong>${holiday.name}</strong> - ${holiday.date.iso}</p>`;
    });
}

