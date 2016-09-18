import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectJob(job) {
      document.getElementById("job-title").innerHTML = job.title;
      document.getElementById("job-company").innerHTML = job.company;
      document.getElementById("job-location-and-date").innerHTML = job.location + " | " + job.date;
      document.getElementById("job-description").innerHTML = job.description;
    }
  }
});
