   console.log( fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.14&current_weather=true"))
        /*.then((response) => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data)); */