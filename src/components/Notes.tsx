import React, { useState } from 'react';

const ListNotes = [
    {
        name: "Joe Violin",
        note: "What a kind person",
        role: "Backend Developer"
    },
    {
        name: "Kenny",
        note: "Levi is a shit",
        role: "Wall Defender"
    }
];

export default function Notes() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ListNotes.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + ListNotes.length) % ListNotes.length);
    };

    return (
        <div className='mt-24 ml-5'>
            <div>
                <blockquote>"{ListNotes[currentIndex].note}"</blockquote>
                <p><strong>- {ListNotes[currentIndex].name},</strong> {ListNotes[currentIndex].role}</p>
            </div>
            <div>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
