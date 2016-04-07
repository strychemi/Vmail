Vamil = angular.module('Vmail', ['ui.router', 'ui.bootstrap'])

  //UI Router Config
  .config(['$urlRouterProvider', '$stateProvider',
        function($urlRouterProvider, $stateProvider) {
            $stateProvider
            .state('index', {
              url: '',
              templateUrl: 'templates/index.html',
            })

          }
        ])

  //Error Logging
  .run(function($rootScope){
      $rootScope.$on("$stateChangeError", console.log.bind(console));
  });
