angular.module('madLib', [])
  .controller('madLibCtrl', ['$scope', function ($scope) {
    var female; //Neville I need help with the gender switcher!!
    var gender = {};
    var checkGender = function () {
      female = $scope.female;
      if (female == false) {
        gender = {
          gender: "Male",
          he: "he",
          his: "his",
          him: "him",
          female: false
        };
      } else {
        gender = {
          gender: "Female",
          he: "she",
          his: "her",
          him: "her",
          female: true
        };
      }
      return gender;
    };
    $scope.gender = checkGender();
    
    $scope.resetForm = function() {
      $scope.user = {};
      $scope.user.$setPristine();
    };
}]);