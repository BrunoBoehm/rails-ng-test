(function(){
  'use strict';

  // each time called by the route we call a new instance of the HomeController constructor function
  function HomeController() {
    var vm = this;

    // callable methods on the vm
    vm.message = "This text is from the HomeController"

    // methods we'll instantiate the controller with
    activate();

    // defined methods
    function activate(){

    }

  };

  angular
    .module('app')
    .controller('HomeController', HomeController);
}());
