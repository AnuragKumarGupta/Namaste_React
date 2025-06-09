import { render, fireEvent, screen } from "@testing-library/react";
import MOCK_RESMENU from "../Mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";

//create fake fetch api call for jest
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RESMENU),
  })
);

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended (15)");
});
