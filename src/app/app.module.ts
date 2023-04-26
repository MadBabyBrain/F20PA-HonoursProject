import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Socket, SocketIoModule } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';

// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} }
// const config: SocketIoConfig = { url: 'https://590d-2-103-134-242.eu.ngrok.io', options: {} }
// const config: SocketIoConfig = { url: 'https://metal-tips-kiss-80-43-50-235.loca.lt:3000', options: {} }
// const config: SocketIoConfig = { url: 'https://f20pa-hp-rasa-website.azurewebsites.net:3000', options: {} }

@Injectable()
export class webSocket extends Socket {
  constructor() {
    super({url: 'http://localhost:3000', options: {}})
    // super({url: 'https://f20pa-honours-project-1.herokuapp.com', options: {}})
    // super({ url: 'https://server-1.dgcapper.com', options: {}})
    // super({url: 'http://2.103.134.80:3000', options: {}})
  }
}

@Injectable()
export class chatSocket extends Socket {
  constructor() {
    // super({url: 'https://rasa-probability-bot.herokuapp.com', options: {}})
    // super({url: 'http://2.103.134.80:5001', options: {}})
    // super({ url: 'https://server-1.dgcapper.com', options: {}})
    super({url: 'http://localhost:5001', options: {}})
  }
}


@NgModule({
  declarations: [
    AppComponent,
    ChatLayoutComponent
  ],
  imports: [
    SocketIoModule,
    // SocketIoModule.forRoot(config),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [webSocket, chatSocket],
  bootstrap: [AppComponent]
})
export class AppModule { }
