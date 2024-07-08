
myApp.controller('listdhProductCtrl', function ($scope, $http) {
    $scope.danhsachDH=[];

    $http({
        methor:"GET",
        url:"http://localhost:3000/gio_hang"
    }).then(function(res){
        $scope.danhsachDH=res.data;
    })
    $scope.tongGia = function() {
        var tong = 0;
        // Lặp qua mỗi sản phẩm và tính tổng giá
        for (var i = 0; i < $scope.danhsachDH.length; i++) {
            tong += $scope.danhsachDH[i].gia * $scope.danhsachDH[i].soluong;
        }
        return tong;
    };
})
