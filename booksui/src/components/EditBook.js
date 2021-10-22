import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import apicall from "../services/apicall";
function EditBook() {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  const [updateBook, setBook] = useState({
    bookName: "",
    authorName: "",
    rating: "",
  });

  const loadBook = async () => {
    let response = await apicall.get(`/books/${id}`);
    console.log(response.data);
    setBook(response.data);
    console.log(updateBook);
  };
  useEffect(() => {
    loadBook();
  }, []);

  const handleUpdate = (e) => {
    setBook({ ...updateBook, [e.target.name]: e.target.value });
  };

  const update = async () => {
    let res = await apicall.put(`/books/${id}`, updateBook);
    history.push("/");
  };
  return (
    <div className="container">
      <h4 className="text-center fs-2">Edit book</h4>
      <div className="mb-3">
        <label for="bookname" className="form-label">
          Book Name
        </label>
        <input
          type="text"
          className="form-control"
          name="bookName"
          value={updateBook.bookName}
          id="bookname"
          placeholder="Enter Book Name"
          onChange={handleUpdate}
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
          value={updateBook.authorName}
          id="authorname"
          placeholder="Enter author Name"
          onChange={handleUpdate}
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
          value={updateBook.rating}
          id="rating"
          placeholder="Enter Book rating"
          onChange={handleUpdate}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-dark" onClick={update}>
          Save Book
        </button>
      </div>
    </div>
  );
}

export default EditBook;
