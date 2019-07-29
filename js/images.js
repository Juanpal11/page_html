let data = [];

function firstLoad(){
    fetch('js/imagesrc.json')
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        data = jsonData
        changeImg()    
    })
    .catch(function (err) {
        console.log("An error occurred. We couldn't load the images");
    })
    
}

let imageId= 0;
function changeImg(){
    
    document.slide.src = data[imageId].src;
    if (imageId < data.length -1){
        imageId++;        
    }else{
        imageId=0;
    }
    setTimeout("changeImg()", 3000);
    let currentImg = data[imageId]
    console.log(currentImg.src);
    
}
window.onload = firstLoad;
