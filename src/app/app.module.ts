import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditingViewComponent } from './editing-view/editing-view.component';
import { RouterModule } from '@angular/router';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EditingViewComponent,
    WelcomeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeViewComponent },
      { path: 'notes/:id', component: EditingViewComponent },
    ]),
  ],
  providers: [NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
