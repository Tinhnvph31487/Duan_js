myApp.controller('DangNhapCtrl', function ($scope, $http,$location) {
    $scope.user = {
        tentaikhoan: "",
        matkhau: ""
    };
    $scope.validateForm = {
        trangThai: true,
        noiDung: ""
    };
    $scope.onClickLogin = function() {
        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = "";

        // Kiểm tra xem tên đăng nhập và mật khẩu có được nhập không
        if ($scope.user.tentaikhoan === "" ) {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Vui lòng nhập tên đăng nhập ";
            return;
        }
        if ($scope.user.matkhau === "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Vui lòng nhập tên  mật khẩu";
            return;
        }
        $http({
            method: "POST",
            url: "http://localhost:3000/Dangnhap-dangky",
            data: $scope.user
        }).then(function(response) {
            // var data = response.data;
            if ($scope.user.tentaikhoan===response.data.tentaikhoan && $scope.user.matkhau===response.data.matkhau) {
                alert("Đăng nhập thành công!");
                $location.path("#!Giaodien")
            } else {
                $scope.validateForm.trangThai = false;
                $scope.validateForm.noiDung = "Tên đăng nhập hoặc mật khẩu không chính xác";
            }
        }).catch(function(error) {
            console.error("Lỗi trong quá trình đăng nhập:", error);
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại sau.";
        });
    };
});