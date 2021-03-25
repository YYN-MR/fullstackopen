import React from 'react'

/**
 * 留言板内容
 * @param note
 * @returns {JSX.Element}
 * @constructor
 */
const Note = ({note, toggleImportance}) => {
    const label = note.important
        ? 'make not important' : 'make important'

    return (
        <li>
            {note.content}
            <button onClick={toggleImportance}>
                {label}
            </button>
        </li>
    )
}
export default Note
