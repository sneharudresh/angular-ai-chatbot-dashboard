import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { ChatbotService } from '../../services/chatbot.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})
export class Chatbot implements OnInit, OnDestroy {
  isOpen = false;
  inputMessage = '';
  messages: Message[] = [];
  private subscription?: Subscription;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    this.subscription = this.chatbotService.messages$.subscribe(
      messages => this.messages = messages
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    if (this.inputMessage.trim()) {
      this.chatbotService.sendMessage(this.inputMessage);
      this.inputMessage = '';
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}