AdminUtilityApp.controller('AdminLoginController',
function($scope,$http) {
  console.log('Called the AdminLoginController');
  $scope.message = "Login successfully";
  $scope.submitForm = function() {
  			// check to make sure the form is completely valid
  	if ($scope.loginForm.$valid) {

             $http.get('connection.properties').then(function (response) {
                      if($scope.admin.env == 'ref'){
                        console.log('Ref is used');
                        console.log('URL is',response.data.ref);
                      }else{
                       console.log('ENV is used');
                        console.log('URL is',response.data.live);
                      }
                    });
             alert($scope.message);

  	}
  }
}
);
