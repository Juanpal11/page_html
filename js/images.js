var i = 0;
var images = [];
var time = 3000;

images[0]= "assets/image-big.png"
images[1]= "assets/image-big2.png"
images[2]= "assets/image-big3.jpg"

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
