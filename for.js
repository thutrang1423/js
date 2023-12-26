let n =+prompt("nhap n: ")
for(let i=0; i<n; i++){
    document.write("Hello! <BR>");
}

for(let i=1; i<=100; i++){
    document.write(i+"; ");
}


let a=+prompt("nhap a: ")
let b=+prompt("nhap b: ")
for(let i=a; i<=b; i++){
    document.write(i+"; ");
}


for(let i=a; i<=b; i++){
    if(i%2==0){
        document.write(i+"; ");
    }
}


let sum = 0;
for(let i=a; i<=b; i++){
    sum+=i
}
document.write("sum: "+sum);


let tich = 0;
for(let i=a; i<=b; i++){
    tich*=i
}
document.write("tich:"+tich);


let sumBinhPhuong = 0;
for(let i=a; i<=b; i++){
    sumBinhPhuong+=(i*i)
}
document.write("sum binh phuong: "+sumBinhPhuong);


for(let i=a; i<=b; i++){
    if(i%5==0){
        document.write(i+"; ");
    }
}


let sumChiaHet6=0;
let count=0;
for(let i=a; i<=b; i++){
    if(i%6==0){
        sumChiaHet6+=i;
    }
    count++;
}
document.write("trung binh cong chia het 6: "+ sumChiaHet6/count +"<BR>")


for(let i=1; i<=100; i++){
    if(i%5==0){
        document.write("Buzz; ");
    }
    else if(i%3==0){
        document.write("Fizz; ");
    }
    else if(i%3==0 && i%5==0){
        document.write("FizzBuzz;");
    }
    else{document.write(i+"; ");}
}