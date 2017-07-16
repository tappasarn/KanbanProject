// DOTO : port this class to a function

import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';

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
        const {notes} = this.props;
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
        // It would be possible to write this in an imperative style.
        // I.e., through `this.state.notes.push` and then
        // `this.setState({notes: this.state.notes})` to commit.
        //
        // I tend to favor functional style whenever that makes sense.
        // Even though it might take more code sometimes, I feel
        // the benefits (easy to reason about, no side effects)
        // more than make up for it.
        //
        // Libraries, such as Immutable.js, go a notch further.
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
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
export default connect(({ notes }) => ({
    notes
}))(App)
