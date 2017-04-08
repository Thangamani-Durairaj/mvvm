'use strict';
angular.module('mainApp', ['oc.lazyLoad', 'ui.router', 'ui.bootstrap', 'angular-loading-bar',
    'ngMaterial', 'ngMessages', 'ngAnimate', 'ngRoute'])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$routeProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $routeProvider) {
            $ocLazyLoadProvider.config({
                debug: false,
                events: true,
            });

            $urlRouterProvider.otherwise('/log');

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard', templateUrl: 'views/dashboard/main.html',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'mainApp',
                                files: ['scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js']
                            }),
                            $ocLazyLoad.load({ name: 'ngTouch', files: ['com/angular-touch.js'] })
                        }
                    }
                })
                .state('dashboard.home', {
                    url: '/home', controller: 'MainCtrl', templateUrl: 'views/dashboard/home.html', resolve: {
                        loadMyFiles: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'mainApp',
                                files: ['scripts/controllers/main.js']
                            })
                        }
                    }
                })

                .state('dashboard.student-grid', {
                    templateUrl: 'views/pages/studexpo.html',
                    url: '/studexpo',
                    controller: 'grdContrl',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.staff-grid', {
                    templateUrl: 'views/pages/staffexpo.html',
                    url: '/staffexpo',
                    controller: 'grdContrl',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.vechicle-grid', {
                    templateUrl: 'views/pages/vechicleexpo.html',
                    url: '/vehicexpo',
                    controller: 'grdContrl',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.student-reg', {
                    templateUrl: 'views/pages/studreg.html',
                    url: '/stureg',
                    controller: 'ImportCon',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.staff-reg', {
                    templateUrl: 'views/pages/staffreg.html',
                    url: '/stareg',
                    controller: 'ImportCon',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.vehic-reg', {
                    templateUrl: 'views/pages/vechiclereg.html',
                    url: '/vehreg',
                    controller: 'ImportCon',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.att-stud', {
                    templateUrl: 'views/pages/studatt.html',
                    url: '/stuareg',
                    controller: 'ImportCon',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.att-staff', {
                    templateUrl: 'views/pages/staffatt.html',
                    url: '/staareg',
                    controller: 'ImportCon',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('dashboard.controlpanel', {
                    templateUrl: 'views/pages/controlpanel.html',
                    url: '/cp',
                    controller: 'grdMasters',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'grid',
                                files: [
                                    'com/angular-touch.js',
                                    'com/csv.js',
                                    'com/vfs_fonts.js',
                                    'com/ui-grid.js',
                                    'com/ui-grid.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'mainApp',
                                    files: ['scripts/controllers/grid.js']
                                })
                        }
                    }
                })

                .state('login', { templateUrl: 'views/pages/login.html', url: '/log' })
                .state('settings', { templateUrl: 'views/pages/settings.html', url: '/set' })
                .state('profile', { templateUrl: 'views/pages/profile.html', url: '/pro' })
                .state('dashboard.reports', { templateUrl: 'views/pages/reports.html', url: '/rep' })
        }]);



