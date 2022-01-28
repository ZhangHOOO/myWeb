import { observable, action } from "mobx";

class Store {
  @observable url = false;

  @action
  setPageLoading(value) {
    this.url = value;
  }
}

export default Store;
