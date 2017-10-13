const booksdata = require("./books.json");

// const AllBooksResolver = () => booksdata;
const AllBooksResolver = (_, { Name }) => {
  if (Name)
    return filter(booksdata, book => caseinsensitiveIncludes(book.Name, Name));
  return booksdata;
};

const caseinsensitiveIncludes = (bigstring, substring) =>
  bigstring.toLowerCase().includes(substring.toLowerCase());

const BookResolver = (_, { Id }) => {
  if (Id) return booksdata[Id - 1];
  return;
};

// resolve inbound from others
// const Book = {
//   House: (house) =>
// }

const BookType = `
  type Book {
    Id: ID!
    Name: String
    ISBN: String
    Authors: [String]
    NumberOfPages: Int
    Publisher: String
    MediaType: String
    Country: String
    ReleaseDate: String
    PrecededById: Int
    FollowedBy: Int
  }
`;

module.exports = { BookType, AllBooksResolver, BookResolver };
