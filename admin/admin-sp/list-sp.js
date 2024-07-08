
myApp.controller('listspProductCtrl', function ($scope, $http,$routeParams,$location) {
    $scope.danhsachSanPham=[];

    $http({
        methor:"GET",
        url:"http://localhost:3000/san_pham"
    }).then(function(res){
        $scope.danhsachSanPham=res.data;
    })
    var apiurl='http://localhost:3000/san_pham';
    var id=$routeParams.id;
    $scope.Xoa = function(id) {
        $http.delete(`${apiurl}/${id}`).then(function ($res) {
            if($res.status==200){
                alert("Bạn đã xoá thành công"),
                $location.path("/admin_listsp")
            }
        })
    }


})
