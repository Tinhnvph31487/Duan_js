
myApp.controller('giaoDienTT', function ($scope, $http) {
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




myApp.controller('thanhToan', function ($scope, $http, $routeParams) {
    $scope.product={
      id:"",
      hinhAnh:"",
      tensanpham:"",
      gia:"",
      soluong:"",
      tenkhachhang:"",
      sdt:"",
      diachi:"",
      email:"",
      phuongthucthanhtoan:""
    }
    $scope.validateForm={
        trangThai:true,
        noiDung:""
    }
    $http(({
        methor:"GET",
        url:"http://localhost:3000/san-pham/"+$routeParams.id
    })).then(function(res){
        $scope.product=res.data;
    })


    $scope.onClickSubmit=function(){

        console.log("//gỌI HÀM ONCLICKSUBMIT thành công");
        console.log("Giá trị người dùng nhập:",$scope.product);

        //2.1.

        //ResetForm
        $scope.validateForm.trangThai=true;
        $scope.validateForm.noiDung="";

        if($scope.product.id===""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung="ID là trường bắt buộc."
            return;//Dừng Hàm ở đây luôn $scope không chạy xuống dưới nữa

        }

        if($scope.product.ten===""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung="Tên là trường bắt buộc."
            return;//Dừng Hàm ở đây luôn $scope không chạy xuống dưới nữa
            
        }

        $http({
            method:"POST",
            url:"http://localhost:3000/thanh_toan",
            data:$scope.product
        }).then(function(response){
            alert("Sửa mới thành công")
            window.location.href="#!product/list"
        })

        
    }//Kết thúc hàm onClickSubmit
})





