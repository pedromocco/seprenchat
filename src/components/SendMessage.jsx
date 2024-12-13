import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import EmojiPicker from "emoji-picker-react";

const SendMessage = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState("close");
  const emoji = () => setOpen("open");
  const closeEmoji = () => setOpen("close");
  const onEmojiClick = (event, emojiObject) => {
    setInput(`${input}${emojiObject.emoji}`)
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      photo: photoURL,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };


  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Escribe aquí"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default SendMessage;
