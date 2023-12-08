import { books } from "./Books";
import { Book } from "./Book";

function App() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index}/>;
      })}
    </section>
  );
}

export default App;
