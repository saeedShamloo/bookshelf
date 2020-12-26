/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { Input, FormGroup, Spinner } from "./lib";
import { FaSearch } from "react-icons/fa";
import { useAsync } from "utils/hooks";

// const endpoint = `https://bookshelf.jk/api/books`;

const Discover: React.FunctionComponent = () => {
  const [book, setBook] = React.useState("");
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();

  React.useEffect(() => {
    if (!book) return;
    run(
      window
        .fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
        .then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
    );
  }, [book, run]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      css={{
        width: "90vw",
        margin: "2em auto",
        maxWidth: 920,
        position: "relative"
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            name="book"
            id="book"
            type="text"
            value={book}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBook(e.target.value)
            }
          />
          <FaSearch css={{ position: "absolute", right: 10, top: 13 }} />
        </FormGroup>
      </form>
      {isLoading && <Spinner />}
      {isError && <p>{error.toString()}</p>}
      {isSuccess && (
        <ul>
          {data.map((book: any) => {
            return (
              <li key={book.id}>
                <h4>{book.name}</h4>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Discover;
