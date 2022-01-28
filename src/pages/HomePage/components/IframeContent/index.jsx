import React, { Component } from "react";

class IframeContent extends Component {
  render() {
    return (
      <>
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="100%"
          src="https://ant.design/components/overview-cn/"
        ></iframe>
      </>
    );
  }
}

export default IframeContent;
