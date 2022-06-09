# React with Context

### Setup

1. cd into the starter code and `npm i` to make sure we grab the dependencies
1. open everything in your text editor
1. run `npm start` in your terminal to get the app running

### Adding Context to our app

1. `mkdir src/contexts`
1. `touch src/contexts/BookContext.js`
1. In our new BookContext.js lets do a bit of setup before we get into the meat of context:

```js
import React, { useState, createContext } from 'react'

export const BookProvider = () => {}
```

1. Lets create our state in our new context file:

```js
import React, { useState, createContext } from 'react'

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: 'Pragmatic Programmer',
      price: 25,
      id: 47139,
    },
    {
      title: 'Eloquent JS',
      price: 20,
      id: 69135,
    },
    {
      title: 'Cracking the Coding Interview',
      price: 30,
      id: 97365,
    },
  ])
}
```

1. Next lets add our createContext(a function that we will be able to pull into other components to use the provider) and our provider(this will quite literally provide information to our other components) this goes below the closing curly brace for the component:

```js
export const BookContext = createContext()
```

AND (this goes in the component at the bottom)

```js
return <BookContext.Provider></BookContext.Provider>
```

1. To be able to add our provider anywhere we may need it we need to provide some information to the Provider we will add in props.children so that anything we wrap in the prodiver can get the information from the provider:

```js
return <BookContext.Provider>{props.children}</BookContext.Provider>
```

1. In our BookContext.js lets pass in our books and function to the provider (value here is a keyword that the provider is looking for to be able to pass information to components):

```js
<BookContext.Provider value={[books, setBooks]}>
  {props.children}
</BookContext.Provider>
```

1. Next lets create a Book.js and make a simple component:

```js
import {useContext} from 'react'

const Book = () => {
  return (
    <div>
      <h1>Book</h1>
    </div>
  )
}

export default Book
```

1. Render Book.js in App.js:
```js
import Book from './components/Book'

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Book/>
    </>
  )
}

export default App
```



1. Lets wrap our Book component in App.js in our provider (first we need to import it):

```js
import Book from './components/Book'
import { BookProvider } from './contexts/BookContext'
const App = () => {
  return (
    <BookProvider>
      <>
        <h1>Books</h1>
        <Book />
      </>
    </BookProvider>
  )
}

export default App
```

1. The last thing we need to get this to work is to add our useContext to our Book.js:

```js
import { BookContext } from '../contexts/BookContext'
```

AND

```js
const [books, setBooks] = useContext(BookContext)
```

1. Lastly for read, lets map over our state pulled in from context to display all books:

```js
return (
    <div>
      {books.map((book) => {
        return (
          <>
            <h2>Book Name: {book.title}</h2>
            <h3>Book Price: ${book.price}</h3>
          </>
        )
      })}

    </div>
  )
```

### Add New Book

1. `touch src/components/AddBook.js`
1. Set up our basic component for adding a book:

```js
import React, { useState } from 'react'

const AddBook = () => {
  let newBook = { title: '', price: '' }
  const [book, setBook] = useState(newBook)

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value })
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="number"
        name="price"
        onChange={handleChange}
        placeholder="price"
      />
      <input type="submit" />
    </form>
  )
}

export default AddBook
```

1. Lets import AddBook into Book:
 ```js
import AddBook from './AddBook'
```

1. Next we need to give AddBook access to books and setBooks from the provider:

```js
import React, { useState, useContext } from 'react'
import {BookContext} from '../contexts/BookContext'
```

AND

```js
const [books, setBooks] = useContext(BookContext)
```

1. Next lets create our function to add a book:

```js
const addBook = (e) => {
  e.preventDefault()
  setBooks([...books, book])
}
```

1. Lastly for add lets attach our addBook function onSubmit of the form:

```js
<form onSubmit={addBook}>
```

### Delete

1. First lets write our handleDelete in Book.js:

```js
const handleDelete = (event, id) => {
    setBooks(
      books.filter(book => book.id !== id)
    )
  }
```

1. Next lets add a button and attach the function onClick with an anonymous function so that we can pass in the event and id:

```js
<button onClick={(event)=>{handleDelete(event, book.id)}}>X</button>
```

### Update

1. Our EditBook is going to be almost exactly the same as our AddBook (we have to pass book into EditBook in Book to grab the prev values the way we have this set up):

```js
import React, { useState, useContext } from 'react'
import {BookContext} from '../contexts/BookContext'

const EditBook = (props) => {
  let newBook = {...props.book}
  const [book, setBook] = useState(newBook)
  const [books, setBooks] = useContext(BookContext)

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value })
  }

  const editBook = (e) => {
    e.preventDefault()
    setBooks(
      books.map((x) => {
        return x.id !== book.id ? x : book
      })
    )
  }

  return (
    <form onSubmit={editBook}>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="number"
        name="price"
        onChange={handleChange}
        placeholder="price"
      />
      <input type="submit" />
    </form>
  )
}

export default EditBook
```
