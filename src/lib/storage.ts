import { Note } from '@/components/calendar/notes';

export class Storage {
  private static readonly KEY = 'notes';

  static saveNote(note: Omit<Note, 'id'>) {
    const notes = this.getAllNotes();

    const noteData = {
      ...note,
      id: crypto.randomUUID(),
    };

    const newNotes = [...notes, noteData];
    localStorage.setItem(this.KEY, JSON.stringify(newNotes));

    return {
      ...noteData,
      date: this.formatDate(noteData.date),
    };
  }

  static getNotesByDate(date: string): Note[] {
    const notes = this.getAllNotes();
    const isMonth = date.includes(' ');
    const isRange = this.isRange(date);

    if (isMonth) {
      const filteredNotes = notes.filter(
        (note: Note) => note.date.includes(' ') && note.date === date,
      );

      return filteredNotes.map((note) => ({
        ...note,
        date: this.formatDate(note.date),
      }));
    }

    const notesWithouthMonth = notes.filter((note: Note) => !note.date.includes(' '));

    const filteredNotes = isRange
      ? this.filterByDateRange(date, notesWithouthMonth)
      : this.filterBySingleDate(date, notesWithouthMonth);

    return filteredNotes.map((note) => ({
      ...note,
      date: this.formatDate(note.date),
    }));
  }

  private static formatDate(date: string): string {
    if (this.isRange(date)) {
      const [start, end] = date.split('/');
      return `${this.formatDate(start)} - ${this.formatDate(end)}`;
    }

    if (date.includes(' ')) {
      return new Date(date).toLocaleDateString('en-IN', {
        month: 'short',
      });
    }

    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
    });
  }

  private static isRange(date: string): boolean {
    return date.includes('/');
  }

  private static getAllNotes(): Note[] {
    return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
  }

  private static filterBySingleDate(date: string, notes: Note[]): Note[] {
    return notes.filter((note) => {
      if (this.isRange(note.date)) {
        const [start, end] = note.date.split('/');
        return this.checkIfDateOverlapsRange(date, start, end);
      }
      return note.date === date;
    });
  }

  private static filterByDateRange(range: string, notes: Note[]): Note[] {
    return notes.filter((note) => this.checkIfRangesOverlap(note.date, range));
  }

  private static checkIfDateOverlapsRange(date: string, start: string, end: string): boolean {
    const noteDate = new Date(date);
    const noteStart = new Date(start);
    const noteEnd = new Date(end);
    return noteDate >= noteStart && noteDate <= noteEnd;
  }

  private static checkIfRangesOverlap(range1: string, range2: string): boolean {
    const [start1, end1] = range1.split('/');
    const [start2, end2] = range2.split('/');
    return (
      this.checkIfDateOverlapsRange(start1, start2, end2) ||
      this.checkIfDateOverlapsRange(end1, start2, end2)
    );
  }
}
