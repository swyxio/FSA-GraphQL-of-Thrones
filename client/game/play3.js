const answer = {
  HedgeKnight1: {
    ISBN: "978-0976401100"
  },
  HedgeKnight2: {
    ISBN: "978-0785126508"
  }
};

module.exports = {
  title: "PLAY: Maybe I should Draw?",
  realsubTitle: "Learn to alias query results",
  character: "Stannis",
  instructions: `Practice what you learned last lesson. Find Cersei and Jaime Lannister's Id's in **allCharacters**, then use those Id's in two parallel aliased **Character** requests. 
  
  Alias them as **Cersei** and **Jaime** respectively. The default fields will do: 
    - Id
    - Name
    - IsFemale
    - Culture
    - Born
    - Died

  If this feels repetitive, we will learn later how to take a shortcut with these _fragments_.
  
For more, check out: http://graphql.org/learn/queries/#aliases`,
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
