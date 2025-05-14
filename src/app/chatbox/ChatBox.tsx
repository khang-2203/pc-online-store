"use client";

import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  name: string;
  message: string;
  timestamp: Date;
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("Khách hàng");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { name, message, timestamp: new Date() }]);
      setMessage("");
      alert("Tin nhắn đã được gửi (mock)!");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-96 sm:w-[350px] bg-white shadow-lg rounded-lg flex flex-col h-110 transform transition-all duration-300 ease-out scale-100 origin-bottom-right">
          <div className="flex justify-between items-center bg-red-500 text-white px-4 py-3 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <h2 className="text-base font-semibold">Chat với chúng tôi</h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-red-600 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
            {messages.length === 0 ? (
              <p className="text-sm text-gray-500 text-center">
                Chưa có tin nhắn
              </p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-3 text-sm">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-red-500">{msg.name}</span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-1">{msg.message}</p>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center p-3 border-t border-gray-200 bg-gray-50">
            <input
              type="text"
              placeholder="Nhập nội dung..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <Button
              onClick={handleSend}
              disabled={!message.trim()}
              className="ml-2 bg-blue-500 text-white hover:bg-blue-600 rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
