// 套件
import React from "react";
import ReactDOM from "react-dom";

/* Nav, Hbger & tothetop */
import Nav from "./js/common.jsx";
/* 首頁頁面 */
import HomePage from "./js/homepage.jsx";
/* 簡介頁面 */
import IntroPage from "./js/intropage.jsx";
/* 團隊頁面 */
import TeamPage from "./js/teampage.jsx";
/* Footer */
import Footer from "./js/footer.jsx";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// css & js
import './css/style.css';
//// 待處理 React 搭配的 sass 套件設定
// function RwdPar() {
//     //{PC, Tablet, Mob} -> {3, 2, 1}
//     const isPC = useMediaQuery('(min-width:1025px)'),
//     isMob = useMediaQuery('(max-width:676px)') ;
//     if (isPC) return 3 ;
//     if (isMob) return 1 ;
//     else return 2 ;
// }

//* 最終組裝 */
class BigPicture extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <HomePage />
                <IntroPage />
                <TeamPage />
                <Footer />
            </>
        );
    }
}
//* 最終渲染區 */
ReactDOM.render(
    <BigPicture />,
    document.getElementById("root")
);