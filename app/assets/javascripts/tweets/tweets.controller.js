(function(){
  'use strict';

  // each time called by the route we call a new instance of the HomeController constructor function
  // we inject our TweetFactory
  function TweetsController(TweetFactory) {
    var vm = this;

    // callable methods on the vm
    // readability: you know what function you can use on the front end on the vm
    // factory inspired pattern
    vm.name = 'From the Tweets App - inside of the Tweets controller';
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
      getTweets()
    }

    // called by activate
    // http://localhost:3000/tweets JSON
    function getTweets(){
      return TweetFactory.getTweets()
                          .then(setTweets)
                          // TweetFactory.getTweets() returns data to us, we need to have a callback on the promise
    }

    // vm method
    function getTweet(){

    }

    // vm method
    function createTweet(){
      // console.log(vm.newTweet)
      // we now need to pass it along to our factory for sending it to the database
      return TweetFactory.createTweet(vm.newTweet)
                          .then(getTweets)
                          // when it comes back we want to relist all of our tweets
    }

    // vm method
    function updateTweet(){

    }

    // vm method
    function deleteTweet(){

    }



    // callbacks
    function setTweets(data){
      // new callable attribute on the vm
      return vm.tweets = data;
    }

  };

  angular
    .module('app')
    .controller('TweetsController', TweetsController);
}());
