import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import store from "../utils/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

export default AppLayout;
