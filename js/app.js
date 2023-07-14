import { setData } from "./post.js";

const $btnRuta = document.getElementById("btnRuta");

$btnRuta.addEventListener("click",(e)=>{
    e.preventDefault();
    const $txtNomRuta = document.getElementById("txtRuta");
    const newId = Math.floor(Math.random()*100);

    const nuevaRuta = {
        nomRuta: $txtNomRuta.value,
        id: newId
    }
    //Envia la url a donde va a hacer el post 
    //nuevaRuta | Nuevo objeto a guardar
    setData("rutas", nuevaRuta);

} );





