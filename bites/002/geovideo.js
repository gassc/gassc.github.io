////////////////////////////
	// Youtube Video
	// test @ https://www.youtube.com/watch?v=sqJDypl-2os
	
	// Load the IFrame Player API code asynchronously.
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// Create an <iframe> (and YouTube player) after the API code downloads.
	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
			height: '390',
			width: '640',
			videoId: 'sqJDypl-2os',
			playerVars: {'autoplay': 1,},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
				}
			});
		}
	
	
	////////////////////////////
	// Mapbox Map
	
	// MapBox access token
	L.mapbox.accessToken = 'pk.eyJ1IjoiY2JndGhvcjYyNCIsImEiOiJzZ2NaNmo4In0.hbXzZPAvaCO5GLu45bptTw';
	// Create a map in the div #map
	var map = L.mapbox.map('map', 'cbgthor624.hnc4bbke',{
			closePopupOnClick:false
			}).setView([40.144725, -79.278184,], 17);	
	
	// create feature style
	function style(feature) {
		return {
			weight: 7,
			opacity: 0.5,
			color: 'red'
			};
		}
	
	// add 'fly' data as geojson
	var line = L.geoJson(fly, {
		style: style
		}).addTo(map);
	
	// access the line's coordinate list
	//var coords = fly.features[0].geometry.coordinates
	var coords = JSON.parse(JSON.stringify(fly)).features[0].geometry.coordinates
	//var gj = JSON.parse(JSON.stringify(fly)).features[0].geometry.coordinates
	//var gj = JSON.stringify(fly);
	// coordinate counter
	var i = 0

	// create marker *at starting point of geojson*
	var marker = L.marker([0,0], {
		icon: L.mapbox.marker.icon({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-79.278184,40.144725]
				},
			properties: {
					'marker-color': 'gray',
				}
			})
		}).addTo(map)
	
	////////////////////////////
	// Video and Map control from Youtube
	
	
	
	// move the marker by setting its placement on each point
	// in the list of coordinates
	var tick_state = true;
	function tick() {
		marker.setLatLng([coords[i][1], coords[i][0]]);
		if (tick_state) {
			//code
			if (++i < coords.length) setTimeout(tick, 1000);
			}
		
		curcoordx.innerHTML = coords[i][1]
		curcoordy.innerHTML = coords[i][0]
		curcoordz.innerHTML = coords[i][2]
		}
		
	
	// Start the video and the map marker
	function onPlayerReady(event) {
		event.target.playVideo();
		}
	tick();
	
	/*
	// The Youtube API calls this function when the player's state changes.
	// plays/pauses video and map-marker simultaneously
	function onPlayerStateChange(event) {
		if (event.data == player.getPlayerState(2)) {
			tick_state = false;
			tick()
			}
		if (event.data == player.getPlayerState(1)) {
			tick_state = true;
			tick()
			}
		}

	

	
	//////////////
	// To do list
	
	// get the video's current position in seconds.
	// use second to pull out geojson.
	// reset lat/long of marker
	// video length and number of points must be equivalent
	// (to be handled with preprocessing)

	// return time of video and use to specify position in list of coordinates;
	// update map marker position
	// if video paused, time does not update, and marker stays put.
	// if video seeker changed, marker moves to that point.
	
	//seek-slider
	function vidSeek(){
		var seekto = vid.duration * (seekslider.value / 100);
		vid.currentTime = seekto;
		}
	
	// button for geotagged screen capture
	// get current coordinate, current frame, write to jpg header,
	// or create geojson file, save image, and reference image in geojson
	*/