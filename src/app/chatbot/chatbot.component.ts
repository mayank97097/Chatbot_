import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: any[] = [];
  newMessage: string = '';
  previewUrl: string | null = null;

  sendMessage() {
    if (this.newMessage.trim()) {
      // Add user's message
      this.messages.push({ text: this.newMessage, sender: 'user' });
      const userMessage = this.newMessage; // Store user's message
      this.newMessage = '';

      // Bot's reply
      setTimeout(() => {
        const botReply = this.getBotReply(userMessage);
        this.messages.push({ text: botReply, sender: 'bot' });
      }, 1000); // Simulate a delay for bot response
    }
  }

  getBotReply(message: string): string {
    // Simple bot reply logic
    return `You said: ${message}`;
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.messages.push({ attachment: reader.result, sender: 'user' });
        }
      };
      reader.readAsDataURL(file);
    }
  }

  isImage(file: string): boolean {
    return file.startsWith('data:image');
  }

  isPDF(file: string): boolean {
    return file.startsWith('data:application/pdf');
  }

  previewFile(file: string) {
    this.previewUrl = file;
  }

  closePreview() {
    this.previewUrl = null;
  }
}
