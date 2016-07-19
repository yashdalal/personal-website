import Ember from 'ember';

var school = [{
	name: 'Washington University in St. Louis',
	degree: 'Bachelor of Applied Science (B.A.Sc.)',
	duration: '2013-2017',
	major: 'Computer Science',
	minor: 'Design',
	gpa: '3.74'
},{
	name: 'Dhirubhai Ambani International School',
	degree: 'International Baccalaureate',
	duration: '2011-2013',
	location: 'Mumbai, India'
},{
	name: 'Bombay International School',
	degree: 'Indian Certificate of Secondary Education',
	duration: '1999-2011',
	location: 'Mumbai, India'
}];

export default Ember.Route.extend({
	model(){
		return school;
	}	
});
