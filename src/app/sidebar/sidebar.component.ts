import { Component } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
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
  query: string = '';

  queryUpdate = new Subject<string>();

  notesMap$: Observable<Record<string, string>>;

  // TODO:  create hasNotes for conditional rendering

  constructor(private notesService: NotesService) {
    // TODO: this does not comply with DRY
    this.notesMap$ = this.notesService.notesMap$.pipe(
      map((notesMap) => {
        const result = { ...notesMap };
        Object.entries(notesMap).forEach(([key, noteValue]) => {
          if (!noteValue.includes(this.query)) {
            delete result[key];
          }
        });
        return result;
      })
    );
    this.queryUpdate.subscribe((value) => {
      this.query = value;
      this.notesMap$ = this.notesService.notesMap$.pipe(
        map((notesMap) => {
          const result = { ...notesMap };
          Object.entries(notesMap).forEach(([key, noteValue]) => {
            if (!noteValue.includes(this.query)) {
              delete result[key];
            }
          });
          return result;
        })
      );
    });
  }
}
