
var fullName = 'Khanh Hang' ;
var age = 26 ;
// alert(fullName);
// alert(age);

// khác nhau giữa có chấm ; và không có ;
// - để ngăn cách các câu lệnh khi bị đưa lên 1 dòng;

/* Buil in - functions
 1. alert
 2. console
 3. confirm
 4. prompt => 4 hàm bật lên cửa sổ hộp thoại
 5. set timeout
 6. set interval
 */
// console.log(fullName); //warn , error

// confirm('xac nhan du tuoi'); //xác nhận 

// prompt('ho ten cua ban'); // hàm lấy thông tin input

// setTimeout(function () {
    
// }, 1000) // hàm được chạy sau 1 khoảng tgian (function, tgian ) Chỉ chạy 1 lần

//  setInterval(function () {
//     console.log( 'day la' + Math.random());
//  }, 1000) // chạy sau 1 khoảng tgian và chạy liên tục lặp lại (function, tgian)


/**
 * TOÁN TỬ TRONG JAVASCRIPT
 * TOÁN TỬ SỐ HỌC
 * +             
 * /
 * *
 * -
 * **      lũy thừa
 * %       chia lấy số dư
 * ++      tăng 1 giá trị
 * --      giảm 1 giá trị
 */

// prefix : tiền tố: ++a --a ; postfix: hậu tố : a++ a==

//hậu tố : 
var a=5;

var output = a--;
alert(output); //in ra vẫn là 5 : lấy giá trị a trước rồi sau đó mới tăng hay giảm
//việc 1 : 'a copy', 'a copy =6'
//việc 2 : a = a - 1 => 4
//việc 3 : trả về a copy => output
alert(a) // in ra là 4 : lấy giá trị sau khi -1



//tiền tố: 
var b=5;
//việc 1: +1 cho b, b = b + 1 => b=6
//viêc 2: trả về b sau khi +1 
alert(++b);

var c = 7;
var output = c++ - --c + c++; // 7 - 7 + 7 = 7
console.log('output:',output)
console.log(c);

/**
 * TOÁN TỬ GÁN
 */