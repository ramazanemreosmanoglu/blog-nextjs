// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const EXAMPLE_RESPONSE = { // TODO: Remove it in production
  "posts": [
    {
      "id": 1,
      "title": "Why everyone should choose freedom?",
      "url": "/why-everyone-should-choose-freedom",
    },

    {
      "id": 2,
      "title": "Freedom, in our minds",
      "url": "/freedom-in-our-minds",
    },

    {
      "id": 3,
      "title": "FSF Empowers people to solve problems of today",
      "url": "/fsf-empowers-people-to-solve-problems-of-today",
    },
  ]
}

export default (req, res) => {
  res.status(200).json(EXAMPLE_RESPONSE); // Just for testing
}