import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, MessageCircle, Loader2, ChevronDown, MapPin, Star } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Business } from '../types';
import { MOCK_BUSINESSES } from '../utils/mockData';
import { Link } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  recommendations?: Business[];
}

const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleRecommendations = (query: string) => {
    // Simple recommendation logic based on price (using rating as a proxy for now)
    if (query.toLowerCase().includes('cheap') || query.toLowerCase().includes('affordable')) {
      const sortedByPrice = [...MOCK_BUSINESSES].sort((a, b) => a.rating - b.rating);
      return sortedByPrice.slice(0, 5);
    }
    return [];
  };

  const RecommendationCard: React.FC<{ business: Business }> = ({ business }) => (
    <Link
      to={`/business/${business.id}`}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={business.imageUrl} 
          alt={business.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 text-sm truncate">{business.name}</h4>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span>{business.rating}</span>
          <span className="text-gray-300">•</span>
          <span>{business.location.city}</span>
        </div>
      </div>
      <div className="text-xs font-medium text-teal-600">
        View →
      </div>
    </Link>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Get recommendations based on user query
    const recommendations = handleRecommendations(input);

    setTimeout(() => {
      const response: Message = {
        role: 'assistant',
        content: recommendations.length > 0
          ? "Here are some affordable places I found for you:"
          : "I can help you discover great places nearby! Whether you're looking for restaurants, hotels, or other services, just let me know what you need.",
        recommendations
      };
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group z-50"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full" />
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 transition-all duration-300 transform ${
        isMinimized ? 'h-14' : 'h-[600px]'
      }`}
    >
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 flex items-center justify-between cursor-pointer"
           onClick={() => setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bot className="h-6 w-6 text-white" />
            <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <span className="text-white font-medium">AI Assistant</span>
            <p className="text-teal-100 text-xs">Always here to help</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMinimized ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 p-4 overflow-y-auto h-[calc(600px-144px)] bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-gray-800 font-medium mb-2">Welcome! 👋</h3>
                <p className="text-gray-600 text-sm">
                  I can help you discover amazing places and services. Try asking me about affordable places nearby!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index}>
                    <div
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-3 ${
                          message.role === 'user'
                            ? 'bg-teal-600 text-white'
                            : 'bg-white shadow-sm border border-gray-100'
                        }`}
                      >
                        <ReactMarkdown className="text-sm">{message.content}</ReactMarkdown>
                      </div>
                    </div>
                    {message.recommendations && message.recommendations.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.recommendations.map((business) => (
                          <RecommendationCard key={business.id} business={business} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-4">
                      <Loader2 className="h-5 w-5 animate-spin text-teal-600" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div className="bg-white border-t p-4">
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about places nearby..."
                  rows={1}
                  className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatAssistant;