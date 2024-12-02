import React, { useState } from 'react';

const ListNotes = [
    {
        name: "John Smith",
        note: "Edward's ability to solve complex problems with elegant and efficient code is truly remarkable. His expertise significantly accelerated our project timeline.",
        role: "Team Lead",
      },
      {
        name: "Sophia Turner",
        note: "The way Edward refactored our codebase not only improved performance but also made it more maintainable. His attention to detail is unmatched.",
        role: "Senior Developer",
      },
      {
        name: "Liam Johnson",
        note: "Edward has an exceptional knack for understanding user requirements and turning them into seamless software solutions. His UI implementation was beyond impressive.",
        role: "Product Manager",
      },
      {
        name: "Emma Wilson",
        note: "Working with Edward was inspiring! His enthusiasm for innovation and collaboration brought out the best in our entire team. He’s a true asset.",
        role: "Project Manager",
      },
      {
        name: "Mia Davis",
        note: "Edward's expertise in software engineering is phenomenal. His ability to integrate cutting-edge technologies into our existing system has transformed our workflow.",
        role: "CTO",
      },
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
        <div className='mt-24 ml-5 max-w-md'>
            <div>
                <blockquote>"{ListNotes[currentIndex].note}"</blockquote>
                <p><strong>- {ListNotes[currentIndex].name},</strong> {ListNotes[currentIndex].role}</p>
            </div>
            <div className='flex justify-between pt-6'>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
