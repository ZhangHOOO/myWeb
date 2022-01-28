import React, { Component } from "react";
import { Card, Image, Row, Col, Typography } from "antd";
import sgjz from "../../../../static/images/sgjz.jpg";

const data = {
  title: "上古卷轴5",
  content: (
    <>
      在老滚里，扮演的将不是某个主角，扮演的就是自己。没有一款其它游戏能超越。
      <br />
      配乐优秀、剧情精致、自由度极高。
    </>
  ),
};

class GameList extends Component {
  render() {
    return (
      <>
        <Card title={data.title}>
          <Row>
            <Col span={8}>
              <Image width={320} src={sgjz} />
            </Col>
            <Col span={16}>
              <Typography>
                <blockquote>{data.content}</blockquote>
              </Typography>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default GameList;
