import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct intial color", () => {
  render(<App />);
  const clrButton = screen.getByRole("button", { name: "Change to blue" });
  expect(clrButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(clrButton);
  expect(clrButton).toHaveStyle({ backgroundColor: "blue" });
  expect(clrButton.textContent).toBe("Change to red");
});
test("button status", () => {
  render(<App />);
  const clrButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");
  expect(clrButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();
  fireEvent.click(checkBox);
  expect(clrButton).toBeDisabled();
  expect(clrButton).toHaveStyle({ backgroundColor: "grey" });
  fireEvent.click(checkBox);
  expect(clrButton).toBeEnabled();
  expect(clrButton).toHaveStyle({ backgroundColor: "red" });
});
// test('button turns sblue when clicked ',()=>{
//   render(<App/>)
//   const clrButton=screen.getByRole('button',{name:'Change to blue'})

//   expect(clrButton).toHaveStyle({backgroundColor:'blue'})
// })
