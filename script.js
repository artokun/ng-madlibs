angular.module('madLib', [])
  .controller('madLibCtrl', ['$scope', function ($scope) {
    $scope.gender = {
      gender: "Male",
      he: "he",
      his: "his",
      him: "him",
      female: true
    };
    $scope.gender.female = false;
    $scope.checkGender = function () {
      if ($scope.gender.female == false) {
        $scope.gender = {
          gender: "Male",
          he: "he",
          his: "his",
          him: "him",
          female: true
        };
      } else {
        $scope.gender = {
          gender: "Female",
          he: "she",
          his: "her",
          him: "her",
          female: false
        };
      }
    };
    $scope.resetForm = function () {
      $scope.user = {};
      $scope.user.$setPristine();
    };
}]);