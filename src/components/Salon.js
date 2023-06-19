import { useState } from "react";

const socketioClient = require("socket.io-client");

export function Salon() {
  let client = socketioClient.io("ws://localhost:8000");
  let [messages, setMessages] = useState([]);
  let [saisie, setSaisie] = useState("");
  client.on("connection", (socket) => {
    console.log("connecté au serveur");
  });

  client.on("messages", (msg) => {
    let tmp = messages;
    tmp.push(<p>{msg}</p>)
    setMessages(tmp)
  });

  return (
    <div>
      <textarea id="affichageChat">{messages}</textarea>
      <textfield name="saisieUtilisateur" onChange={(event) => setSaisie(event.target.value)}>{saisie}</textfield>
      <button onClick={() => {client.emit("message", saisie)}}></button>
    </div>
  );
}
