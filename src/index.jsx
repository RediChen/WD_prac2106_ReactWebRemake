// 套件
import React from "react";
import ReactDOM from "react-dom";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// css & js
import { dataTeam } from "./dataTeam.jsx"
import './css/style.css';
// import './sass/style.sass' ;
//// 待處理 React 搭配的 sass 套件設定
// function RwdPar() {
//     //{PC, Tablet, Mob} -> {3, 2, 1}
//     const isPC = useMediaQuery('(min-width:1025px)'),
//     isMob = useMediaQuery('(max-width:676px)') ;
//     if (isPC) return 3 ;
//     if (isMob) return 1 ;
//     else return 2 ;
// }
//* Nav, Hbger & tothetop */
function Logo(props) {
    //input e.g. : size=64 (in px)
    const address = "./images/" + props.size + "px_woFrame.png";
    return (
        <img className={`logo logo-${props.size}`} src={address}
            alt="心晴診所 Sunshine Clinic logo" />
    );
}
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
    // 函數集 methods
    renderLogo() {
        return (
            <Logo size="64" />
        );
    }
    renderHbger() {
        return (
            <Hbger />
        );
    }
    renderA(i) {
        return (
            <NavLink
                index={i}
                onClick={this.handleClick}
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
                {this.renderLogo()}
                {this.renderAs(3, 5)}
            </nav>
        );
    }
}
//* 首頁畫面 */
function HomePage() {
    return (
        <div id="homepage">
            <div id="intro-disk"></div>
            <h1>心晴診所</h1>
            <h2 className="title-2">值得您信賴的專業團隊</h2>
        </div>
    );
}

//* 團隊畫面 */
// function handleData() {

// }
// 按鈕面板
function TeamBtn(props) {
    const i = props.index,
        name = [];
    name.push(
        dataTeam[i].name.slice(0, 3),
        <br />,
        dataTeam[i].name.slice(3)
    );
    return (
        <div className="team-btn" onClick={props.onClick}>
            <h2>{name}</h2>
        </div>
    );
}
// 資訊面板
// function CardTitle(props) {
//     return (
//         <>
//             <h3>{prop.text}</h3>
//             <div className="hr-2">
//                 <div></div>
//                 <hr />
//             </div>
//         </>
//     );
// }
// function Card(props) {

// }
class TeamInfo extends React.Component {
    render() {
        return (
            <div>
                {/* {renderCards()} */}
            </div>
        );
    }
}
// 主元件
class TeamPage extends React.Component {
    renderTeamBtns() {
        const pack = [];
        for (let i = 0; i < dataTeam.length; i++) {
            pack.push(
                <TeamBtn
                    index={i}
                    onClick={() => this.handleBtn(i)} />
            );
        }
        return (pack);
    }
    handleBtn(i) {
        console.log("The " + i + "th is not handled yet.");
    }
    render() {
        return (
            <section id="teampage">
                <header>
                    <hr className="hr-1" />
                    <h1 className="title-1">醫療團隊</h1>
                </header>
                <div id="team-btn-box">
                    {this.renderTeamBtns()}
                </div>
            </section>
        );
    }
}
//* 最終組裝 */
class BigPicture extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <HomePage />
                <TeamPage />
            </>
        );
    }
}
//* 最終渲染區 */
ReactDOM.render(
    <BigPicture />,
    document.getElementById("root")
);