import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

export interface Note {
  id: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotesService implements OnInit {
  private notes$ = new BehaviorSubject<Record<string, Note>>({});

  notesMap$ = this.notes$.pipe(
    map((notes) => {
      const notesMap: Record<string, string> = {};
      Object.entries(notes).map(([id, note]) => (notesMap[id] = note.title));
      return notesMap;
    })
  );

  constructor() {}

  ngOnInit(): void {
    const storageRecord = localStorage.getItem('notes');
    // TODO: Validate object
    const parsedObj = storageRecord ? JSON.parse(storageRecord) : {};
    this.notes$.next(parsedObj);
  }

  getNote(key: string): Note | undefined {
    return this.notes$.getValue()[key];
  }

  createNote() {
    const id = Date.now();
    const updatedNotesMap = {
      ...this.notes$.getValue(),
      [id]: {
        id,
        title: 'untitled',
        text: '',
      },
    };
    this.notes$.next(updatedNotesMap);
    return id;
  }
}
