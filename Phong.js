function taoDoiTuongPhong(hinhAnh, ten,loaiPhong,dienTich, diaChi,   giaPhong){
    var Phong = new Object();
    /* b1: gắn các thuộc tính cho đối tượng */
    Phong.hinhAnh = hinhAnh;
    Phong.ten = ten;
    Phong.loaiPhong = loaiPhong;
    Phong.dienTich = dienTich;
    Phong.diaChi = diaChi;
    Phong.giaPhong = giaPhong; 
    /* b2: viết phương thức cho đối tượng */
    
    
    Phong.tojson =function(){
        var json = JSON.stringify(this);
        return json;
    }
    /* từ json chuyển thành một đối tượng đầy đủ các phương thức
        input: json
        output: đối tượng đầy đủ
    */
   Phong.fromjson = function(json){
       var doiTuongDayDu = new Object();
       /*b1: chuyển từ json thành đối tượng */
       var doiTuong = JSON.parse(json);
       /* b2: chuyển đối tượng thành đối tượng đầy đủ phương thức*/
       var doiTuongDayDu = taoDoiTuongPhong(doiTuong.hinhAnh, doiTuong.ten, doiTuong.loaiPhong, doiTuong.dienTich, doiTuong.diaChi,doiTuong.giaPhong);
       return doiTuongDayDu;
   }
   /* từ json của danh sách sản phẩm trả về một sanh sách sản phẩm có đầy đủ các phương thức 
   input: json của danh sách sản phẩm 
   output: danh sách sản phẩm đầy đủ
   */
  Phong.fromjsons = function(jsonDanhSachPhong){
  var DanhSachPhongDayDu = new Array();
  var DanhSachPhong = JSON.parse(jsonDanhSachPhong);
  
  for (var i=0 ; i<DanhSachPhong.length; i++){
      var Phong=DanhSachPhong[i];
      var PhongDayDu = taoDoiTuongPhong(Phong.hinhAnh , Phong.ten ,Phong.loaiPhong ,Phong.dienTich ,Phong.diaChi ,Phong.giaPhong );
      DanhSachPhongDayDu[i] = PhongDayDu;
    }
    return DanhSachPhongDayDu;
    }
   return Phong;

}
/* mô tả : chuyển một danh sách đối tượng, thành một đoạn HTML để hiển thị đc danh sách sản phẩm ra màn hình
input: danh sách sản phẩm
output: HTML hiển thị danh sách sản phẩm
*/
function chuyenDanhSachDoiTuongPhongThanhHTML(DanhSachPhong){
    var HTMLDanhSachPhong = '<div class="items">';
    for(var i=0; i<DanhSachPhong.length;i++){
        var Phong = DanhSachPhong[i];
        var htmlPhong = chuyenDoiTuongPhongThanhHTML(Phong);
        HTMLDanhSachPhong=HTMLDanhSachPhong+htmlPhong;

    }
    HTMLDanhSachPhong = HTMLDanhSachPhong + '</div>';
    return HTMLDanhSachPhong;
}
/* mô tả : chuyển một đối tượng thành một đoạn HTML
input : đối tượng
output: đpạn HTML của đối tượng đó 
*/
function chuyenDoiTuongPhongThanhHTML(Phong){
    var html = '';
   html+= '<div class="item">'
   html+= '<div class="item-thumb">'
   html+= '<img src="'+ Phong.hinhAnh +'" alt="" srcset=""></div>'
   

   html+= '<h2 class="item-title">'+Phong.ten+'</h2>'
   html+= '<div class="item-price">'
   html+= '<span class="item-price-origin">'+Phong.loaiPhong+' đ</span>'
   html+= '<span class="item-price-sale">'+Phong.dienTich+' đ</span>'
   html+= '</div>'
   html+= '<button class="btn btn-primary">Liên Hệ</button>'
   html+= '</div>'
   return html;
}
