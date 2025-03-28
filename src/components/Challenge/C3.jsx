import { useState } from "react";

export default function C3() {
  const [unreadMessages, setUnReadMessages] = useState(["1"]);

  let text;
  if (unreadMessages.length === 0) {
    text = "You're all caught up!";
  } else if (unreadMessages.length === 1) {
    text = "You have 1 unread message!";
  } else {
    text = `You have ${unreadMessages.length} unread messages!`;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">{text}</h1>
    </div>
  );
}
