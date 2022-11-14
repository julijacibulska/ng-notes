import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss'],
})
export class WelcomeViewComponent {
  constructor(private notesService: NotesService, private router: Router) {}

  createNote() {
    const id = this.notesService.createNote();
    console.log(id);
    this.router.navigate(['/notes', id]);
  }
}
