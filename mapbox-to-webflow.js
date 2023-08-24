<script>
//remove map wrapper
$(".store-locator__collection").removeClass("is-show");

// Replace access token here
mapboxgl.accessToken = "pk.eyJ1IjoiYXNwaXJlaW5mdXNpb25zIiwiYSI6ImNsbG1kaWsyYTI2ODgzanFqcnkydGg2dnIifQ.Jr30wdYz7q_R_8oiVeSAfw";
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Create empty locations geojson object
let mapLocations = {
	type: "FeatureCollection",
	features: [],
};

let selectedMapLocations = [];

// Initialize map and load in #map wrapper
let map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/aspireinfusions/cllmdk0ow01hu01p81uzo9a20",
	center: [-79.978568, 43.705722],
	zoom: 9.09,
});

// Adjust zoom of map for mobile and desktop
let mq = window.matchMedia("(min-width: 480px)");
if (mq.matches) {
	map.setZoom(6.59); //set map zoom level for desktop size
} else {
	map.setZoom(6); //set map zoom level for mobile size
}

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Get cms items
let listLocations = document.getElementById("location-data").childNodes;

// For each collection item, grab hidden fields and convert to geojson property
function getGeoData() {
	listLocations.forEach(function (location, i) {
		console.log(location);
		let locationLat = location.querySelector("#locationLatitude").value;
		let locationLong = location.querySelector("#locationLongitude").value;
		let locationInfo = location.querySelector(".store-locator__card-wrapper").innerHTML;
		let coordinates = [locationLong, locationLat];
		let locationID = location.querySelector("#locationID").value;
    //add array ID
    let arrayID = (i + 1) - 1;
		let geoData = {
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: coordinates,
			},
			properties: {
				id: locationID,
				description: locationInfo,
        arrayID: arrayID,
			},
     
		};

		if (mapLocations.features.includes(geoData) === false) {
			mapLocations.features.push(geoData);
		}
	});
	console.log(mapLocations);
}

// Invoke function
getGeoData();

// Define mapping function to be invoked later
function addMapPoints() {
	/* Add the data to your map as a layer */
	map.addLayer({
		id: "locations",
		type: "circle",
		/* Add a GeoJSON source containing place coordinates and information. */
		source: {
			type: "geojson",
			data: mapLocations,
		},
		paint: {
			"circle-radius": 100%,
			"circle-stroke-width": 0.25,
			"circle-color": "#FFFFFF",
			"circle-opacity": 1,
			"circle-stroke-color": "#2d9dd5",
		},
	});
  
  
  
  
 // Open a popup with the correct location 
 function addPopup(e) {
		// Copy coordinates array.
		const coordinates = e.features[0].geometry.coordinates.slice();
		const description = e.features[0].properties.description;

		// Ensure that if the map is zoomed out such that multiple
		// copies of the feature are visible, the popup appears
		// over the copy being pointed to.
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map); 
 }
 
	// When a click event occurs on a feature in the places layer, open a popup at the
	// location of the feature, with description HTML from its properties.

	map.on("click", "locations", (e) => {
  	//find ID of collection item in array
    const ID = e.features[0].properties.arrayID;
 		//add popup 
     addPopup(e);
    //show Webflow Collection module
    $(".store-locator__collection").addClass("is-show");
    
    //Check if an item is currently there
    if ($(".store-locator__item.is-show").length) {
    $(".store-locator__item").removeClass("is-show");
  } 
  	//find collection item by array ID and show it
    $(".store-locator__item").eq(ID).addClass("is-show");
	});

   
	// Center the map on the coordinates of any clicked circle from the 'locations' layer.
	map.on("click", "locations", (e) => {
		map.flyTo({
			center: e.features[0].geometry.coordinates,
			speed: 0.5,
			curve: 1,
			easing(t) {
				return t;
			},
		});
	});
  
// Change the cursor to a pointer when the mouse is over the 'locations' layer.
	map.on("mouseenter", "locations", () => {
		map.getCanvas().style.cursor = "pointer";
	});

	// Change it back to a pointer when it leaves.
	map.on("mouseleave", "locations", () => {
		map.getCanvas().style.cursor = "";
	});
}


// When map is loaded initialize with data
map.on("load", function (e) {
	addMapPoints();
});


// Close side nav with button
$(".store-locator__close-btn").click(function(){
	$(".store-locator__collection").removeClass("is-show");
});


//hover stuff

//set hover popup
const popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});


map.on('mouseenter', 'locations', (e) => {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';
 
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
});
 
map.on('mouseleave', 'locations', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

</script>
