Vmail = angular.module('Vmail', ['ui.router', 'ui.bootstrap'])

  //UI Router Config
  .config(['$urlRouterProvider', '$stateProvider',
        function($urlRouterProvider, $stateProvider) {
          $urlRouterProvider.otherwise('/signin');
            $stateProvider
            .state('signin', {
              url: '/signin',
              templateUrl: 'templates/signin.html',
              controller: 'DashboardCtrl'
            })
            .state('index', {
              url: '',
              controller: 'IndexCtrl',
              views: {
                '': {
                  templateUrl: 'templates/index.html'
                },
                'navbar': {
                  templateUrl: 'templates/navbar.html'
                },
                'leftPanel': {
                  templateUrl: 'templates/leftPanel.html'
                }
              }
            })
            .state('index.inbox', {
              url: '/inbox',
              controller: 'InboxCtrl',
              views: {
                '': {
                  templateUrl: 'templates/inbox.html'
                }
              }
            })
            .state('index.starred', {
              url: '/starred',
              controller: 'StarredCtrl',
              views: {
                '': {
                  templateUrl: 'templates/starred.html'
                }
              }
            })
            .state('index.sent', {
              url: '/sent',
              controller: 'sentCtrl',
              views: {
                '': {
                  templateUrl: 'templates/sent.html'
                }
              }
            })
            .state('index.draft', {
              url: '/draft',
              controller: 'draftCtrl',
              views: {
                '': {
                  templateUrl: 'templates/draft.html'
                }
              }
            });

          }
        ])

  //Error Logging
  .run(function($rootScope){
      $rootScope.$on("$stateChangeError", console.log.bind(console));
  });
