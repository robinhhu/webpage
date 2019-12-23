$(document).ready (function () {
    showPosition();
  });
  var map = new BMap.Map("baiduMap");
  map.setCurrentCity("Delhi");
  var centerPoint = new BMap.Point(85.08,26.29);
  map.centerAndZoom(centerPoint,7);

  var mapTypeCon = new BMap.MapTypeControl({
    mapTypes:[
      BMAP_HYBRID_MAP,
      BMAP_NORMAL_MAP
    ]
  });
  map.addControl(mapTypeCon);
function showPosition() {
    var Pos1 = new BMap.Point(78.15,29.98);
    var marker1 = new BMap.Marker(Pos1);
    map.addOverlay(marker1);
    var Pos2 = new BMap.Point(80.38,26.47);
    var marker2 = new BMap.Marker(Pos2);
    map.addOverlay(marker2);
    var Pos3 = new BMap.Point(78.09,29.47);
    var marker3 = new BMap.Marker(Pos3);
    map.addOverlay(marker3);
    var Pos4 = new BMap.Point(78.68,27.88);
    var marker4 = new BMap.Marker(Pos4);
    map.addOverlay(marker4);
    var Pos5 = new BMap.Point(83.00,25.19);
    var marker5 = new BMap.Marker(Pos5);
    map.addOverlay(marker5);
    var Pos6 = new BMap.Point(90.23,23.45);
    var marker6 = new BMap.Marker(Pos6);
    map.addOverlay(marker6);
    var Pos7 = new BMap.Point(86.47,25.38);
    var marker7 = new BMap.Marker(Pos7);
    map.addOverlay(marker7);
    var Pos8 = new BMap.Point(88.00,25.02);
    var marker8 = new BMap.Marker(Pos8);
    map.addOverlay(marker8);
    var Pos9 = new BMap.Point(89.88,22.34);
    var marker9 = new BMap.Marker(Pos9);
    map.addOverlay(marker9);
    var Pos10 = new BMap.Point(90.50,23.34);
    var marker10 = new BMap.Marker(Pos10);
    map.addOverlay(marker10);
}
