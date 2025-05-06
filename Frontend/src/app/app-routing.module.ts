import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JustWordsComponent } from './just-words/just-words.component';
import { ResultsComponent } from './results/results.component';
import { ParasComponent } from './paras/paras.component';
import { GameOneComponent } from './game-one/game-one.component';
import { BaseTypingComponent } from './base-typing/base-typing.component';
import { WordsLimitComponent } from './words-limit/words-limit.component';
import { TestingComponent } from './testing/testing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RegisterLoginPageComponent } from './register-login-page/register-login-page.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TypingPageComponent } from './typing-page/typing-page.component';

const routes: Routes = [
  {path:"just-words",component:JustWordsComponent},
  {path:"results",component:ResultsComponent},
  {path:"game-one",component:GameOneComponent},
  {path:"base",component:BaseTypingComponent},
  {path:"words",component:WordsLimitComponent},
  {path:"paras",component:ParasComponent},
  {path:"testing",component:TestingComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"userinfo",component:UserDataComponent},
  {path:"login-register",component:RegisterLoginPageComponent},
  {path:"leaderboard",component:LeaderBoardComponent},
  {path:"errorpage",component:ErrorPageComponent},
  {path:"type",component:TypingPageComponent},
  {path:"",component:TypingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
