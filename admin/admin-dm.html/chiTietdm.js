
myApp.controller('detaildmProductCtrl', function ($scope, $http, $routeParams) {
    $scope.product={
        id:"",
        tenDanhMuc:""
    }
    $http(({
        methor:"GET",
        url:"http://localhost:3000/danh_muc/"+$routeParams.id
    })).then(function(res){
        $scope.product=res.data;
    })

    
})
