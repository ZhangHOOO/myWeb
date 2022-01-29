import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("homePage")
@observer
class IframeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: ["0-0"],
      searchValue: "",
      autoExpandParent: true,
    };
    // this.store = props.homePage;
  }
  get store() {
    const { homePage } = this.props;
    return homePage;
  }

  get url() {
    console.log("0");
    const { url } = this.store;
    return url;
  }

  render() {
    console.log("this.store.url", this.store);
    console.log("1", this.url);
    const { url } = this.store;
    return (
      <>
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="100%"
          src={url}
        ></iframe>
      </>
    );
  }
}

export default IframeContent;
