const answer = {
  Character: {
    Aliases: [
      "The Imp",
      "Halfman",
      "The boyman",
      "Giant of Lannister",
      "Lord Tywin's Doom",
      "Lord Tywin's Bane",
      "Yollo",
      "Hugor Hill",
      "No-Nose",
      "Freak",
      "Dwarf"
    ],
    Born: "In 273 AC, at Casterly Rock"
  }
};

module.exports = {
  title: "PLAY: Is that the bad man?",
  realsubTitle: "Pass an argument when making a query",
  character: "Lysa",
  instructions: `Another two-step query. Look up **allCharacters** by **Name** for Tyrion's Character Id, then request the **Aliases** and **Born** fields for this **Character**.

For more, check out: <http://graphql.org/learn/queries/#arguments>
`,
  story: `
  "Mummy… is that the bad man?"

"It is."

"He’s little."

"He’s Tyrion the Imp, of House Lannister. He killed your father. He murdered the Hand of the King!"

_Lysa Arryn stroked Sweetrobin's downy curls. In time he would learn to use GraphQL to ask these silly questions._

_Now, what were the Imp's other **Aliases** and when was he **Born**?_
`,
  answer: answer
};
