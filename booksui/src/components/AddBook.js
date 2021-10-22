import React, { useState } from "react";
import apicall from "../services/apicall";
import { useHistory } from "react-router";
function AddBook() {
  let history = useHistory();
  const [newBook, setBook] = useState({
    bookName: "",
    authorName: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    setBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const saveBook = async () => {
    let res = await apicall.post("/books", newBook);
    // if (res) {
    //   setBook({
    //     bookName: "",
    //     authorName: "",
    //     rating: "",
    //   });
    // }
    console.log(res);
    history.push("/");
  };
  return (
    <div className="container">
      <h4 className="text-center fs-2">Add a new book</h4>

      <div className="mb-3">
        <label for="bookname" className="form-label">
          Book Name
        </label>
        <input
          type="text"
          className="form-control"
          name="bookName"
          value={newBook.bookName}
          id="bookname"
          placeholder="Enter Book Name"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label for="authorname" className="form-label">
          Author Name
        </label>
        <input
          type="text"
          className="form-control"
          name="authorName"
          value={newBook.authorName}
          id="authorname"
          placeholder="Enter author Name"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label for="rating" className="form-label">
          Rating
        </label>
        <input
          type="text"
          className="form-control"
          name="rating"
          value={newBook.rating}
          id="rating"
          placeholder="Enter Book rating"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-dark" onClick={saveBook}>
          Save Book
        </button>
      </div>
    </div>
  );
}

export default AddBook;
