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
  const [name] = useState("Khách hàng");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const botReply = (userMsg: string) => {
    const msg = userMsg.toLowerCase();
    if (msg.includes("giá") || msg.includes("xin chào")) {
      return "Xin chào quý khách, quý khách cần hỗ trợ gì ạ ?";
    }
    if (msg.includes("giá") || msg.includes("sản phầm này giá bao nhiêu")) {
      return "Sản phẩm của chúng tôi có giá rất cạnh tranh!";
    }
    if (msg.includes("giá") || msg.includes("bên bạn sản phẩm này còn không")) {
      return "Ở các chi nhánh Hà Nội , hiện tại mặt hàng này vẫn còn!";
    }
    if (msg.includes("ship") || msg.includes("giao hàng")) {
      return "Chúng tôi hỗ trợ giao hàng toàn quốc, phí ship tùy khu vực.";
    }
    if (msg.includes("bảo hành")) {
      return "Sản phẩm được bảo hành chính hãng 12 tháng.";
    }
    if (msg.includes("giờ làm việc") || msg.includes("mấy giờ")) {
      return "Chúng tôi làm việc từ 8h sáng đến 6h tối, từ thứ 2 đến thứ 7.";
    }

    return "Mình chưa hiểu câu hỏi, bạn vui lòng nói lại nhé!";
  };

  const handleSend = () => {
    if (message.trim()) {
      const userMessage = { name, message, timestamp: new Date() };
      setMessages((prev) => [...prev, userMessage]);
      setMessage("");

      setTimeout(() => {
        const reply = botReply(userMessage.message);
        setMessages((prev) => [
          ...prev,
          { name: "Bot", message: reply, timestamp: new Date() },
        ]);
      }, 1000);
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
              <p className="text-sm text-gray-500 text-center">Chưa có tin nhắn</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-3 text-sm ${
                    msg.name === "Bot" ? "bg-blue-100 text-blue-900" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-baseline">
                    <span className={`font-medium ${msg.name === "Bot" ? "text-blue-700" : "text-red-500"}`}>
                      {msg.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="mt-1">{msg.message}</p>
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
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (message.trim()) {
                    handleSend();
                  }
                }
              }}
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
