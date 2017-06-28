require('angular');
require('angular-ui-router');
require('angular-cookies');
require('angular-animate');

var carouselComponent = require('./carousel/carousel.component.js');
var tabsComponent = require('./tabs/tabs.component.js');
var newsComponent = require('./news/news.component.js');
var internalnewsComponent = require('./news/internal/internalnews.component.js');
var carouselService = require('./carousel/carousel.service.js');
var newsService = require('./news/news.service.js');
var carouselFactory = require('./carousel/carousel.factory.js');
var newsFactory = require('./news/news.factory.js');

angular.module('testFrontPL', ['ui.router', 'ngCookies', 'ngAnimate'])
.service('carouselService', carouselService)
.service('newsService', newsService)
.factory('carouselFactory', carouselFactory)
.factory('newsFactory', newsFactory)
.component('carouselView', carouselComponent)
.component('tabsView', tabsComponent)
.component('newsView', newsComponent)
.component('internalNews', internalnewsComponent)
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    component: 'newsView'
  })
  .state('home.new', {
    url: 'news/:id',
    component: 'internalNews'
  });
    // Utilizando o HTML5 History API
    $locationProvider.html5Mode(true);
});