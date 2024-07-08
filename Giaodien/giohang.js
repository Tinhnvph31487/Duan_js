myApp.controller('KistGiohang', function ($scope, $http,$routeParams,$location) {
    $scope.listGiohang=[];
    $http({
        methor:"GET",
        url:"http://localhost:3000/gio_hang"
    }).then(function(res){
        $scope.listGiohang=res.data;
    })
    var apiurl='http://localhost:3000/gio_hang';
    var id=$routeParams.id;
    $scope.Xoa = function(id) {
        $http.delete(`${apiurl}/${id}`).then(function ($res) {
            if($res.status==200){
                alert("Bạn đã xoá thành công"),
                $location.path("/giohang")
            }
        })
    }


})
