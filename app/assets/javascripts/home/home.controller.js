(function(){
  'use strict';

  // each time called by the route we call a new instance of the HomeController constructor function
  function HomeController() {
    var vm = this;

    // callable methods on the vm
    vm.name = 'Bruno';
  }

  angular
    .module('app')
    .controller('HomeController', HomeController);
}());
