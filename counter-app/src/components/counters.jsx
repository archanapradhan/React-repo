import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //for destructuring define all the properties as const and set with this.props
    const { onDelete, onReset, onIncrement, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            /* if we keep adding properties of Counter this way the code will get crowded  
           So, we should just pass the counter object, now the counter component should be updated as well
           value={counter.value}
            id={counter.id}*/
          />
        ))}
      </div>
    );
  }
}

export default Counters;
