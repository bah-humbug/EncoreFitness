'use strict';

angular.module('EncoreFitness', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                        //controller : 'MenuController'
                    },
                    'content': {
                        template : '<h1>Sessions yet to be Completed</h1>'
                        //controller  : 'SessionStatsController'
                    },
                    'footer': {
                        template : '<h1>To be Completed</h1>'
                        //ToDo: Ask for footer mock-ups
                    }
                }
            })
        
            // route for monthly stats
            .state('app.monthly', {
                url: 'monthly',
                views: {
                    'content@': {
                        template : '<h1>Montly yet to be Completed</h1>'
                        //controller  : 'MonthlyStatsController'
                    }
                }
            })
        
            // route for monthly stats
            .state('app.weekly', {
                url: 'weekly',
                views: {
                    'content@': {
                        template : '<h1>Weekly yet to be Completed</h1>'
                        //controller  : 'WeeklyStatsController'
                    }
                }
            })
        
            // route for monthly stats
            .state('app.trainer', {
                url: 'trainer',
                views: {
                    'content@': {
                        template : '<h1>Trainer yet to be Completed</h1>'
                        //controller  : 'TrainerController'
                    }
                }
            })
        
            // route for log-out
            .state('app.logout', {
                url: 'logout',
                views: {
                    'content@': {
                        template : '<h1>Logout yet to be Completed</h1>'
                        //ToDo: Where do we redirect the user to? 
                    }
                }
            })
            $urlRouterProvider.otherwise('/');
    });