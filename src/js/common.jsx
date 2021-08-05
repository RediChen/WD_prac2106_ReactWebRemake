import React from "react";
import Logo from "./logo"

function Hbger(props) {
    return (
        <div id="nav-toggle" onClick={props.onClick}>
            <div id="nav-hbg"></div>
        </div>
    );
}
function NavLink(props) {
    return (
        <button className="nav-link"
            onClick={props.onClick}>
            {props.text}
        </button>
    )
}
class Nav extends React.Component {
    // 建構子
    constructor(props) {
        super(props);
        this.state = {
            parList: [
                // ctt 顯示文字，s2-target 目標id，s2-offset 座標修正
                { ctt: "關於心晴", s2_target: "intro", s2_offset: "-100", },
                { ctt: "醫療團隊", s2_target: "team", s2_offset: "-75", },
                { ctt: "治療項目", s2_target: "care", s2_offset: "-100", },
                { ctt: "門診時間", s2_target: "time", s2_offset: "-790", },
                { ctt: "交通方式", s2_target: "footer", s2_offset: "-1130", },
                { ctt: "聯絡我們", s2_target: "footer", s2_offset: "0", },
            ],
            isOpen: true,
        }
    }
    // 函數集  auxilary methods
    handleClick(i) {
        //! 施工中
    }
    // 函數集  render methods
    renderHbger() {
        return (
            <Hbger />
        );
    }
    renderA(i) {
        return (
            <NavLink
                index={i}
                onClick={this.handleClick(i)}
                text={this.state.parList[i].ctt}
            >
            </NavLink>
        )
    }
    renderAs(start, end) {
        const pack = [];
        for (let i = start; i <= end; i++) {
            pack.push(this.renderA(i));
        }
        return (pack);
    }
    // 渲染
    render() {
        return (
            <nav>
                {this.renderAs(0, 2)}
                <Logo size="64" />
                {this.renderAs(3, 5)}
            </nav>
        );
    }
}
export default Nav;