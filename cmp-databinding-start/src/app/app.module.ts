import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameOddComponent } from './game-odd/game-odd.component';
import { GameEvanComponent } from './game-evan/game-evan.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOddComponent,
    GameEvanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
