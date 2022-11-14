import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WelcomeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeViewComponent },
      { path: 'notes/:id', component: EditingViewComponent },
    ]),
  ],
  providers: [NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
