'use client';

import { useEffect, useRef, useState } from 'react';

import { format } from 'date-fns';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<Note[]>(
    Storage.getNotesByDate(inferNoteDate(startDate, endDate, currentMonth)),
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      if (!note) {
        setShowInput(false);
        return;
      }

      const noteDate = inferNoteDate(startDate, endDate, currentMonth);
      const newNote = Storage.saveNote({ text: note, date: noteDate });
      setNotes([...notes, newNote]);
      setNote('');
      setShowInput(false);
      return;
    }
  };

  useEffect(() => {
    setNotes(Storage.getNotesByDate(inferNoteDate(startDate, endDate, currentMonth)));
  }, [currentMonth, startDate, endDate]);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    } else {
      setNote('');
    }
  }, [showInput]);

  return (
    <div className="relative flex h-24 flex-col gap-2 pb-4 sm:h-32 sm:pb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium sm:text-base">
          Notes{' '}
          <span className="text-muted-foreground">
            {startDate &&
              (endDate
                ? `(${format(startDate, 'dd MMM')} - ${format(endDate, 'dd MMM')})`
                : `(${format(startDate, 'dd MMM')})`)}
          </span>
        </h2>
        <Button onClick={() => setShowInput(!showInput)} size={'xs'} variant={'secondary'}>
          <PlusIcon /> Add Note
        </Button>
      </div>

      <div className="overflow-x-auto">
        {showInput && (
          <Input
            ref={inputRef}
            className="h-6 rounded-none border-0 border-b px-2 focus-visible:ring-0"
            placeholder="Enter a note..."
            onKeyDown={handleKeyDown}
            onBlur={() => !note && setShowInput(false)}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        )}
        {notes.length === 0 && !showInput && (
          <p className="text-muted-foreground max-w-80 text-sm">
            Click
            <span className="inline-flex items-center gap-1 pr-2 pl-1.5 align-text-bottom text-xs font-medium">
              <PlusIcon className="size-3" /> Add Note
            </span>
            to add a new note for this month, a date or range of dates.
          </p>
        )}
        <ul>
          {notes.map((note, i) => (
            <li
              key={i}
              className="flex min-h-6 items-end justify-between border-b px-2 py-1 text-sm"
            >
              <span className="max-w-80">{note.text}</span>
              <span className="text-muted-foreground uppercase">{note.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { CalendarNotes };
