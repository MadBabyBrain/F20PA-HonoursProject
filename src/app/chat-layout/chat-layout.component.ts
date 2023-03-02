import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SocketManagerService } from '../socket-manager/socket-manager.service';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnInit, AfterViewInit {

  messages: Array<{topic: string, reply: string}> = new Array<{topic: string, reply: string}>;
  sending: boolean;

  constructor(private socketMan: SocketManagerService) {
    this.sending = false;
  }

  ngAfterViewInit(): void {
    // this.socketMan.subscribeToEvent(false, 'recieve-message', (reply: String) => {
    //   console.log(reply.split(':=:'));
    // })
    this.socketMan.subscribeToEvent(true, 'bot_uttered', (reply: { text: string }) => {
      // console.log(reply);
      this.messages.push({topic: reply.text.split(':=:')[0], reply: reply.text.split(':=:')[1]});
      this.sending = false;
    })
    let input_area = document.getElementById("input") as HTMLTextAreaElement;
    input_area.value = ""
    this.sending = false;
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.sending) return;
    let input_area = document.getElementById("input") as HTMLTextAreaElement;
    let msg = input_area.value;

    this.sending = true;

    this.messages.push({topic: "", reply: msg});

    this.socketMan.emitEvent(false, 'create-message', msg);
    this.socketMan.emitEvent(true, 'user_uttered', msg);
  }

  goodReview(topic:string, str: string): void {
    this.socketMan.emitEvent(false, 'good-reply', {t: topic, s: str});
  }

  badReview(topic:string, str: string): void {
    this.socketMan.emitEvent(false, 'bad-reply', {t: topic, s: str});
  }

}
