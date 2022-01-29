import { observable, action } from "mobx";

class Store {
  @observable url = "https://cn.vuejs.org/v2/guide/index.html";

  @action
  setUrl(value) {
    this.url = value;
  }
}

export default Store;
