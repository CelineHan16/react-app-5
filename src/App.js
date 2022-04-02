import Paragraph from "./components/Paragraph/Paragraph";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Alert from "./components/Alert/Alert";


function App() {
  const example1 = ["apple", "red", "big"];
  const example2 = ["toyota", "camry", "black", "expensive"];

  const example3 = { name: "apple", color: "red", size: "big" };
  const example4 = { make: "toyota", modal: "camry", carColor: "black", price: "expensive" };

  // const [name, color, size] = example1;
  // const [make, modal, carColor, price] = example2;

  const { name, color, size } = example3;
  const { make, modal, carColor, price } = example4;
  //return
  // This apple {name} is {color} and {size}. <br />
  // This {make} {modal} is {price} and {carColor}.

  return (
    <div className="App">
      <Paragraph size="20px" color="red">Hello world</Paragraph>
      <ProgressBar progress={50} color="orange" />

      <Alert success>A simple success alert!</Alert>
      <Alert danger>A simple danger alert!</Alert>
      <Alert secondary>A simple secondary alert!</Alert>
      <Alert primary>A simple primary alert!</Alert>
      <Alert warning>A simple warning alert!</Alert>
      <Alert info>A simple info alert!</Alert>
      <Alert light>A simple light alert!</Alert>
      <Alert dark>A simple dark alert!</Alert>
    </div>
  );
}

export default App;
