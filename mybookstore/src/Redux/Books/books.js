// books.js

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const setBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const getBooks = () => async (dispatch) =>
  fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7JOGEEtAzU8exzAwyneu/books'
  )
    .then((response) => response.json())
    .then((data) => {
      const obj = Object.entries(data);
      const books = obj.map(([item_id, value]) => {
        const [book] = value;
        return { ...book, item_id };
      });
      dispatch(setBooks(books));
    });

export const addBookApi = (payload) => async (dispatch) =>
  fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7JOGEEtAzU8exzAwyneu/books',
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; Charset=UTF-8',
      },
    }
  )
    .then((response) => response.ok)
    .then((data) => {
      if (data) {
        dispatch(addBook(payload));
      }
    });

export const deleteBook = (id) => async (dispatch) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7JOGEEtAzU8exzAwyneu/books/${id}`,
    {
      method: 'DELETE',
    }
  ).then((response) => response.text());
  dispatch(removeBook(id));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return state.concat(action.payload);

    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
