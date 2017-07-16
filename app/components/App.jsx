// DOTO : port this class to a function

import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

/**
 * App need to be created as react class due to it contains state
 * once state is change, with functional base component it won't be able to re-render
 * this class has its job to manage other components in the application 
 * @export
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
    render() {
        const { notes } = this.props;
        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote} />
            </div>
        );
    }
    addNote = () => {
        this.props.NoteActions.create({
            id: uuid.v4(),
            task: 'New task'
        });
    }
    deleteNote = (id, e) => {
        // Avoid bubbling to edit 
        e.stopPropagation();
        this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
    }
    activateNoteEdit = (id) => {
        this.setState({
            notes: this.state.notes.map(
                note => {
                    if (note.id === id) {
                        note.editing = true;
                    }
                    return note;
                }
            )
        });
    }
    editNote = (id, task) => {
        this.setState(
            {
                notes: this.state.notes.map(
                    note => {
                        if (note.id === id) {
                            note.editing = false; note.task = task;
                        }
                        return note;
                    }
                )
            }
        );
    }
}

// connect is a higher order func that will return anouther func that takes App as param
// connect takes function as the first param which will return an onject of notes
// connect takes alt actions as second param
export default connect(({ notes }) => ({
    notes
}), {
    NoteActions
})(App)
