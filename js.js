myApp.controller('listProductGiaoDienl', function ($scope, $http) {
    $scope.listGiaoDien=[];
    $http({
        methor:"GET",
        url:"http://localhost:3000/san_pham"
    }).then(function(res){
        $scope.listGiaoDien=res.data;
    })
    $scope.addToCart = function(item) {
        // Gọi API endpoint để thêm sản phẩm vào giỏ hàng
        $http.post('http://localhost:3000/gio_hang', item)
            .then(function(response) {
                // Xử lý phản hồi từ API (nếu cần)
                console.log('Sản phẩm đã được thêm vào giỏ hàng:', response.data);
                alert('Sản phẩm đã được thêm vào giỏ hàng!');
            })
            .catch(function(error) {
                // Xử lý lỗi khi gọi API không thành công
                console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
                alert('Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.');
            });
    };


})
