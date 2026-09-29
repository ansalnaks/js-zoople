const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

search.addEventListener("input", async () => {

    const value = search.value.trim();

    if(value.length < 2){
        suggestions.innerHTML = "";
        return;
    }

    try{

        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value)}&format=jsonv2&limit=5`
        );

        const data = await response.json();

        suggestions.innerHTML = "";

        data.forEach(place => {

            const div = document.createElement("div");

            div.className = "item";

            div.textContent = place.display_name;

            div.addEventListener("click", () => {
                search.value = place.display_name;
                suggestions.innerHTML = "";

                console.log("Latitude :", place.lat);
                console.log("Longitude:", place.lon);
            });

            suggestions.appendChild(div);

        });

    }
    catch(error){
        console.log(error);
    }

});