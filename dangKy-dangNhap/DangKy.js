myApp.controller('DangKytk', function ($scope, $http) {
    $scope.product = {
        tentaikhoan: "",
        sdt: "",
        email: "",
        matkhau: ""
    }
    $scope.validateForm = {
        trangThai: true,
        noiDung: ""
    }
    $scope.onClickSubmit = function() {
        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = "";
        if($scope.product.tentaikhoan === "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Hãy nhập tên tài khoản";
            return;
        }

        // Validate tên bắt buộc và tối thiểu 5 ký tự
        if ($scope.product.tentaikhoan.length < 5) {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Tên tài khoản là trường bắt buộc và phải có ít nhất 5 ký tự";
            return;
        }

        // Validate mật khẩu không rỗng và tối thiểu 5 ký tự
        if ($scope.product.matkhau === "" || $scope.product.matkhau.length < 5) {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Mật khẩu là trường bắt buộc, và có tối thiểu 5 ký tự";
            return;
        }

        // 2.2. Call api để tạo mới dữ liệu
        $http({
            method: "POST",
            url: "http://localhost:3000/Dangnhap-dangky",
            data: $scope.product
        }).then(function(response) {
            // Xử lý logic sau khi call api thành công

            // Hiển thị thông báo tạo thành công
            alert("Tạo mới thành công");
            window.location.href="#!DangNhap"

            // Điều hướng về trang danh sách
            // window.location.href = "#!product/list";
        });
    } // Kết thúc hàm onClickSubmit()
}); // Kết thúc controller