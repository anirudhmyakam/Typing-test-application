import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { LetterComponent } from './letter/letter.component';
import { WordComponent } from './word/word.component';
import { JustWordsComponent } from './just-words/just-words.component';
import { TimerComponent } from './timer/timer.component';
import { ResultsComponent } from './results/results.component';
import { ParasComponent } from './paras/paras.component';
import { BaseTypingComponent } from './base-typing/base-typing.component';
import { GameOneComponent } from './game-one/game-one.component';
import { SelectionComponent } from './selection/selection.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WordsLimitComponent } from './words-limit/words-limit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpIntercepterService } from './service/http/http-intercepter.service';
import { UserDataComponent } from './user-data/user-data.component';
import { RegisterLoginPageComponent } from './register-login-page/register-login-page.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TypingPageComponent } from './typing-page/typing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    LetterComponent,
    WordComponent,
    JustWordsComponent,
    TimerComponent,
    ResultsComponent,
    ParasComponent,
    BaseTypingComponent,
    GameOneComponent,
    SelectionComponent,
    MenuBarComponent,
    WordsLimitComponent,
    LoginComponent,
    RegisterComponent,
    UserDataComponent,
    RegisterLoginPageComponent,
    LeaderBoardComponent,
    ErrorPageComponent,
    TypingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
