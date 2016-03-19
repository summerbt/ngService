angular.module("ngService", [])
    .controller('MealController', ['$scope', controller]);

//    .controller('SettingsController2', ['$scope', SettingsController2]);
function controller($scope) {
    $scope.taxDollars = 0;
    $scope.tax = 0;
    $scope.tip = 0;
    $scope.tipDollars = 0;
    $scope.base = 0;
    $scope.subtotal = 0;
    $scope.earningsTipTotal = 0;
    $scope.earningsMealCount = 0;
    $scope.earningsAvgTip = 0;

    $scope.handleSubmit = function () {
        console.log("handleSubmit");
        $scope.taxDollars = $scope.base * ($scope.tax / 100);
        $scope.subtotal = $scope.base + $scope.taxDollars;
        $scope.tipDollars = $scope.subtotal * ($scope.tip / 100);
        $scope.earningsTipTotal += $scope.tipDollars;
        $scope.earningsMealCount += 1
        $scope.earningsAvgTip = $scope.earningsTipTotal / $scope.earningsMealCount;
        console.log($scope.taxDollars);
        $scope.base = 0;
        $scope.tax = 0;
        $scope.tip = 0;
    }

    $scope.handleCancel = function () {
        $scope.base = 0;
        $scope.tax = 0;
        $scope.tip = 0;
        $scope.subtotal = 0;
        $scope.tipDollars = 0;
    }
    $scope.handleReset = function () {
        $scope.handleCancel();
        $scope.earningsTipTotal = 0;
        $scope.earningsMealCount = 0;
        $scope.earningsAvgTip = 0;
    }
};

//var mealCalc = {
//    tax: 0,
//    taxDollars: 0,
//    tip: 0,
//    tipDollars: 0,
//    base: 0,
//    subtotal: 0,
//    tipTotal: 0,
//}
