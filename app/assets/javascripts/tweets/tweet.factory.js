(function(){
  'use strict';

  // factories are a great design pattern for this, it looks as clean as a rails controller

  // in the front end world, the backend is like the database, and this is like the model that talks to the backend and gives that to the controller
  // a Service looks like this and would also give an instance with functionned variables (a bit like an instance method), whereas a factory gives you just an object (a bit like a Class method)
  function TweetFactory($http){
    // this returns and object with object.attributes that each are functions that we can call
    return {
      // we want callable functions on the object
      getTweets: getTweets,
      getTweet: getTweet,
      createTweet: createTweet,
      updateTweet: updateTweet,
      deleteTweet: deleteTweet
    }

    // we protect the function down below
    // when you call the attribute, you can't see the information of the function but you know it exists (that's why we say it's protected)
    function getTweets(){
      return $http.get('/tweets')
                  .then(handleResponse)
                  .catch(handleError);
                  // we'll use these functions a few times so let's extract them
    }

    function getTweet(){

    }

    function createTweet(){

    }

    function updateTweet(){

    }

    function deleteTweet(){

    }



    // extracted functions
    // easier to debug than anonymous functions
    function handleResponse(response){
      console.log(response)
      return response.data
    }

    function handleError(){
      console.log(error)
    }
  }

  angular
    .module('app')
    .factory('TweetFactory', TweetFactory)
}());
