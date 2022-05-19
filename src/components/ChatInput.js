import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
  const inputRef = useRef(null);
  const sendMessage = async (e) => {
    e.preventDefault(); // Prevents refresh if press enter

    if (!channelId) {
      console.log('No channel id')
      return false;
    }

    const docRef = await addDoc(collection(db, `rooms/${channelId}/messages`), {
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
    });
    console.log('doc ref : ', docRef);
  };
  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder="Message #Room" />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
