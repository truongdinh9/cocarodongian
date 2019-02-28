function inkq() {
    document.getElementById("iou").innerHTML="";
    for(let i=0;i<5;i++) {

        for (let j=0;j<5;j++){
            document.getElementById("iou").innerHTML+=bang[i][j]
        }
        document.getElementById("iou").innerHTML+="<br/>"
    }
}
let bang=[];
let m,n;
for(let i=0;i<5;i++) {
    bang[i] = [0, 0, 0, 0, 0]
}
inkq();
function changevl() {
    n=parseInt(prompt("Nhap dong can thay doi"));
    m=parseInt(prompt("Nhập cột cần thay đổi"));
    if(bang[n-1][m-1]===0){bang[n-1][m-1]="x"}else bang[n-1][m-1]=0;
inkq();
}