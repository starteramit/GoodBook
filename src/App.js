import { useState } from "react";
import "./App.css";

var booksLibrary = {
  Python: [
    {
      name: "Python Crash Course",
      rating: "4.8/5",
    },
    {
      name: "Automate the Boring Stuff with Python",
      rating: "4.6/5",
    },
    {
      name: "Learning Python",
      rating: "4.2/5",
    },
    {
      name: "Python for Everybody",
      rating: "4.6/5",
    },
  ],

  fiction: [
    {
      name: "How To Be Dead",
      rating: "5/5",
    },
    {
      name: "The Watcher",
      rating: "5/5",
    },
    {
      name: "Turkey Shoot",
      rating: "5/5",
    },
    {
      name: "Black Irish Blues",
      rating: "5/5",
    },
  ],
  business: [
    {
      name: "Zero to One",
      rating: "4.1/5",
    },
    {
      name: "How to Win Friends and Influence People ",
      rating: "4.2/5",
    },
    {
      name: "Rich Dad, Poor Dad",
      rating: "4.1/5",
    },
    {
      name: "How to Win Friends & Influence People",
      rating: "4/5",
    },
  ],
  travel: [
    {
      name: "On the Road,",
      rating: "4/5",
    },
    {
      name: "Unlikely Destinations: The LP Story",
      rating: "3.8/5",
    },
    {
      name: "The The Lost City of Z",
      rating: "4.5/5",
    },
    {
      name: "The Beach",
      rating: "4/5",
    },
  ],
};

var knownBooks = Object.keys(booksLibrary);

function App() {
  var [books, setBooks] = useState("Python");

  function javascriptBooksHandler(bookName) {
    setBooks(bookName);
  }

  return (
    <div className="App">
      <h1>📚 Goodbooks</h1>
      <small>Checkout my favourite books. Select a genre to get started!</small>
      <br />
      <div>
        {knownBooks.map(function (bookName) {
          return (
            <button
              className="btnClass"
              onClick={() => javascriptBooksHandler(bookName)}
            >
              {bookName}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksLibrary[books].map(function (book) {
            return (
              <li className="listClass">
                <div style={{ fontSize: "larger" }}>{book.name}</div>
                <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;