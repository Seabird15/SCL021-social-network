import { loginRoot } from "../main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { auth } from "../firebase/startfirebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { db } from "../firebase/startfirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { CreatePost, getPosts } from "../services/databaseservice.js";

export function feedView() {
  const root = document.createElement("div");
  root.setAttribute("class", "feedview")

    //logo de aplicacion
    const logoFeed = document.createElement("img");
    logoFeed.src = "./img/logotransparente.png";
    logoFeed.setAttribute("class", "logoFeed");
    root.appendChild(logoFeed);

  //IMAGEN USUARIO
  const profileImg = document.createElement("img");
  profileImg.setAttribute("class", "profileImg");
  profileImg.src = "./img/profile-user.png";
  root.appendChild(profileImg);

  //boton de cerrar sesion
  const btnLogOut = document.createElement("button");
  btnLogOut.setAttribute("id", "btnLogOut");
  btnLogOut.setAttribute("type", "submit");
  btnLogOut.textContent = "Log Out";
  btnLogOut.addEventListener("click", () => {
    signOut(auth).then(() => {
      //COLOCAR ALERTA PARA CERRAR SESION
      Swal.fire("Haz cerrado sesion")
    })
  });
  root.appendChild(btnLogOut);

  //BUSCADOR DE AMIGOS
  const buscador = document.createElement("input");
  buscador.setAttribute("class", "buscador");
  buscador.setAttribute("type", "search");

  buscador.setAttribute("placeholder", "Buscar amigos");
  root.appendChild(buscador);

  //CAJA DE ESTADO Y LOGO
  const containFeed = document.createElement("div");
  containFeed.setAttribute("class", "containFeed");
  root.appendChild(containFeed);

  //caja de publicacion
  const inputFeedState = document.createElement("input");
  inputFeedState.setAttribute("class", "inputFeedState");
  inputFeedState.setAttribute("placeholder", "¿En qué estas pensando?");
  inputFeedState.setAttribute("type", "text");
  const btnStateFeed = document.createElement("button");
  btnStateFeed.setAttribute("class", "btnStateFeed")
  btnStateFeed.textContent = "Publicar";
  
  btnStateFeed.addEventListener("click" , () =>{console.log(inputFeedState.value);
    CreatePost(inputFeedState.value)
  });

  containFeed.appendChild(inputFeedState);

  //DIV PARA POSTS
  const postBox = document.createElement("div");
  postBox.setAttribute("class", "postBox");
  root.appendChild(postBox);

  
  root.appendChild(btnStateFeed);
getPosts((post)=> {
  const PostCard = document.createElement("p");
  PostCard.innerHTML = post.content;
  root.appendChild(PostCard);
}) 
  return root;
}