import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
 private messagesSubject = new BehaviorSubject<Message[]>([
    {
      id: 1,
      text: 'Hi, How may I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  messages$: Observable<Message[]> = this.messagesSubject.asObservable();  // ✅ Fixed!

  constructor() {}

  addMessage(text: string, sender: 'user' | 'bot'): void {
    const currentMessages = this.messagesSubject.value;
    const newMessage: Message = {
      id: currentMessages.length + 1,
      text,
      sender,
      timestamp: new Date()
    };
    this.messagesSubject.next([...currentMessages, newMessage]);
  }

  getBotResponse(userMessage: string): string {
    const msg = userMessage.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello! Welcome to our business platform. How can I assist you today?';
    } else if (msg.includes('service') || msg.includes('product')) {
      return 'We offer comprehensive business solutions including consulting, analytics, and automation services. Would you like to know more about any specific service?';
    } else if (msg.includes('price') || msg.includes('cost')) {
      return 'Our pricing is flexible and tailored to your needs. Please contact our sales team for a customized quote.';
    } else if (msg.includes('contact')) {
      return 'You can reach us at contact@businesshub.com or call us at +1 (555) 123-4567. Our team is available Monday-Friday, 9 AM - 6 PM EST.';
    } else if (msg.includes('help')) {
      return "I'm here to help! You can ask me about our services, pricing, contact information, or any general inquiries about our business.";
    } else if (msg.includes('about')) {
      return 'We are a leading business solutions provider with over 10 years of experience. We specialize in digital transformation, data analytics, and business process optimization.';
    } else {
      return 'Thank you for your message. Our team will get back to you shortly. Is there anything else I can help you with?';
    }
  }

  sendMessage(userMessage: string): void {
    this.addMessage(userMessage, 'user');

      const botResponse = this.getBotResponse(userMessage);
      this.addMessage(botResponse, 'bot');
  }
}