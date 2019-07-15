import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click.outside.directive';
import { ClickOutsideInputDirective } from './click.outsideInput.directive';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDateComponent } from './input-date.component';
import { IntroComponent } from './intro.component';
import { NewsComponent } from './form-news.component';
import { BrowserPictComponent } from './browser-pict.component';
import { ProjectsComponent } from './projects.component';
import { PostArrowsComponent } from './post-arrows.component';
import { FooterComponent } from './footer.component';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about-us.component';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent, InputDateComponent, IntroComponent, 
    NewsComponent, BrowserPictComponent, ProjectsComponent,
    PostArrowsComponent,FooterComponent, ClickOutsideDirective,
    ClickOutsideInputDirective, HomeComponent, AboutComponent,
    ContactComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
