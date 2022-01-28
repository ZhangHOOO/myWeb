import { observable, action } from "mobx";

class RootStore {
  @observable url = false;

  @action
  setPageLoading(value) {
    this.url = value;
  }
}

export default RootStore;
