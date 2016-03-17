angular.module("ngService", [])
    .controller('MealController', function ($scope) {
        $scope.calc = mealCalc;
        //        $scope.calc.taxDollars = $scope.calc.base * ($scope.calc.tax / 100);
        //        $scope.calc.subtotal = $scope.calc.base + $scope.calc.taxDollars;
        //        $scope.calc.tipDollars = $scope.calc.subtotal * ($scope.calc.tip / 100);

    });
var mealCalc = {
    tax: 0,
    taxDollars: 0,
    tip: 0,
    tipDollars: 0,
    base: 0,
    subtotal: 0,
}
