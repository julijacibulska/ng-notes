import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subscription } from 'rxjs';

export interface Note {
  id: string;
  title: string;
  text: string;
}

const LS_KEY_NOTES = 'notes';

@Injectable({
  providedIn: 'root',
})
export class NotesService implements OnDestroy {
  private notes = new BehaviorSubject<Record<string, Note>>({});
  notes$ = this.notes.asObservable();

  notesMap$ = this.notes$.pipe(
    map((notes) => {
      const notesMap: Record<string, string> = {};
      Object.entries(notes).map(
        ([id, note]) => (notesMap[id] = note.title.substring(0, 50))
      );
      console.log('MAP', notesMap);
      return notesMap;
    })
  );

  private notesSubscription$: Subscription | undefined;

  constructor() {
    const storageRecord = localStorage.getItem(LS_KEY_NOTES);
    // TODO: Validate object
    const parsedObj = storageRecord ? JSON.parse(storageRecord) : {};
    this.notes.next(parsedObj);

    this.notesSubscription$ = this.notes.subscribe((notes) => {
      localStorage.setItem(LS_KEY_NOTES, JSON.stringify(notes));
    });
  }

  ngOnDestroy(): void {
    this.notesSubscription$?.unsubscribe();
  }

  getNote(key: string): Note | undefined {
    return this.notes.getValue()[key];
  }

  createNote() {
    const id = Date.now();
    const updatedNotesMap = {
      ...this.notes.getValue(),
      [id]: {
        id,
        title: 'untitled',
        text: '',
      },
    };
    this.notes.next(updatedNotesMap);
    return id;
  }

  updateNote(id: string, { title, text }: { title: string; text: string }) {
    const updatedNotesMap = {
      ...this.notes.value,
      [id]: { id, title, text },
    };

    this.notes.next(updatedNotesMap);
  }
}
