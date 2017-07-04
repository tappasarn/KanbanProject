import React from 'react';

// render each note
export default ({notes}) => (
    <ul>{notes.map(note =>
        <li key={note.id}>{note.task}</li>
    )}</ul>
)