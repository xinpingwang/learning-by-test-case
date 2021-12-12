import { fireEvent, render } from "react-testing-library";
import { useState } from "react";

test("useState should word", () => {
  function Foo() {
    const [count, setCount] = useState(0);
    return (
      <>
        <p data-testid="count">{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click me
        </button>
      </>
    );
  }

  const { getByText, getByTestId } = render(<Foo />);
  expect(getByTestId("count").innerHTML).toEqual("0");
  fireEvent.click(getByText("click me"));
  expect(getByTestId("count").innerHTML).toEqual("1");
});
