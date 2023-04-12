import React from "react";

type Book = {
  id: number;
  name: string;
  author: string;
};

type BookListProps = {
  list: Book[];
};

const BookList = ({ list }: BookListProps) => {
  return (
    <div>
      <ul>
        {list.map((book) => {
          return (
            <li key={book.id}>
              <h1>{book.name}</h1> <span>{book.author}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
