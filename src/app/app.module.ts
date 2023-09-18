import {NgModule} from '@angular/core';
//importing angular 
import { BrowserModule } from '@angular/platform-browser';
//import make use of the browser module, contains directives pipes and more
import {AppComponent} from './app.component'

//decorator in Typescript that annotates the class as an Angular module. Used to enhance or modify classes in angular.
@NgModule(
  {
    //metadata properties
    imports: [
      BrowserModule
    ],
    // imports are used to bring in other Angular modules that you will need
    declarations: [
      AppComponent
    ],
    //declarations are used to make components, directives, and pipes available to your module that don't come from your module.
    bootstrap: [
      AppComponent
    ]
    //bootstrap is used for root module and lets angular know or components that will start the bootstrap 
  }
)

//exports a class called AppModule
export class AppModule {

}