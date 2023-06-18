import React, { useState } from 'react'

const Message = () => {
    const [messages, setMessages] = useState(["a", "cd"])
  return (
    <div>
        {
        messages.length === 0 
        ? 
        <h1>You are all caught up!</h1>
        :
        <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
        }
    </div>
  )
}

export default Message