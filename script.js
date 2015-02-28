var Gender = function () {};
Gender.prototype = {
  male: {
    gender: "Male",
    he: "he",
    his: "his",
    him: "him",
    female: true
  },
  female: {
    gender: "Female",
    he: "she",
    his: "her",
    him: "her",
    female: false
  }
};

angular.module('madLib', ['ngMessages'])
  .controller('madLibCtrl', ['$scope', function ($scope) {
    $scope.gender = new Gender().male;
    $scope.checkGender = function () {
      if ($scope.gender.female == false) {
        $scope.gender = new Gender().male;
      } else {
        $scope.gender = new Gender().female;
      }
    };
    $scope.resetForm = function () {
      $scope.user = {};
      $scope.myForm.$setPristine();
    };
    $scope.checkValid = function () {
      if ($scope.myForm.$valid && $scope.myForm.$submitted) {
        var myEl = angular.element(document.querySelector('#submit'));
        myEl.removeAttr('disabled');
        return true;
      } else if (!$scope.myForm.$valid && $scope.myForm.$submitted) {
        var myEl = angular.element(document.querySelector('#submit'));
        myEl.attr('disabled', "");
        return false;
      }
    };
}]);

//TODO: Find out how to NOT make the generate go through after validation fail