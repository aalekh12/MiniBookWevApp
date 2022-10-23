import logo from './logo.svg';
import './App.css';
import { books } from './books'
import Book from './Book'

function App() {

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );

}

export default App;
