var i = 0;
var images = [];
var time = 3000;

images[0]= "image-big.png"
images[1]= "image-big2.png"
images[2]= "image-big3.png"

function changeImg(){
    document.slide.src = images[i];
    if (i < images.length -1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time);

}
window.onload = changeImg;
// var mydata = JSON.parse(data);
// document.write([0])
