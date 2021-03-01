import React from 'react'

/**
 * 留言板内容
 * @param note
 * @returns {JSX.Element}
 * @constructor
 */
const Note = ({note}) => {
    return (
        <li>
            {note.content}
        </li>
    )
}
export default Note
