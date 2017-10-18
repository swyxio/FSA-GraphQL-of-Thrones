const answer = {
  allCharacters: [
    {
      Name: "Balon Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Aeron Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Asha Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        },
        {
          Name: "House Ironmaker",
          Region: "Iron Islands",
          CoatOfArms: "",
          Words: ""
        }
      ]
    },
    {
      Name: "Dagon Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Donel Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Euron Greyjoy",
      Allegiances: []
    },
    {
      Name: "Harlon Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Maron Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Quellon Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Quenton Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Robin Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Rodrik Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Theon Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Urrigon Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Vickon Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    },
    {
      Name: "Victarion Greyjoy",
      Allegiances: [
        {
          Name: "House Greyjoy of Pyke",
          Region: "Iron Islands",
          CoatOfArms: "Sable, a kraken Or",
          Words: "We Do Not Sow"
        }
      ]
    }
  ]
};

module.exports = {
  title: "PLAY: House Greyjoy",
  realsubTitle: "Define reusable query fragments",
  character: "Maester Luwin",
  characterpic:
    "https://images-na.ssl-images-amazon.com/images/M/MV5BYjk0MmZiNmUtMTljMy00MmY1LTg1ODgtY2FkMjczMjI4ZWQzXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg",
  mission:
    "Define a **fragment** 'HouseFields' on the **House** schema for **Name**, **Region**, **CoatOfArms** and **Words**. Use **HouseFields** inside another fragment 'CharFields' for **Name** and **Allegiances** on the **Character** schema. Then query **allCharacters** named **Greyjoy** for your **CharFields** fragment",
  link: "http://graphql.org/learn/queries/#fragments",
  customgraphiql: {
    custquery: `
# please edit the below example query/fragment to answer the question!
query {
  allCharacters {
    ...CharFields
  }
}
fragment CharFields on Character {
  Name
}
fragment HouseFields on House {
  Name
}
    `
  },
  instructions: `Yo dawg, we heard you like fragments, so we put a fragment in your fragment...

  A key feature of GraphQL is native recursion and nesting. Here your task is to set up two fragments, put one in the other, and make the final query. Make it happen!
  `,
  story: `
"I’ve yielded Winterfell to Theon."

"Louder. Say Prince Theon."

"I’ve yielded Winterfell to Prince Theon **Greyjoy**. All of you should do as he commands."

"My father has donned the ancient crown of Salt and Rock and declared himself King of the Iron Islands. He claims the North as well by right of conquest. You are all his subjects."

"Bugger that. I serve the Starks. If you think you can hold the North with it…"

"Shut up! If you serve me as loyally as you served Ned Stark, I will be as good to you as he ever was. Betray me, and you will wish you hadn’t."

"Maester Luwin, send a raven to Pyke informing my father of my victory here. And one to Deepwood Motte to my sister. Inform her that she’s to bring men to Winterfell."

"You are a maester of the Citadel, sworn to serve the Lord of Winterfell, are you not?"

"I am."

"I am the Lord of Winterfell as Bran just informed you."

"Send the ravens."

_Maester Luwin sighed internally. Another uppity Lord playing the Game of Thrones. Now who was in the little shit's family again and who was on who's side?_
  `,
  answer: answer
};
