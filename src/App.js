

function App() {
  const example1 = ["apple", "red", "big"];
  const example2 = ["toyota", "camry", "black", "expensive"];

  const example3 = { name: "apple", color: "red", size: "big" };
  const example4 = { make: "toyota", modal: "camry", carColor: "black", price: "expensive" };

  // const [name, color, size] = example1;
  // const [make, modal, carColor, price] = example2;

  const { name, color, size } = example3;
  const { make, modal, carColor, price } = example4;

  return (
    <div className="App">
      This apple {name} is {color} and {size}. <br />
      This {make} {modal} is {price} and {carColor}.
    </div>
  );
}

export default App;
