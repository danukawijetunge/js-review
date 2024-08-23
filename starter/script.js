// const data = [
//   {
//     id: 1,
//     title: "The Lord of the Rings",
//     publicationDate: "1954-07-29",
//     author: "J. R. R. Tolkien",
//     genres: [
//       "fantasy",
//       "high-fantasy",
//       "adventure",
//       "fiction",
//       "novels",
//       "literature",
//     ],
//     hasMovieAdaptation: true,
//     pages: 1216,
//     translations: {
//       spanish: "El señor de los anillos",
//       chinese: "魔戒",
//       french: "Le Seigneur des anneaux",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.52,
//         ratingsCount: 630994,
//         reviewsCount: 13417,
//       },
//       librarything: {
//         rating: 4.53,
//         ratingsCount: 47166,
//         reviewsCount: 452,
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "The Cyberiad",
//     publicationDate: "1965-01-01",
//     author: "Stanislaw Lem",
//     genres: [
//       "science fiction",
//       "humor",
//       "speculative fiction",
//       "short stories",
//       "fantasy",
//     ],
//     hasMovieAdaptation: false,
//     pages: 295,
//     translations: {},
//     reviews: {
//       goodreads: {
//         rating: 4.16,
//         ratingsCount: 11663,
//         reviewsCount: 812,
//       },
//       librarything: {
//         rating: 4.13,
//         ratingsCount: 2434,
//         reviewsCount: 0,
//       },
//     },
//   },
//   {
//     id: 3,
//     title: "Dune",
//     publicationDate: "1965-01-01",
//     author: "Frank Herbert",
//     genres: ["science fiction", "novel", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 658,
//     translations: {
//       spanish: "",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.25,
//         ratingsCount: 1142893,
//         reviewsCount: 49701,
//       },
//     },
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Philosopher's Stone",
//     publicationDate: "1997-06-26",
//     author: "J. K. Rowling",
//     genres: ["fantasy", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 223,
//     translations: {
//       spanish: "Harry Potter y la piedra filosofal",
//       korean: "해리 포터와 마법사의 돌",
//       bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//       portuguese: "Harry Potter e a Pedra Filosofal",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.47,
//         ratingsCount: 8910059,
//         reviewsCount: 140625,
//       },
//       librarything: {
//         rating: 4.29,
//         ratingsCount: 120941,
//         reviewsCount: 1960,
//       },
//     },
//   },
//   {
//     id: 5,
//     title: "A Game of Thrones",
//     publicationDate: "1996-08-01",
//     author: "George R. R. Martin",
//     genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//     hasMovieAdaptation: true,
//     pages: 835,
//     translations: {
//       korean: "왕좌의 게임",
//       polish: "Gra o tron",
//       portuguese: "A Guerra dos Tronos",
//       spanish: "Juego de tronos",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 2295233,
//         reviewsCount: 59058,
//       },
//       librarything: {
//         rating: 4.36,
//         ratingsCount: 38358,
//         reviewsCount: 1095,
//       },
//     },
//   },
// ];

// function getBooks() {
//   return data;
// }

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// // destructuring
// const book = getBook(3);

// const { title, publicationDate, reviews } = book;

// console.log(`${title} , ${publicationDate}`);

// const { goodreads, librarything } = reviews;

// console.log(goodreads);

// const { rating, ratingsCount, reviewsCount } = goodreads;

// console.log(reviewsCount, ratingsCount, rating);

// const { genres } = book;

// const [firstEle, secondEle, ...other] = genres;

// console.log(other);

// const newGenre = [...genres, "dddd"];

// const updateBook = { ...book, moviePublicationDate: "08-03-2012" };
// updateBook;

// const getYear = (str) => str.split("-")[0];

// const year = getYear("1965-12-22");

// year;

// console.log(false && "Some thing");

// // falsy values : 0, false, undefined

// console.log("testtesttests" | "test");

// const ttt = 2 | "test" ? "test" : "ee";

// console.log(ttt);

// // console.log(book.reviews.librarything.reviewsCount);

// // console.log(book.reviews.librarything.reviewsCount ?? "No data");

// // reviews: {
// //   goodreads: {
// //     rating: 4.44,
// //     ratingsCount: 2295233,
// //     reviewsCount: 59058,
// //   },
// //   librarything: {
// //     rating: 4.36,
// //     ratingsCount: 38358,
// //     reviewsCount: 1095,
// //   },

// const getTotalReviewCount = (book) => {
//   let librarythingCount = book?.reviews?.librarything?.reviewsCount ?? 0;
//   let goodReviewCount = book?.reviews?.goodreads?.reviewsCount ?? 0;

//   return librarythingCount + goodReviewCount;
// };

// console.log(getTotalReviewCount(book));

// let books = getBooks();

// let bookTitle = books.map((book) => book.title);

// console.log(books);

// console.log(bookTitle);

// const numbers = [1, 2, 3, 4];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// const adventureBook = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);

// console.log(adventureBook);

// // find all the pages that we need read

// const pageCount = books.reduce((acc, book) => {
//   console.log(acc, book.pages);

//   return acc + book.pages;
// }, 0);

// console.log(pageCount);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((data) => data.json())
//   .then((json) => console.log(json));

// console.log("danuka");

async function getTodos() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    res = await res.json();
    console.log(res);
    console.log("inside the getTodos");
  } catch (error) {
    console.log(error);
  }
}

getTodos();
