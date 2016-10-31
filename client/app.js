var App = angular.module('app', [])

.controller('userInput', function appControllerFunc($scope, $interval, $http) {

  angular.element(document).ready(function() {
    $scope.counter = 0;
    var zuckTimer = $interval(function() {
        $scope.counter+= 25;
      }, 44);
  });

  $scope.income = undefined;
  $scope.incomeToday = 0;
  $http.get('/api/income')
    .success(function(data) {
      for(var i = 0; i < data.length; i++) {
        $scope.incomeToday = Math.round($scope.incomeToday += data[i].income);
      }
      $scope.userAvgIncome = Math.round($scope.incomeToday / data.length);
      console.log('userAvg', $scope.userAvgIncome);
      console.log('income today', $scope.incomeToday);
    })
    .error(function(data) {
      console.log('get err', data);
    });

  $scope.saveIncome = function() {
    $http.post('/api/income', {income: $scope.income})
    .success(function(data) {
      console.log('post data', data);
    })
    .error(function(data) {
      console.log('post err', data);
    });
  };

  $scope.userInputIncome = function() {
    $scope.youVsZuck = youVsZuckerberg($scope.income);
    $scope.perspective = perspective($scope.income);
    $scope.forYou = forYou($scope.income);
  };

  $scope.showDiv = function() {
    $('#bottom').css('display', 'block');
  };

  $scope.scrollToSelection1 = function() {
    $.scrollTo('.numberCircle', {
      duration: 600
    });
  };

  $scope.scrollToSelection2 = function() {
    $.scrollTo({left: -1500, top: 1500}, {
      duration: 800
    });
  };

  $scope.scrollToSelection3 = function() {
    $.scrollTo({left: -1500, top: 2200}, {
      duration: 800
    });
  };

  $scope.scrollToSelection4 = function() {
    $.scrollTo({left: -1500, top: 3180}, {
      duration: 800
    });
  };

  $scope.scrollToSelection5 = function() {
    $.scrollTo({left: -1500, top: 4300}, {
      duration: 800
    });
  };

  $scope.scrollToSelection6 = function() {
    $.scrollTo({left: -1500, top: 5000}, {
      duration: 800
    });
  };

  $scope.scrollToSelection7 = function() {
    $.scrollTo({left: -1500, top: 5620}, {
      duration: 800
    });
    $('.scrollBtn6').css('display', 'none');
  };

  $scope.scrollToSelection8 = function() {
    $.scrollTo({left: -1500, top: 0}, {
      duration: 800
    });
  };
});
