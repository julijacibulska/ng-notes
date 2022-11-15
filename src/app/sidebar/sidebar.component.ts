import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NotesService } from '../notes.service';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  notesMap$: Observable<Record<string, string>>;

  constructor(private notesService: NotesService) {
    this.notesMap$ = this.notesService.notesMap$;
    console.log(this.notesMap$);
  }
}
