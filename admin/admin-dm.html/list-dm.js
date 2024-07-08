
myApp.controller('listdmProductCtrl', function ($scope, $http,$routeParams,$location) {
    
    
    $scope.danhsachDanhMuc=[];

    $http({
        methor:"GET",
        url:"http://localhost:3000/danh_muc"
    }).then(function(res){
        $scope.danhsachDanhMuc=res.data;
    })
    var apiurl='http://localhost:3000/danh_muc';
    var id=$routeParams.id;
    $scope.Xoa = function(id) {
        $http.delete(`${apiurl}/${id}`).then(function ($res) {
            if($res.status==200){
                alert("Bạn đã xoá thành công"),
                $location.path("/admin_listdm")
            }
        })
    }


})