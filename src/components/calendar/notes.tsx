'use client';

import { useEffect, useState } from 'react';

import { PlusIcon } from 'lucide-react';

import { Storage } from '@/lib/storage';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export interface Note {
  id: string;
  text: string;
  date: string;
}

function inferNoteDate(startDate: Date | null, endDate: Date | null, currentMonth: string): string {
  if (startDate && endDate) {
    return `${startDate.toISOString()}/${endDate.toISOString()}`;
  } else if (startDate) {
    return startDate.toISOString();
  }
  return currentMonth;
}

interface CalendarNotesProps {
  currentMonth: string;
  startDate: Date | null;
  endDate: Date | null;
}

function CalendarNotes({ currentMonth, startDate, endDate }: CalendarNotesProps) {
  const [showInput, setShowInput] = useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<Note[]>(
    Storage.getNotesByDate(inferNoteDate(startDate, endDate, currentMonth)),
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const noteDate = inferNoteDate(startDate, endDate, currentMonth);

      const newNote = Storage.saveNote({ text: note, date: noteDate });
      setNotes([...notes, newNote]);
      setNote('');
      setShowInput(false);
    }
  };

  useEffect(() => {
    setNotes(Storage.getNotesByDate(inferNoteDate(startDate, endDate, currentMonth)));
  }, [currentMonth, startDate, endDate]);

  return (
    <div className="flex h-24 flex-col gap-2 pb-4 sm:h-32 sm:pb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base">Notes</h2>
        <Button onClick={() => setShowInput(!showInput)} size={'xs'} variant={'secondary'}>
          <PlusIcon /> Add Note
        </Button>
      </div>

      <div className="overflow-x-auto">
        {showInput && (
          <Input
            className="rounded-none border-0 border-b focus-visible:ring-0"
            placeholder="Enter a note..."
            onKeyDown={handleKeyDown}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        )}
        <ul>
          {notes.map((note, i) => (
            <li
              key={i}
              className="flex h-6 items-center justify-between border-b px-2 py-1 text-sm"
            >
              <span>{note.text}</span>
              <span className="text-muted-foreground">{note.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { CalendarNotes };
