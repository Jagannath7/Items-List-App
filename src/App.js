import React from "react";
import { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Details from "./Details";
import odd from "./odd.png";
import even from "./even.gif";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [deleteQuery, setDeleteQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [item_number, setItemNumber] = useState();
  const [url, setURL] = useState("");

  const addItem = (event) => {
    event.preventDefault();

    if (!items.includes(input)) {
      setItems([...items, input]);
    } else {
      window.alert("Item already exits.");
    }

    setInput("");
  };

  const delete_item = (event) => {
    event.preventDefault();

    var idx = items.indexOf(deleteQuery);

    if (!items.includes(items[idx])) {
      window.alert("Requested item not present");
    }

    if (idx > -1) {
      items.splice(idx, 1);
    }
    setDeleteQuery("");
  };

  let search_url = "";

  const search = (x) => {
    var idx = items.indexOf(x);
    if (!items.includes(items[idx])) {
      search_url = "#";
    }
    search_url = `#${idx + 1}`;
  };

  useEffect(() => {
    if (items.length === 0) {
      setURL("");
    } else if (item_number % 2 !== 0) {
      setURL(odd);
    } else {
      setURL(even);
    }
  }, [item_number]);

  const displayDetails = (event) => {
    setItemNumber(parseInt(event.target.id));
    console.log(item_number);
  };

  return (
    <div className="App">
      <div class="buttons">
        <div class="add-items">
          <form class="add">
            <label for="add-item">
              <h2>Title of the item</h2>
            </label>

            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Item Title</InputLabel>
                <Input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>

              <Button
                disabled={!input}
                onClick={addItem}
                type="submit"
                variant="contained"
                color="primary"
              >
                Add Item
              </Button>
            </div>
          </form>
        </div>

        <div class="actions">
          <div class="jump">
            <form class="jumpto">
              <div>
                <FormControl>
                  <InputLabel htmlFor="my-input">Search</InputLabel>
                  <Input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    id="my-input"
                    aria-describedby="my-helper-text"
                  />
                </FormControl>

                <Button
                  disabled={!searchQuery}
                  onClick={search(searchQuery)}
                  href={search_url}
                  variant="contained"
                  color="primary"
                >
                  Jump
                </Button>
              </div>
            </form>
          </div>

          <div class="delete1">
            <form class="delete">
              <div>
                <FormControl>
                  <InputLabel htmlFor="my-input">Delete</InputLabel>
                  <Input
                    value={deleteQuery}
                    onChange={(event) => setDeleteQuery(event.target.value)}
                    id="my-input"
                    aria-describedby="my-helper-text"
                  />
                </FormControl>

                <Button
                  disabled={!deleteQuery}
                  onClick={delete_item}
                  variant="contained"
                  color="primary"
                >
                  Delete
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="items ">
        <div class="list ">
          {items.map((item) => (
            <div
              class="list-items "
              onClick={displayDetails}
              id={items.indexOf(item) + 1}
            >
              {item}
            </div>
          ))}
        </div>

        <Details list={items} item_number={item_number} url={url} />
      </div>
    </div>
  );
}

export default App;
