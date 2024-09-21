import { useState } from "react";
import Output from "./output";
import Form from "./form";

function Content() {
  const [filled, setFilled] = useState(false);

  return filled === false ? <Form /> : <Output />;
}

export default Content;
