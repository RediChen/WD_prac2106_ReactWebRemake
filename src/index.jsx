// 套件
import React, { useState } from "react";
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
    const address = "/favicon/" + props.size + "px_woFrame.png";
    return (
        <img className={`logo logo-${props.size}`} src={(address)}
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
    // 函數集  auxilary methods
    handleClick(i) {
        //! 施工中
    }
    // 函數集  render methods
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
                {this.renderLogo()}
                {this.renderAs(3, 5)}
            </nav>
        );
    }
}
//* 首頁頁面 */
function HomePage() {
    return (
        <div id="home-page">
            <div id="title-disk"></div>
            <h1>心晴診所</h1>
            <h2 className="title-2">值得您信賴的專業團隊</h2>
        </div>
    );
}
//* 簡介頁面 */
function IntroPage() {
    return (
        <section id="intro-page">
            <div data-aos="fade-up" data-aos-duration="1500">
                <h1 className="title-1">
                    <span className="intro-title">診</span>
                    <span className="intro-title">所</span>
                    <span className="intro-title">簡</span>
                    <span className="intro-title">介</span>
                </h1>
                <hr className="hr-1" />
                <p className="p-text">
                    現代人的工作壓力大，難免會有失眠、焦慮、憂鬱症…等等困擾。若因此而需要專業協助時，歡迎您到優質的桃園心晴診所就診。心晴診所環境溫馨舒適，由數位專業的醫師親自看診，並能夠提供適當的心理諮詢服務。盼望能夠有效的幫助您改善生活的品質。
                </p>
                <p className="p-text">我們的理想是設立一所舒適、親切、高品質的身心科診所。透過控制看診人數，以求更詳細的問診及評估，也希望創造個案較舒適的就診經驗。</p>
                <p className="p-text"><span>心晴診所</span>擁有優質的精神醫療專業團隊：</p>
                <ul className="p-text">
                    <li>總院長<u>林為文</u>醫師過去曾任三總精神部主任，並曾於美國約翰霍普金斯大學取得人類遺傳學之博士學位，現為心寧診所的院長。</li>
                    <li>院長<u>林晴玉</u>醫師於中國醫藥大學醫學系畢業後，至今在精神科專業領域服務長達二十四年，擁有豐富的臨床經驗。</li>
                </ul>
            </div>
        </section>
    )
}
//* 團隊頁面 */
// 按鈕面板
function TeamBtn(props) {
    const i = props.index;
    const name = [];
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
function CardTitle(nth) {
    const memberName = dataTeam[nth]["name"],
        memberImg = dataTeam[nth]["imgAddress"];
    return (
        <>
            <img src={memberImg} alt={memberName} title={memberName} />
            <h2>{memberName}</h2>
        </>
    );
}
function CardContent(nth) {
    const [
        memberDegree,
        memberExperience,
        memberMajor,
        memberSpecialty,
    ] = [[], [], [], []];
    const varMap = {
        "學歷": memberDegree,
        "經歷": memberExperience,
        "主治": memberMajor,
        "專長": memberSpecialty
    };
    const fourInOne = [];

    for (let key in varMap) {
        // step 1 : 有內容才渲染
        if (!dataTeam[nth][key]) continue;
        // step 2 : 將所有條目條列成 li
        for (let i in dataTeam[nth][key]) {
            varMap[key].push(
                <li>{dataTeam[nth][key][i]}</li>
            );
        }
        // step 3 : 將內容拼進上下文
        fourInOne.push(
            <div className="team-sub-card">
                <h3>{key}</h3>
                <div className="hr-2">
                    <div></div>
                    <hr />
                </div>
                <ul className="p-text">
                    {varMap[key]}
                </ul>
            </div>
        );
    }
    const memberRemind = dataTeam[nth]["醫師的叮嚀"];

    return (
        <div className="team-about">
            {fourInOne}
            <div className="team-sub-card">
                <h3>醫師的叮嚀</h3>
                <div className="hr-2">
                    <div></div>
                    <hr />
                </div>
                <p className="p-text">{memberRemind}</p>
            </div>
        </div>
    );
}

// 主元件
function TeamPage() {
    const [memberIndex, setMemberIndex] = useState(0);

    function renderTeamBtns() {
        const pack = [];
        for (let i = 0; i < dataTeam.length; i++) {
            pack.push(
                <TeamBtn
                    index={i}
                    onClick={() => setMemberIndex(i)}
                />
            );
        }
        return (pack);
    }
    return (
        <section id="team-page">
            <header>
                <hr className="hr-1" />
                <h1 className="title-1">醫療團隊</h1>
            </header>
            <div id="team-btn-box">
                {renderTeamBtns()}
            </div>
            <div id="team-card-wrap">
                <article className="team-card">
                    {CardTitle(memberIndex)}
                    {CardContent(memberIndex)}
                </article>
            </div>
        </section>
    );
}
function Footer(props) {
    const imgAdj = {
        display: 'inline-block',
        transform: `rotate(-90deg)`,
    }
    return (
        <footer id="footer">
            {/* id name for use in js */}
            {/* Part 1 : 嵌入Google地圖 */}
            <div id="map">
                <iframe style={{ border: 0 }} allowFullScreen=""
                    title="心寧診所的周遭地圖" loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14462.7791466998!2d121.3196924!3d25.010485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x130c1e38f756a59!2z5b-D5pm06Ki65omA!5e0!3m2!1szh-TW!2stw!4v1622035578348!5m2!1szh-TW!2stw">
                </iframe>
            </div>
            {/* Part 2+3 : 門診時間簡表＋(聯絡 & 交通方式) */}
            <div>
                {/* Part 2 : 門診時間簡表 */}
                <div id="time-footer">
                    <h2 className="title-2">門診時間簡表</h2>
                    <hr className="hr-3" />
                    <table>
                        <tr>
                            <th>時段</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                        <tr>
                            <td>上午</td>
                            <td><span>&bull;</span></td>
                            <td></td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td></td>
                            <td><span>&bull;</span></td>
                        </tr>
                        <tr>
                            <td>下午</td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>晚上</td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td><span>&bull;</span></td>
                            <td></td>
                        </tr>
                    </table>
                    <button className="btn" data-s2-target="time" data-s2-offset="-4450">詳細資訊</button>
                </div>
                {/* Part 3 : 聯絡 & 交通方式 */}
                <dl className="p-text">
                    <dt>
                        <img src="./icons/iconTel.png" alt="心晴診所的電話號碼" />
                        電話
                        <a href="tel:+886-3-3467895">(03) 346-7895</a>
                    </dt>
                    <dt>
                        <img src="./icons/iconAdr.png" alt="心晴診所的地址" />
                        地址：桃園市桃園區大有路360號1樓
                    </dt>
                    <dt>
                        <img src="./icons/iconTraffic.png" alt="交通方式" style={imgAdj} />
                        交通方式
                    </dt>
                    <dd>
                        <img src="./icons/iconBus.png" alt="搭車前往心晴診所" style={{ width: 32 + 'px', height: 32 + 'px' }} />
                        大眾交通：搭乘105、168、209、602、707、9069、免費公車環狀線紅‧藍線，在「新光三越」站下車
                    </dd>
                    <dd>
                        <img src="./icons/iconCar.png" alt="開車前往心晴診所" />
                        自行開車：國道一號，在南崁交流道下，往桃園春日路。後接健行路，再接大有路，開至360號。
                    </dd>
                </dl>
            </div>
            {/* Part 4 : 友善連結 */}
            <div id="friend-link">
                <a href="http://peacefulmindclinic.com/" target="_blank" rel="noopener">
                    <img src="./images/friendLink1.png" alt="心寧診所" title="前往心寧診所網站" />
                </a>
                <button data-s2-target="home">
                    <img src="./images/friendLink0.png" alt="心晴診所" title="回到最上" />
                </button>
                <a href="http://sinyue-clinic.com/" target="blank" rel="noopener">
                    <img src="./images/friendLink2.png" alt="欣悅診所" title="前往欣悅診所網站" />
                </a>
            </div>
            {/* Part 5 : 版權聲明 */}
            <div>
                <p className="p-text">心晴診所 版權所有 &copy; Copyright 2021. <wbr />All Rights Reserved.</p>
            </div>
        </footer>
    );
}
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