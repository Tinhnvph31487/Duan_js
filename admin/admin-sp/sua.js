
myApp.controller('editspProductCtrl', function ($scope, $http, $routeParams) {
    $scope.product={
        id:"",
        tenSanPham:"",
        gia:"",
        hinhAnh:"",
        tenDanhMuc:""
    }
    //Cầm 1 biến lưu trạng thái, nội dung validate
    $scope.validateForm={
        trangThai:true,//true=form hợp lệ và ngược lại
        noiDung:""
    }
    $http(({
        methor:"GET",
        url:"http://localhost:3000/san_pham/"+$routeParams.id
    })).then(function(res){
        $scope.product=res.data;
    })
    $scope.onClickSubmit=function(){
        $scope.validateForm.trangThai=true;
        $scope.validateForm.noiDung="";


        if($scope.product.tenDanhMuc===""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung="Tên là trường bắt buộc."
            return;//Dừng Hàm ở đây luôn $scope không chạy xuống dưới nữa
            
        }

        $http({
            method:"PUT",
            url:"http://localhost:3000/san_pham/"+$routeParams.id,
            data:$scope.product
        }).then(function(response){
            alert("Sửa mới thành công")
            window.location.href="#!admin_listsp"
        })

        
    }
})





