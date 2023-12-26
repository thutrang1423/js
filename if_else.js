// //bai 1
// let a1=+prompt("A?")
// let b1=+prompt("B?")
// if(a1%b1==0){
//     alert("a chia het cho b")
// }
// else(alert("a khong chia het cho b"))

// //bai 2
// let tuoi=+prompt("nhap tuoi: ")
// if(tuoi<15){alert("chua du tuoi vao lop 10")}
// else(alert("da du tuoi vao lop 10"))

// //bai 3
// let a3 =+prompt("Nhap so bat ky: ")
// if(a3<0){alert("a be hon 0")}
// else if(a3==0){alert("a bang 0")}
// else {alert ("a lon hon 0")}

// //bai 4
// let a4,b4,c4
// do{
// a4=+prompt("nhap a")
// b4=+prompt("nhap b")
// c4=+prompt("nhap c")
// }while(a4==b4 && a4==c4 && b4==c4 )
// if(a4>b4){
//     if(a4>c4){alert("a la so lon nhat")}
//     else if(c4>a4)(alert("c la so lon nhat"))
// }
// else{
//     if(b4>c4){alert("b la so lon nhat")}
//     else if(c4>b4){alert("c la so lon nhat")}
// }

// //bai 5
// let diem=+prompt("nhap diem: ")
// if(diem<5){alert("yếu")}
// else if(diem == 5){alert("trung binh")}
// else if(diem > 5 || diem <8){alert("tren trung binh")}
// else if(diem ==8 || diem < 9){alert("kha")}
// else if(diem == 9 || diem <10){alert("gioi")}
// else {alert("xuat xac")}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//bai 1
// let doC =+prompt("Nhap do C: ")
// alert (`chuyen ${doC} do C ra do F la ${doC*9/5+32}`)

//bai 2
// let met =+prompt("nhap chieu dai m: ")
// alert(`chuyen ${met}m sang feet là ${met * 3.2808}`)

//bai 3
// let canh=+prompt("nhap canh hinh vuong: ")
// alert(`dien tich hinh vuong canh ${canh} là ${canh*canh}`)

//bai 4
// let canhDai=+prompt("nhap chieu dai hinh chu nhat: ")
// let canhRong=+prompt("nhap chieu rong hinh chu nhat: ")
// alert(`dien tich hinh chu nhat ${canhDai*canhRong}`)

//bai 6 ax+b
// alert("giai phuong trinh ax+b")
// let a206=+prompt("nhap bien a")
// let b206=+prompt("nhap bien b")
// alert(`gia tri cua x: ${-b/a}`)

//bai 8
// let tuoi208
// do{
//     tuoi208=+prompt("nhap so tuoi: ")
// }while(isInt(tuoi208)==false && tuoi208>120 && tuoi208 <=0)

//bai 9
// let a209,b209,c209
// do{
// a209=+prompt("nhap canh tam giac a")
// b209=+prompt("nhap canh tam giac b")
// c209=+prompt("nhap canh tam giac c")
// }while(a209<=0 || b209<=0 || c209<=0 || a209+b209<=c209 || b209+c209<=a209 || c209+a209<=b209)
// alert(`tam giac co canh ${a209}, ${b209}, ${c209}`)
