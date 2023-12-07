function App() {
  return (
    <section className="bookList">
      <Book />      
      <Book />      
      <Book />      
      <Book />      
    </section>
  );
}

const Book = () => {
  return (
    <article className="bookList">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="./images/book-1.jpg" alt="Interesting Facts For Curious Minds"/>;
};
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => {
  return <h4>Jordan Moore</h4>;
};

export default App;
