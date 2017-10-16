const { find, filter } = require("lodash");
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
  if (Id) return find(booksdata, { Id: Id });
  return;
};

// resolve inbound from others
const Book = {
  PrecededById: book => find(booksdata, { Id: book.PrecededById }),
  FollowedBy: book => find(booksdata, { Id: book.FollowedBy })
};

const BookType = `
  # Book data from API of Ice and Fire https://github.com/joakimskoog/AnApiOfIceAndFire
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
    PrecededById: Book
    FollowedBy: Book
  }
`;

module.exports = { Book, BookType, AllBooksResolver, BookResolver };
