(function(){
  'use strict';

  // each time called by the route we call a new instance of the HomeController constructor function
  function HomeController() {
    var vm = this;

    // callable methods on the vm
    // readability: you know what function you can use on the front end on the vm
    // factory inspired pattern
    vm.name = 'From the Tweets App - inside of the Home controller';
    vm.getTweet = getTweet;
    vm.createTweet = createTweet; // setup to be the value of the function, creating a callable attribute (like protected instance mthod you get access to)
    vm.updateTweet = updateTweet;
    vm.deleteTweet = deleteTweet;

    // methods we'll instantiate the controller with
    // upon entrance we want to activate
    // this is not a vm method
    activate();

    // defined methods
    function activate(){
      getTweets(){

      }
    }

    // called by activate
    // http://localhost:3000/tweets JSON
    function getTweets(){

    }

    // vm method
    function getTweet(){

    }

    // vm method
    function createTweet(){

    }

    // vm method
    function updateTweet(){

    }

    // vm method
    function deleteTweet(){

    }

  };

  angular
    .module('app')
    .controller('HomeController', HomeController);
}());
