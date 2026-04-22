 let images=["img2.jpg","img3.jpeg","img4.png"];
let i=0;

function nxtimg(){
    i=(i+1)%images.length;
    document.getElementById("img").src=images[i];
}
