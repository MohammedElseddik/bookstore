import React from 'react'

const AddBookForm = () => {
    return (
        <form className='add-book'>
            <div className='add-book__header'>
                <h3> ADD NEW BOOK</h3>
            </div>
            <div className='add-book__controls'>
                <input type='text' placeholder='Book title' />
                <input type='text' placeholder='Author' />
            </div>
            <div className='add-book__actions'>
                <button type='submit'>ADD BOOK</button>
            </div>
        </form>
    )
}

export default AddBookForm;