import Ember from 'ember';

var items = [{
	src: 'assets/images/photogallery/bg-faded.jpg',
    w: 1000,
    h: 588.25,
    title: 'Chicago Skyline, 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/chicagonight.jpg',
    w: 600,
    h: 400,
    title: 'Chicago Nighttime, 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/brookingsarch.jpg',
    w: 600,
    h: 400,
    title: 'Brookings Arch, Washington University in St. Louis, 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/romeskyline.jpg',
    w: 600,
    h: 400,
    title: 'Roman Skyline, 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/romesunset.jpg',
    w: 600,
    h: 400,
    title: 'Sunset at Plaza ______ in Rome, 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/venicelights.jpg',
    w: 600,
    h: 400,
    title: 'Venice Lights, 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/italycomo.jpg',
    w: 600,
    h: 400,
    title: 'Lake Como, Italy 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/churchgatestation.jpg',
    w: 600,
    h: 400,
    title: 'Churchgate Station, Bombay 2015',
    msrc: ''
},{
	src: 'assets/images/photogallery/mumbairickshaw.jpg',
    w: 600,
    h: 400,
    title: 'Autorickshaw in Bandra, Bombay 2015',
    msrc: ''
},{
	src: 'assets/images/photogallery/newyorksilhouette.jpg',
    w: 600,
    h: 400,
    title: 'New York silhouette from Central Park, NYC 2014',
    msrc: ''
},{
	src: 'assets/images/photogallery/arcadefire.jpg',
    w: 600,
    h: 400,
    title: 'Arcade Fire Concert at Scottrade Center, St. Louis 2014',
    msrc: ''
}];

export default Ember.Route.extend({
	model(){
		return items;
	}
});
