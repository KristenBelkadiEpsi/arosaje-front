import { useState, useEffect } from "react";
/* import { socket } from "../socket"; */
import io from "socket.io-client"
export function Salon() {
  const [historiqueMessage, setHistoriqueMessage] = useState("")
  const [socket, setSocket] = useState(null)
  const [saisie, setSaisie] = useState("");
  useEffect(() => {
    if (socket === null) {
      setSocket(io("http://127.0.0.1:4000"))
    } else {

      socket.on("message", msg => {
        console.log("nouveau message")
        setHistoriqueMessage(msg + "\r\n")
        console.log(historiqueMessage)
      })
    }
  }, [socket, historiqueMessage, saisie])
  return (<div>
    <input onChange={(event) => setSaisie(event.target.value)}></input>
    <button onClick={() => { console.log("envoie du message"); socket.emit("message", saisie) }}>envoyer</button>
    <textarea value={historiqueMessage}></textarea>
  </div>)
}
