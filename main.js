let fb = document.getElementById('fb');
let ig = document.getElementById('ig');
let git = document.getElementById('git');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');



fb.onmouseenter= function(){
    img1.style.display = 'block';
}

fb.onmouseleave= function(){
    img1.style.display = 'none';
}

ig.onmouseenter= function(){
    img2.style.display = 'block';
}

ig.onmouseleave= function(){
    img2.style.display = 'none';
}

git.onmouseenter= function(){
    img3.style.display = 'block';
}

git.onmouseleave= function(){
    img3.style.display = 'none';
}






