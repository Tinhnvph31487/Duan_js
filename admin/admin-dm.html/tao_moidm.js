
myApp.controller('createdmProductCtrl', function ($scope, $http) {
    $scope.product={
        id:"",
        tenDanhMuc:""
    }
    $scope.validateForm={
        trangThai:true,
        noiDung:""
    }
    $scope.onClickSubmit=function(){
        $scope.validateForm.trangThai=true;
        $scope.validateForm.noiDung="";
        if($scope.product.id===""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung="ID là trường bắt buộc."
            return;
        }
        if($scope.product.tenDanhMuc===""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung="Tên là trường bắt buộc."
            return; 
        }
        $http({
            method:"POST",
            url:"http://localhost:3000/danh_muc",
            data:$scope.product
        }).then(function(response){
            alert("Tạo mới thành công")
            window.location.href="#!admin_listdm"
        })  
    }
})
