import React from 'react';
import Note from './Note';

// render each note and bind delete event to each one
export default ({ notes, onDelete = () => { } }) => (
    <ul>{notes.map(({ id, task }) =>
        <li key={id}> <Note
            onDelete={onDelete.bind(null, id)}
            task={task} />
        </li>
    )}</ul>
)
