import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newQuery = query(collection(db, "messages"), orderBy("timestamp"));

    const unsuscribe = onSnapshot(newQuery, (querySpanshot) => {
      let currentMessages = [];
      querySpanshot.forEach((item) => {
        currentMessages.push({ content: item.data(), id: item.id });
      });
      setMessages(currentMessages);
    });

    return unsuscribe;
  }, []);

  return (
    <section className="chat-content">
      {messages &&
        messages.map((item) => (
          <Messages key={item.id} message={item.content} />
        ))}

      <SendMessage />
    </section>
  );
};

export default Chat;
