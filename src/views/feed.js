import { loginRoot } from "../main.js";

export function feedView() {
  const containFeed = document.createElement("div");
  containFeed.setAttribute("class", "containFeed");
  root.appendChild(containFeed);

  const logoFeed = document.createElement("img");
  logoFeed.src = "./img/logoo.jpg";
  logoFeed.setAttribute("class", "logoFeed");
  containFeed.appendChild(logoFeed);
}
