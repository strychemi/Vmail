Vmail = angular.module('Vmail', ['ui.router', 'ui.bootstrap'])

  //UI Router Config
  .config(['$urlRouterProvider', '$stateProvider',
        function($urlRouterProvider, $stateProvider) {
          $urlRouterProvider.otherwise('/signin');
            $stateProvider
            .state('signin', {
              url: '/signin',
              templateUrl: 'templates/signin.html',
              controller: 'authCtrl'
            })
            .state('index', {
              url: '',
              views: {
                '': {
                  templateUrl: 'templates/index.html',
                  controller: 'IndexCtrl'
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
              views: {
                '': {
                  templateUrl: 'templates/inbox.html',
                  controller: 'InboxCtrl'
                }
              }
            })
            .state('index.starred', {
              url: '/starred',
              views: {
                '': {
                  templateUrl: 'templates/starred.html',
                  controller: 'starredCtrl'
                }
              }
            })
            .state('index.sent', {
              url: '/sent',
              views: {
                '': {
                  templateUrl: 'templates/sent.html',
                  controller: 'sentCtrl'
                }
              }
            })
            .state('index.draft', {
              url: '/draft',
              views: {
                '': {
                  templateUrl: 'templates/draft.html',
                  controller: 'draftCtrl'
                }
              }
            });

          }
        ])

  //Error Logging
  .run(function($rootScope){
      $rootScope.$on("$stateChangeError", console.log.bind(console));
  });
