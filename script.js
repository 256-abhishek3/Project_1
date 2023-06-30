function changeFont(font){
    document.getElementById("content").style.fontFamily = font.value;
}
function changeSize(n){
    var s = document.getElementById("content");
    s.style.fontSize = n.value + 'Px';
}
function Bold(){
    var bol = document.getElementById("content").style.fontWeight;
    if(bol == 'normal'){
        document.getElementById("content").style.fontWeight = 'bold';
    }else{
        document.getElementById("content").style.fontWeight = 'normal';
    }
}
function Italic(){
    var bol = document.getElementById("content").style.fontStyle;
    if(bol == 'normal'){
        document.getElementById("content").style.fontStyle = 'Italic';
    }else{
        document.getElementById("content").style.fontStyle = 'normal';
    }
}
function Underline(){
    var bol = document.getElementById("content").style.textDecoration;
    if(bol !== 'Underline'){
        document.getElementById("content").style.textDecoration = 'underline';
    }else{
        document.getElementById("content").style.textDecoration = 'Normal';
    }
}
function reset(){
    document.getElementById("content").style.fontStyle = "Normal";
    document.getElementById("content").style.textDecoration = "none";
    document.getElementById("content").style.fontWeight = "Normal";
}
function remove(){
    document.getElementById("content").value = " ";
}