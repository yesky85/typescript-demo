import React, { useState } from "react";
import Number from "./Number";
import { Input, Form } from "./Input";

interface IState {
  count: number;
  value: string;
}

class App extends React.Component<{}, IState> {
  state = {
    count: 0,
    value: "",
  };

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  render() {
    const { count, value } = this.state;
    return (
      <div>
        <Number count={count} />
        <button onClick={() => this.setState({ count: count + 1 })}>UP</button>
        <button onClick={() => this.setState({ count: count - 1 })}>DN</button>

        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={value} onChange={this.onChange} />
        </Form>
      </div>
    );
  }
}

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//       <Number count={count} />
//       <button onClick={() => setCount(count + 1)}>UP</button>
//       <button onClick={() => setCount(count - 1)}>DN</button>
//     </div>
//   );
// };

export default App;
