import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note, NotesService } from '../notes.service';

type NoteForm = Partial<{
  title: string | null;
  text: string | null;
}>;

@Component({
  selector: 'app-editing-view',
  templateUrl: './editing-view.component.html',
  styleUrls: ['./editing-view.component.scss'],
})
export class EditingViewComponent implements OnInit {
  note?: Note;

  noteForm = this.formBuilder.group<NoteForm>({
    title: '',
    text: '',
  });

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const noteId = String(this.route.snapshot.paramMap.get('id'));
    this.note = this.notesService.getNote(noteId);
    this.noteForm.reset({ title: this.note?.title, text: this.note?.text });
  }

  onSubmit({ title, text }: NoteForm): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId) {
      this.notesService.updateNote(noteId, {
        title: title ?? 'untitled',
        text: text ?? '',
      });
    }
  }

  delete(): void {
    if (this.note) {
      this.notesService.deleteNote(this.note.id);
    }
    this.router.navigate(['/']);
  }
}
