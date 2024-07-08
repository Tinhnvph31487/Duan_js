
myApp.controller('detailspProductCtrl', function ($scope, $http, $routeParams) {
    $scope.product={
        id:"",
        tenSanPham:"",
        hinhAnh:"",
        gia:"",
        tenDanhMuc:""
    }
    $http(({
        methor:"GET",
        url:"http://localhost:3000/san_pham/"+$routeParams.id
    })).then(function(res){
        $scope.product=res.data;
    })

    
})
