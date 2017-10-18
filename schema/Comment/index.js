const caseinsensitiveIncludes = (bigstring, substring) =>
  bigstring.toLowerCase().includes(substring.toLowerCase());

const inMemoryComments = [
  {
    CommenterName: "swyx",
    Comment:
      "Hello, this is a default comment from the makers of GraphQLofThrones!",
    Timestamp: "Wed Oct 18 2017 11:43:29 GMT-0400 (EDT)"
  }
];
const CommentResolver = (_, { Id }) => {
  if (Id)
    return inMemoryComments.find(x =>
      caseinsensitiveIncludes(x.Comment, SearchString)
    );
};
const CommentsResolver = (_, { SearchString }) => {
  if (SearchString)
    return inMemoryComments.filter(x =>
      caseinsensitiveIncludes(x.Comment, SearchString)
    );
  return inMemoryComments;
};
const CommentType = `
# in-memory comments just for users to mess around with
type Comment {
  Id: ID!
  CommenterName: String
  Comment: String
  Timestamp: String
}
`;
const CommentMutations = (_, { comment, CommenterName }) => {
  if (!comment) throw new Error("No Comment supplied");
  const newComment = {
    Comment: comment,
    CommenterName: CommenterName || "Anonymous",
    Timestamp: "" + new Date()
  };
  inMemoryComments.push(newComment);
  return newComment;
};

module.exports = {
  CommentResolver,
  CommentsResolver,
  CommentMutations,
  CommentType
};
