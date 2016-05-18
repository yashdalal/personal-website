import Ember from 'ember';

var items = [{
	src: 'assets/images/photogallery/bg-faded.jpg',
    w: 754,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/chicagonight.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/brookingsarch.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/romeskyline.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/romesunset.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/venicelights.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/italycomo.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/churchgatestation.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/mumbairickshaw.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/newyorksilhouette.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
},{
	src: 'assets/images/photogallery/arcadefire.jpg',
    w: 600,
    h: 400,
    title: 'Weird kitty is pretty weird',
    msrc: ''
}];

export default Ember.Route.extend({
	model(){
		return items;
	}
});
