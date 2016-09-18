import Ember from 'ember';

var jobs = [{
  title: "Full Stack Developer Intern",
  company: "LaunchCode",
  location: "St. Louis",
  date: "June 2016 - August 2016",
  description: "As a LaunchCode intern, I successfully began and completed a number of projects. The implemented HackerRank’s API on the Rails back end to create tests and register responses Created community pages for LaunchCode’s collaboration with TechHire, a government initiative Created mockups for the Education platform and implemented them in Bootstrap/CSS Extensively tested work using Rspec"
},{
  title: "Webmaster",
  company: "IDEA Labs Incubator",
  location: "St. Louis",
  date: "October 2015 - present",
  description: "As webmaster of the IDEA Labs National network, I redesigned the network website (idealabsincubator.org) in order to make it more user friendly and attract more sponsors. I attended weekly board meetings and collaborated with the leadership to individually manage the server, domains, email along with front-end website. I am currently working witht the leadership to change the focus of idealabs from being a local chapter to a national network of groups.",
  link: ""
},{
  title: "TA for Introduction to Computer Science",
  company: "Washington University in St. Louis",
  location: "St. Louis",
  date: "",
  description: "As a TA for Introduction to Computer Science, I overlooked lab sessions and office hours eight hours a week and helped 50-100 students learn Java for the first time. Additionally, I graded labs and exams. I am currently TAing this class for the 7th time.",
},{
  title: "Resident Advisor",
  company: "Washington University in St. Louis",
  location: "St. Louis",
  date: "August 2015 - May 2016, August 2016 - May 2017",
  description: "As a resident advisor, I created opportunities for students to learn about themselves and their peers, and facilitated the general safety and well-being of the community. I have been through a two week long training which includes leadership, communication, programming, counseling and crisis management. Additionally, I became acquainted with residents to understand their emotional, academic, and social needs and facilitated resolution of conflicts among them.",
  link: ""
},{
  title: "Senior Online Editor",
  company: "Student Life Newspaper",
  location: "St. Louis",
  date: "January 2014 - present",
  description: "As senior online editor for Student Life, I manage www.studlife.com using Wordpress and the LAMP stack, and redesign and add features to the website as required. I am currently working on a new iPhone app for the newspaper in order to help retain and increase readership in an audience that is increasingly moving online. I designed and created a housing guide for students, organizing data such as photos, pricing and list of pros and cons in a more accessible manner.", 
  link: "www.studlife.com/housing"
}];

export default Ember.Route.extend({
	model(){
		return jobs;
	}
});
