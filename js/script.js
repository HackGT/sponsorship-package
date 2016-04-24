$( document ).ready(function() {
  var pattern = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    cell_size: 40,
    x_colors: 'YlGnBu'
  });

  $('.fold').css('background-image', 'url(' + pattern.png() + ')');
});

    // create AmMap object
    var map;
    // create label icon
    var targetSVG =
      "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    var floor1Active = [
      {id:"AD-01"},
      {id:"AD-02"},
      {id:"AD-03"},
      {id:"AD-04"},
      {id:"AD-05"},
      {id:"AD-06"},
      {id:"AD-07"},
      {id:"AD-08"},
      {id:"AD-11"},
      {id:"AD-12"},
      {id:"AD-13"},
      {id:"AD-14"},
      {id:"AD-15"},
      {id:"AD-16"},
      {id:"AD-17"},
      {id:"AD-18"},
      {id:"AD-19"}
    ]
    var sponsorFloor1 = [
      {svgPath:targetSVG, color:'#CC0000', title:"Hardware Station", zoomLevel:5, scale:0.5,longitude:1.589192, latitude:42.536721},
      {svgPath:targetSVG, color:'#CC0000', title:"Platinum Sponsor", zoomLevel:5, scale:0.5,longitude:1.626933, latitude:42.54255},
      {svgPath:targetSVG, color:'#CC0000', title:"Platinum Sponsor", zoomLevel:5, scale:0.5,longitude:1.606175, latitude:42.512722},
      {svgPath:targetSVG, color:'#CC0000', title:"Platinum Sponsor", zoomLevel:5, scale:0.5,longitude:1.625517, latitude:42.514396},
      {svgPath:targetSVG, color:'#CC0000', title:"Platinum Sponsor", zoomLevel:5, scale:0.5,longitude:1.624574, latitude:42.487597}
    ];
    var floor2Active = [
      {id:"AD-23"},
      {id:"AD-01"},
      {id:"AD-02"},
      {id:"AD-03"},
      {id:"AD-04"},
      {id:"AD-05"},
      {id:"AD-06"},
      {id:"AD-07"},
      {id:"AD-08"},
      {id:"AD-11"},
      {id:"AD-12"},
      {id:"AD-13"},
      {id:"AD-14"},
      {id:"AD-17"},
      {id:"AD-18"},
      {id:"AD-19"},
    ]
    var sponsorFloor2 = [
      {svgPath:targetSVG, color:'#CC0000', title:"Gold Sponsor", zoomLevel:5, scale:0.5,longitude:1.60476, latitude:42.470977},
      {svgPath:targetSVG, color:'#CC0000', title:"Gold Sponsor", zoomLevel:5, scale:0.5,longitude:1.626461, latitude:42.473768},
      {svgPath:targetSVG, color:'#CC0000', title:"Gold Sponsor", zoomLevel:5, scale:0.5,longitude:1.625045, latitude:42.499996},
      {svgPath:targetSVG, color:'#CC0000', title:"Gold Sponsor", zoomLevel:5, scale:0.5,longitude:1.625989, latitude:42.529001}
    ];
    var floor3Active = [
      {id:"AD-23"},
      {id:"AD-01"},
      {id:"AD-02"},
      {id:"AD-03"},
      {id:"AD-04"},
      {id:"AD-05"},
      {id:"AD-06"},
      {id:"AD-07"},
      {id:"AD-11"},
      {id:"AD-12"},
      {id:"AD-13"},
      {id:"AD-14"},
      {id:"AD-17"},
      {id:"AD-18"},
      {id:"AD-19"},
    ]
    var sponsorFloor3 = [
      {svgPath:targetSVG, color:'#CC0000', title:"Silver Sponsor", zoomLevel:5, scale:0.5,longitude:1.733297, latitude:42.470352},
      {svgPath:targetSVG, color:'#CC0000', title:"Silver Sponsor", zoomLevel:5, scale:0.5,longitude:1.770272, latitude:42.484041}
    ];
    // add all your code to this method, as this will ensure that page is loaded
    function showMap(mapVar, iconVar, floorVar) {
          var currentMap = document.getElementById("mapdiv");
          var currentList = document.getElementById("listdiv");
          if (currentMap != null) currentMap.innerHTML = "";
          if (currentList != null) currentList.innerHTML = "";
          map = new AmCharts.AmMap();
          // set path to images
          map.pathToImages = "ammap/images/";

          /* create areas settings
           * autoZoom set to true means that the map will zoom-in when clicked on the area
           * selectedColor indicates color of the clicked area.
           */
          map.areasSettings = {
              autoZoom: true,
              selectedColor: "#CC0000"
          };
          /* create data provider object
           map property is usually the same as the name of the map file.

           getAreasFromMap indicates that amMap should read all the areas available
           in the map data and treat them as they are included in your data provider.
           in case you don't set it to true, all the areas except listed in data
           provider will be treated as unlisted.
          */
          var dataProvider = {
              map: mapVar,
              images: iconVar
          };
          dataProvider.areas = floorVar;
          map.dataProvider = dataProvider;

          // let's say we want a small map to be displayed, so let's create it
          map.smallMap = new AmCharts.SmallMap();

          map.objectList = new AmCharts.ObjectList("listdiv");
          map.showAreasInList = true;
          map.showImagesInList = true;
          map.write("mapdiv");
    }
    AmCharts.ready(function(){
      showMap("klaus1",sponsorFloor1, floor1Active);
    });
