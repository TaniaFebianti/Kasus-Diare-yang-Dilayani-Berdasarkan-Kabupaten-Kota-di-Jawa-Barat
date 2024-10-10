var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JumlahKasusDiareTahun2021_1 = new ol.format.GeoJSON();
var features_JumlahKasusDiareTahun2021_1 = format_JumlahKasusDiareTahun2021_1.readFeatures(json_JumlahKasusDiareTahun2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahKasusDiareTahun2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahKasusDiareTahun2021_1.addFeatures(features_JumlahKasusDiareTahun2021_1);
var lyr_JumlahKasusDiareTahun2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JumlahKasusDiareTahun2021_1, 
                style: style_JumlahKasusDiareTahun2021_1,
                popuplayertitle: "Jumlah Kasus Diare Tahun 2021",
                interactive: true,
    title: 'Jumlah Kasus Diare Tahun 2021<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2021_1_0.png" /> 1962 - 8723<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2021_1_1.png" /> 8723 - 11184<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2021_1_2.png" /> 11184 - 16777<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2021_1_3.png" /> 16777 - 20808<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2021_1_4.png" /> 20808 - 72507<br />'
        });
var format_JumlahKasusDiareTahun2022_2 = new ol.format.GeoJSON();
var features_JumlahKasusDiareTahun2022_2 = format_JumlahKasusDiareTahun2022_2.readFeatures(json_JumlahKasusDiareTahun2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahKasusDiareTahun2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahKasusDiareTahun2022_2.addFeatures(features_JumlahKasusDiareTahun2022_2);
var lyr_JumlahKasusDiareTahun2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JumlahKasusDiareTahun2022_2, 
                style: style_JumlahKasusDiareTahun2022_2,
                popuplayertitle: "Jumlah Kasus Diare Tahun 2022",
                interactive: true,
    title: 'Jumlah Kasus Diare Tahun 2022<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2022_2_0.png" /> 2853 - 11230<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2022_2_1.png" /> 11230 - 12803<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2022_2_2.png" /> 12803 - 19846<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2022_2_3.png" /> 19846 - 26217<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2022_2_4.png" /> 26217 - 59130<br />'
        });
var format_JumlahKasusDiareTahun2023_3 = new ol.format.GeoJSON();
var features_JumlahKasusDiareTahun2023_3 = format_JumlahKasusDiareTahun2023_3.readFeatures(json_JumlahKasusDiareTahun2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahKasusDiareTahun2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahKasusDiareTahun2023_3.addFeatures(features_JumlahKasusDiareTahun2023_3);
var lyr_JumlahKasusDiareTahun2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JumlahKasusDiareTahun2023_3, 
                style: style_JumlahKasusDiareTahun2023_3,
                popuplayertitle: "Jumlah Kasus Diare Tahun 2023",
                interactive: true,
    title: 'Jumlah Kasus Diare Tahun 2023<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2023_3_0.png" /> 1721 - 1792<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2023_3_1.png" /> 1792 - 14536<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2023_3_2.png" /> 14536 - 23421<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2023_3_3.png" /> 23421 - 30666<br />\
    <img src="styles/legend/JumlahKasusDiareTahun2023_3_4.png" /> 30666 - 67750<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_JumlahKasusDiareTahun2021_1.setVisible(true);lyr_JumlahKasusDiareTahun2022_2.setVisible(true);lyr_JumlahKasusDiareTahun2023_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JumlahKasusDiareTahun2021_1,lyr_JumlahKasusDiareTahun2022_2,lyr_JumlahKasusDiareTahun2023_3];
lyr_JumlahKasusDiareTahun2021_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_JumlahKasusDiareTahun2022_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_JumlahKasusDiareTahun2023_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_JumlahKasusDiareTahun2021_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_JumlahKasusDiareTahun2022_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_JumlahKasusDiareTahun2023_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_JumlahKasusDiareTahun2021_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_JumlahKasusDiareTahun2022_2.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_JumlahKasusDiareTahun2023_3.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_JumlahKasusDiareTahun2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});