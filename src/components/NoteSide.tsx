"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil, X, Trash2 } from "lucide-react";
// import { format } from "date-fns";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface Note {
  id: number;
  content: string;
  createdAt: Date;
}

export default function SidebarNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newNote, setNewNote] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const formatDate = (date:string) => {
    return dayjs(date).fromNow();
  }
  // Load notes from localStorage when component mounts
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        if (Array.isArray(parsedNotes)) {
          setNotes(parsedNotes);
        }
      } catch (e) {
        console.error("Failed to parse notes from localStorage", e);
      }
    }
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    if (notes.length > 0) {
      try {
        localStorage.setItem("notes", JSON.stringify(notes));
      } catch (e) {
        console.error("Failed to save notes to localStorage", e);
      }
    }
  }, [notes]);

  useEffect(() => {
    if (isPopupOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isPopupOpen]);

  const addNote = () => {
    if (newNote.trim() !== "") {
      const newNoteObject = {
        id: Date.now(),
        content: newNote.trim(),
        createdAt: new Date(),
      };
      setNotes((prevNotes) => [...prevNotes, newNoteObject]);
      setNewNote("");
      setIsPopupOpen(false);
    }
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== id);
      // Update localStorage after notes are updated
      try {
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
      } catch (e) {
        console.error("Failed to save notes to localStorage", e);
      }
      return updatedNotes;
    });
  };
  

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addNote();
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Notes</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsPopupOpen(true)}
          aria-label="Add note"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add Note</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsPopupOpen(false)}
                aria-label="Close popup"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your note"
              className="mb-4"
              ref={inputRef}
            />
            <Button onClick={addNote} className="w-full">
              Add Note
            </Button>
          </div>
        </div>
      )}

      <ScrollArea className="flex-grow">
        {notes.map((note) => (
          <div key={note.id} className="bg-white p-2 mb-2 rounded shadow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm mb-1">{note.content}</p>
            <p className="text-xs text-gray-500">
          {formatDate(note.createdAt.toString())}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteNote(note.id)}
            aria-label="Delete note"
            className="h-6 w-6"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
