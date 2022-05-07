import React from "react";

const Book = (props) => {
    console.log(props.bookTitle)
    return (
        <div className="book">
            <span>{props.bookCategory}</span>
            <h3>{props.bookTitle}</h3>
            <span>{props.bookAuthor}</span>
            <ul className="buttons">
                <li className="btn">
                    <button>Comments</button>
                </li>
                <li className="btn">
                    <button>Remove</button>
                </li>
                <li className="btn">
                    <button>Edit</button>
                </li>
            </ul>
        </div>
    )
}

export default Book;
