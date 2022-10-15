//Bài 1

var btnClick = document.getElementById("btnClick");
btnClick.onclick=function() {
//Đầu vào
var soNgay = document.getElementById("soNgay").value;

//Xử lý
var result = "Tiền lương là: " + soNgay * 100000;

//Đầu ra
var divRs = document.getElementById("divRs");
divRs.innerHTML = result;
divRs.className = "alert alert-success";
}

//Bài 2
var btnClick1 = document.getElementById("btnClick1");
btnClick1.onclick = function() {
//Đầu vào
var soThuc1 = document.getElementById("soThuc1").value;
var soThuc2 = document.getElementById("soThuc2").value;
var soThuc3 = document.getElementById("soThuc3").value;
var soThuc4 = document.getElementById("soThuc4").value;
var soThuc5 = document.getElementById("soThuc5").value;

soThuc1 = parseInt(soThuc1);
soThuc2 = parseInt(soThuc2);
soThuc3 = parseInt(soThuc3);
soThuc4 = parseInt(soThuc4);
soThuc5 = parseInt(soThuc5);

//Xử lý
var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5;

//Đầu ra
var divRs1 = document.getElementById("divRs1");
divRs1.innerHTML = trungBinh;
divRs1.className = "alert alert-success";
}

// Bài 3
var btnclick2 = document.getElementById("btnclick2");
btnclick2.onclick = function() {
//Đầu vào
var tienDo = document.getElementById("tienDo").value;

//Xử lý
quiDoi = (23500 * tienDo)+" VND";

//Đầu ra
var divRs2 = document.getElementById("divRs2");
divRs2.innerHTML = quiDoi;
divRs2.className = "alert alert-success";
}

// Bài 4
document.getElementById("btnClick3").onclick = function() {
// Đầu vào
var chieuDai = document.getElementById("chieuDai").value;
var chieuRong = document.getElementById("chieuRong").value;

// Xử lý
chieuDai = parseInt(chieuDai);
chieuRong = parseInt(chieuRong);
var chuVi = (chieuDai + chieuRong)*2;
var dienTich = chieuDai * chieuRong;
var reSult = "Chu vi là: " + chuVi;
reSult += "<br />";
reSult += "Diện tích là: " + dienTich;

//Đầu ra
var divRs3 = document.getElementById("divRs3");
divRs3.innerHTML = reSult;
divRs3.className = "alert alert-success";
}

// Bài 5
document.getElementById("btnClick4").onclick = function(){
// Đầu vào
var soNhap = document.getElementById("soNhap").value;

//Xử lý
var soChuc = Math.floor(soNhap/10);
var donVi = soNhap%10;
rS = "Tổng 2 ký số của số vừa nhập là: " + (soChuc + donVi);

// Đầu ra
var divRs4 = document.getElementById("divRs4");
divRs4.innerHTML = rS;
divRs4.className = "alert alert-success";
}

