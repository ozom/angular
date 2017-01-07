(function() {
  'use strict';

  angular
    .module('angularDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/index.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
$stateProvider
      .state('consumer', {
        url: '/consumer',
        templateUrl: 'app/main/api_consumer.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
$stateProvider
      .state('Register', {
        url: '/register',
        templateUrl: 'app/main/api_register.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
$stateProvider
      .state('token', {
        url: '/token_request',
        templateUrl: 'app/main/api_token_request.html',
        controller: 'MainController',
        controllerAs: 'main'
      });




    $urlRouterProvider.otherwise('/');
  }

})();
