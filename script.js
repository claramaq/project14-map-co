//Define default map numbers
let latlng = [32.75, -97];
let zoom = 10;

//Define some terms to be used later
let marker;
let title;
let image;
let description;

//Set Map
let map = L.map('map').setView(latlng,zoom);

//Use Open Street Map layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);


//Define function for opening popUp
    function onClick(e) {
        let popup = e.target.getPopup();
        let content = popup.getContent();
    }

//Define popUp markup to ensure all are styled the same
    function popUp() {
        marker.bindPopup(`
        <img src="${image}" class="map-image">
        <b class="map-title">${title}</b>
        <p class="map-content">${description}</p>`);
    }


//Places of interest
    //FTW Water Gardens 
        $('#waterGardens').on('click', () => {
            latlng = [32.747717, -97.326700];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `/images/watergardens.jpg`
            title = `Fort Worth Water Gardens`;
            description = 'This is a great place to start adventuring in DFW. It\'s free (unless you pay for parking)!'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //Six Flags
        $('#sixFlags').on('click', () => {
            latlng = [32.755138, -97.070154];
            zoom = 15;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `/images/sixflags.jpg`
            title = `Six Flags Over Texas`;
            description = 'While amusement parks can be expensive, if you live in the area or are planning to go more than one day, grab a seasons pass! The total cost should be cheaper, and there\'s tons of fun to be had for the whole family.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //stockyards
        $('#stockyards').on('click', () => {
            latlng = [32.789210, -97.347014];
            zoom = 15;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `/images/stockyards.jpg`
            title = `Fort Worth Stockyards`;
            description = 'This is a definite go if you\'ve never been to or lived on a farm. Here lives Cowboy hats, stock shows, and competitions as well as the occasional parade and plentiful of food and drink.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //cowboys stadium
        $('#cowboysStadium').on('click', () => {
            latlng = [32.747383, -97.094328];
            zoom = 15;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `/images/cowboys.jpg`
            title = `AT&T Cowboys Stadium`;
            description = 'The Cowboys are one of the major teams in Texas, and this stadium stars most games. But there are more events than just games here. A lot of big name concerts are also held here. Just a word of warning: parking can get really expensive. Have a game plan ready, just in case.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //fair grounds
        $('#fairGrounds').on('click', () => {
            latlng = [32.780175, -96.763976];
            zoom = 15;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `/images/fair.jpg`
            title = `Dallas Fair Grounds`;
            description = 'These fair grounds are massive and there\'s always something going on. If you\'re in the area and free, check out to see if anything is going on here. There\'s also a train that runs back and forth from Fort Worth and Dallas that stops at the Fair Grounds for easier transportation.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //7th street
        $('#7thStreet').on('click', () => {
            latlng = [32.751083, -97.353417];
            zoom = 15;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `/images/7th.jpg`
            title = `7th Street`;
            description = '7th Street is the Fort Worth Downtown Shopping Center. There are plenty of places to shop downtown, but 7th Street is definitely some of the best.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //Carrolton
        $('#newKoreaTown').on('click', () => {
            latlng = [32.985028, -96.909949];
            zoom = 15;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `/images/hMart.jpg`
            title = `New Korea Town - Carrollton`;
            description = 'Carrollton, Texas has some fantastic Asian businesses. There\'s amazing shopping and even better food! There\'s even a local HMart! With plans to build another in Haltom City. It\'s definitely a must go.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

//Reset view to DFW whole with all marker showing
    $('#resetBtn').on('click', () => {
        latlng = [32.75, -97];
        zoom = 10;
        map.panTo(latlng)
        map.setZoom(zoom)
    })