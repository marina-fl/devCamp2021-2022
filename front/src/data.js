
let posts = [
        {
        id: 1,
        title:"CONGRATS",
        date: "2021-11-01",
        text: "Happy New year!"
      },
      {
        id: 2,
        title:"To be or not to be",
        date: "2021-12-01",
        text: "That is the question"
      },
      {
        id: 3,
        title:"SONG",
        date: "2022-11-01",
        text: "Hop-hey-lalaley"
      },
  ];
  
export function getPosts() {
    return posts;
  }
  
  export function getPost(id) {
    return posts.find(
      post => post.id === id
    );
  }