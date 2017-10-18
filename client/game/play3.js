const answer = {
  Cersei: {
    Id: "238",
    Name: "Cersei Lannister",
    IsFemale: true,
    Culture: "Westerman",
    Born: "In 266 AC, at Casterly Rock",
    Died: ""
  },
  Jaime: {
    Id: "529",
    Name: "Jaime Lannister",
    IsFemale: false,
    Culture: "Westerlands",
    Born: "In 266 AC, at Casterly Rock",
    Died: ""
  }
};

module.exports = {
  title: "PLAY: Stannis's Claim",
  realsubTitle: "Learn to alias query results",
  character: "Stannis",
  characterpic:
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNzY0NzI0NF5BMl5BanBnXkFtZTcwNjA2NDk4OQ@@._V1._SX100_SY140_.jpg",
  mission:
    "Set up two **Character** queries for Cersei and Jaime Lannister with the default fields and alias the results as **Cersei** and **Jaime**. Careful about the spelling and order.",
  link: "http://graphql.org/learn/queries/#aliases",
  instructions: `Practice what you learned last lesson. Find Cersei and Jaime Lannister's Id's in **allCharacters**, then use those Id's in two parallel aliased **Character** requests. 
  
  Alias them as **Cersei** and **Jaime** respectively. The default fields will do: 

  - Id
  - Name
  - IsFemale
  - Culture
  - Born
  - Died

  If this feels repetitive, we will learn later how to take a shortcut with these _fragments_.
  `,
  story: `
“That my brother Robert left no trueborn heirs, the boy Joffrey, the boy Tommen, 
and the girl Myrcella being born of incest between Cersei Lannister and her brother Jaime Lannister. By right of birth…

”Jaime Lannister, the Kingslayer. Call him what he is."

“And her brother Jaime Lannister, the Kingslayer."

“By right of birth and blood, I do this day lay claim…"

”Make it Ser Jaime Lannister, the Kingslayer. Whatever else he is, the man’s still a knight."

“Ser Jaime Lannister, the Kingslayer. By right of birth and blood, I do this day lay claim to the Iron Throne of Westeros."

“Let all true men declare their loyalty. When Eddard Stark learned the truth, he told only me. I’ll not make the same mistake. Send copies of that letter to every corner of the realm, from the Arbor to the Wall. The time has come to choose. Let no man claim ignorance as an excuse."

_Stannis furrowed his eyebrows. The ignorance of Men could never be underestimated. Maybe he should attach a brief bio of **Cersei** and **Jaime**._
`,
  answer: answer
};
