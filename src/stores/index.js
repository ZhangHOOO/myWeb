import { configure } from "mobx";
import HomePage from "../pages/HomePage/store";

configure({ enforceActions: "always" });

class RootStore {
  constructor() {
    this.homePage = new HomePage(this);
  }
}

export default new RootStore();
