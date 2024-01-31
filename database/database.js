const books = [
    {
      ISBN: "12345Book",
      title: "Getting started with MERN",
      pubDate: "2021-11-25",
      language: "english",
      numPage: 250,
      author: [1,2],
      publications: [1],
      category: ["tech", "programming", "education"]
    }
  ];
  
  const authors = [
    {
      id: 1,
      Name: "jeff",
      books: ["12345Book", "mybook"]
    },
    {
      id: 2,
      Name: "elon",
      books: ["12345Book"]
    }
  ];
  
  const publication = [
    {
      Id: 1,
      name: "Writex",
      books: ["12345Book"]
    },
    {
      Id:2,
      name: "Navneet",
      books: ["mybook"]
    }
  ];
  
  module.exports = {books, authors, publication};
  
  //mongoose -> Validation