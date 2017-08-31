/**
 * Created by Joy on 8/3/17.
 */
'use strict';
angular.module('app',['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngSanitize'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/home.html'
            })
            .when('/about', {
                templateUrl: 'Views/about.html'
            })
            .when('/contact', {
                templateUrl: 'Views/contact.html'
            })
            .when('/food_menu', {
                templateUrl: 'Views/food_menu.html'
            })
    })
    .config(['$compileProvider',function($compileProvider)
    {

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|skype):/);

    }])

    .controller('menuCtrl', function($scope,$uibModal, $log, $document) {
        $scope.pizzaInfo = [
            {
                index: "1",
                name:"ExtravaganZZa",
                price: "$9.99",
                discri: "Create a pizza with your choice of crusts, sauces and ingredients, plus a free crust flavor"
            },
            {
                index: "2",
                name:"MeatZZa",
                price: "$10.99",
                discri: "Classic marinara sauce topped with mozzarella cheese."

            }, {
                index: "3",
                name:"Philly Cheese Steak",
                price: "$9.99",
                discri: "Pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions."

            }, {
                index: "4",
                name:"Pacific Veggie",
                price: "$7.99",
                discri: "Pepperoni, Italian sausage, ham, bacon, seasoned pork and beef."

            }, {
                index: "5",
                name:"Honolulu Hawaiian",
                price: "$8.99",
                discri: "I am a description"

            }, {
                index: "6",
                name:"Deluxe",
                price: "$15.99",
                discri: "I am a description"

            },{
                index: "7",
                name:"Ultimate Pepperoni",
                price: "$15.99",
                discri: "I am a description"

            },{
                index: "8",
                name:"Cali Chicken Bacon Ranch",
                price: "$11.99",
                discri: "I am a description"

            },{
                index: "9",
                name:"Buffalo Chicken",
                price: "$15.99",
                discri: "I am a description"

            }];
        var $ctrl = this;

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'Views/pizza_description.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size

            });
        };
    })
    .directive('pizzaItem', function() {
        return {
            restrict: "AE",
            templateUrl: "Views/pizza_item.html"
        }
    });


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('app').controller('ModalInstanceCtrl', function ($uibModalInstance) {
    var $ctrl = this;
    $ctrl.ok = function () {
        $uibModalInstance.close();
    };

});




