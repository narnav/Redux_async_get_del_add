import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync, selectar, addAsync, delAsync } from "./app/mySlice";
function App() {
  const ar = useSelector(selectar);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    dispatch(getDataAsync());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Desc:
          <input onChange={(e) => setDesc(e.target.value)} />
          <br />
          Price:
          <input onChange={(e) => setPrice(e.target.value)} />
          <button
            onClick={() => dispatch(addAsync({ desc: desc, price: price }))}
          >
            Add
          </button>
        </div>
        {ar.length} - number of items in array
        {ar.map((user) => (
          <div>
            {user.desc} {user.price}
            <button onClick={() => dispatch(delAsync(user.id))}>Del</button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
