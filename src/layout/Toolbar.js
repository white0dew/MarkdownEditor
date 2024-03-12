import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import classnames from "classnames";

import Bold from "../component/Toolbar/Bold";
import Code from "../component/Toolbar/Code";
import Del from "../component/Toolbar/Del";
import Italic from "../component/Toolbar/Italic";
import Link from "../component/Toolbar/Link";
import Table from "../component/Toolbar/Table";
import Image from "../component/Toolbar/Image";
import Format from "../component/Toolbar/Format";
import LinkToFoot from "../component/Toolbar/LinkToFoot";
import InlineCode from "../component/Toolbar/InlineCode";
import Theme from "../component/MenuLeft/Theme";
import CodeTheme from "../component/MenuLeft/CodeTheme";
import "./Navbar.css";

@inject("view")
@observer
class Toolbar extends Component {
  render() {
    const { token } = this.props;
    const niceNavbarClass = classnames({
      "nice-navbar": true,
      "nice-toolbar": true
    });
    return (
      <div className={niceNavbarClass}>
        <div className="nice-left-nav">
          <Del />
          <Bold />
          <Italic />
          <Code />
          <InlineCode />
          <Link />
          <Table />
          <Image />
          <LinkToFoot />
          <Format />
        </div>
        <div className="nice-right-nav">
          <Theme token={token} />
          <CodeTheme />
          {/* 点击跳转网址 */}
          <a
            href="https://tool.chinaz.com/tools/onlinecolor.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-1">
              <i className="iconfont icon-github" />
              <span className="nice-title">采色板</span>
            </div>
          </a>
          {/* 点击跳转网址,无颜色 */}
          <a
            href="https://markdown.com.cn/basic-syntax/code.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-1">
              <i className="iconfont icon-github" />
              <span className="nice-title">MD语法</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Toolbar;
