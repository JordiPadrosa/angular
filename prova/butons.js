function click(){
    alert("My click");
}

function validarCognom(){

}

window.onload = function(bts){
    //document.getElementsByTagName("label")[0].innerHTML="First surname";
    const input = document.getElementsByName("nom")[0].addEventListener;
    const cognom = document.getElementsByName("cognom");
    const bts = document.getElementsByTagName("button");
    let a = 1;
    for(let i=0;i<bts.length;i++){
        bts[i].addEventListener("click",clicked);
}
    for(let i=0;i<cognom.length;i++){
        cognoms[i].addEventListener("change",validarCognom);
}
}