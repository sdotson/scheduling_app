angular.module('scheduleApp',['firebase'])

.controller('mainController', function($scope, $firebaseObject) {
	 var ref = new Firebase("https://radiant-fire-4424.firebaseio.com/days");  
	  /*var fb = $firebase(ref);*/

	  // sync as object
	  var syncObject = $firebaseObject(ref);

	  // three way data binding
	  syncObject.$bindTo($scope, 'days');

	  $scope.reset = function() {

	  	ref.set({
	  		monday: {
	  			name: 'Monday',
	  			dayNumber: 1,
	  			slots: {
	  				0900: {
	  					time: '9:00am',
	  					booked: false
	  				},
	  				0110: {
	  					time: '11:00am',
	  					booked: false
	  				},
	  				1400: {
	  					time: '2:00pm',
	  					booked: false
	  				},
	  				1600: {
	  					time: '4:00pm',
	  					booked: false
	  				},

	  			}
	  		},
	  		tuesday: {
	  			name: "Tuesday",
	  			dayNumber: 2,
	  			slots: {
	  				0900: {
	  					time: '9:00am',
	  					booked: false
	  				},
	  				0110: {
	  					time: '11:00am',
	  					booked: false
	  				},
	  				1400: {
	  					time: '2:00pm',
	  					booked: false
	  				},
	  				1600: {
	  					time: '4:00pm',
	  					booked: false
	  				},
	  			}
	  		},
	  		wednesday: {
	  			name: "Wednesday",
	  			dayNumber: 3,
	  			slots: {
	  				0900: {
	  					time: '9:00am',
	  					booked: false
	  				},
	  				0110: {
	  					time: '11:00am',
	  					booked: false
	  				},
	  				1400: {
	  					time: '2:00pm',
	  					booked: false
	  				},
	  				1600: {
	  					time: '4:00pm',
	  					booked: false
	  				},
	  			}
	  		},
	  		thursday: {
	  			name: "Thursday",
	  			dayNumber: 4,
	  			slots: {
	  				0900: {
	  					time: '9:00am',
	  					booked: false
	  				},
	  				0110: {
	  					time: '11:00am',
	  					booked: false
	  				},
	  				1400: {
	  					time: '2:00pm',
	  					booked: false
	  				},
	  				1600: {
	  					time: '4:00pm',
	  					booked: false
	  				},
	  			}
	  		},
	  		friday: {
	  			name: "Friday",
	  			dayNumber: 5,
	  			slots: {
	  				0900: {
	  					time: '9:00am',
	  					booked: false
	  				},
	  				0110: {
	  					time: '11:00am',
	  					booked: false
	  				},
	  				1400: {
	  					time: '2:00pm',
	  					booked: false
	  				},
	  				1600: {
	  					time: '4:00pm',
	  					booked: false
	  				},
	  			}
	  		}
	  	});
	  };
})

.filter('object2Array', function() {
    return function(input) {
      var out = []; 
      for(i in input){
        out.push(input[i]);
      }
      return out;
    }
  })