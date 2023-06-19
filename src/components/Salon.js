import { useState } from "react";

const socketioClient = require("socket.io-client");

export function Salon() {
  let client = socketioClient.io("ws://localhost:8000");
  let messages = useState([]);
  let saisieUtilisateur = useState("");
  client.on("connection", (socket) => {
    console.log("connecté au serveur");
  });

  client.on("messages", (msg) => {
    messages.push(<p>{msg}</p>);
  });

  return (
    <div>
      <textarea id="affichageChat">{messages[1]}</textarea>
      <textField>{saisieUtilisateur}</textField>
      <button onClick={() => client.emit("message", saisieUtilisateur)}></button>
    </div>
  );
}
