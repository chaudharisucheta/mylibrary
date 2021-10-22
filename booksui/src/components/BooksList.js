import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apicall from "../services/apicall";
function BooksList() {
  const [booksList, setBooks] = useState([]);
  useEffect(() => {
    getBooksList();
  }, []);

  const getBooksList = async () => {
    let response = await apicall.get("/books");
    // console.log(response.data)

    setBooks(response.data);
    console.log(booksList);
  };

  const deleteBook = async (id) => {
    await apicall.delete(`/books/${id}`);
    getBooksList();
  };
  return (
    <div className="container mt-5">
      <div className="text-end mb-3 mt-5">
        <Link to="/addbook" className="btn btn-outline-dark">
          Add Book
        </Link>
      </div>
      <h4 className="text-center fs-2">Books List</h4>
      <table className="table table-dark">
        <thead>
          <tr className="">
            <th>Sr.No</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book, id) => (
            <tr key={id} className="">
              <td>{book.id}</td>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.rating}</td>
              <td className="d-flex justify-content-around">
                <Link
                  to={`/editbook/${book.id}`}
                  //className="btn btn-outline-light"
                >
                  <i
                    className="far fa-edit"
                    style={{ color: "white", fontSize: "20px" }}
                  ></i>
                </Link>
                <button
                  className="btn btn-dark mr-0"
                  onClick={() => deleteBook(book.id)}
                >
                  <i
                    className="far fa-trash-alt"
                    style={{
                      color: "white",
                      fontSize: "20px",
                    }}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
