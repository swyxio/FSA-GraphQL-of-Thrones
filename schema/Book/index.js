const booksdata = require("./books.json");

const BookResolver = () => booksdata;

const Book = `
  type Book {
    Id: ID!
    Name: String
    IsFemale: Boolean
    Culture: String
    Titles: [String]
    Aliases: [String]
    Born: String
    Died: String
    Father: String
    Mother: String
    Spouse: String
    Children: [String]
    Allegiances: [String]
    Books: [Int]
    PovBooks: [String]
    PlayedBy: [String]
    TvSeries: [String]
  }
`;

module.exports = { Book, BookResolver };
