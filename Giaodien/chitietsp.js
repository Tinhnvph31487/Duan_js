myApp.controller('detailGiaoDienProductCtrl', function ($scope, $http, $routeParams) {
    $scope.product={
        id:"",
        ten:"",
        anh:"",
        tenDanhMuc:""
    }
    $http({
        methor:"GET",
        url:"http://localhost:3000/san_pham/"+$routeParams.id
    }).then(function(res){
        $scope.product=res.data;
    })

    $scope.danhsachSanPham=[];
    $http({
        methor:"GET",
        url:"http://localhost:3000/san_pham"
    }).then(function(res){
        $scope.danhsachSanPham=res.data;
        
    })
})
