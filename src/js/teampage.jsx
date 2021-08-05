import { dataTeam } from "./dataTeam.jsx"
import React, { useState } from "react";
// 按鈕面板
// function TeamBtn(props) {
//     const nth = props.index;
//     const name = [];
//     const [isActive, SetIsActive] = useState(false);
//     function handleClick() {
//         SetIsActive(!isActive);
//         props.onClick();
//     }
//     name.push(
//         dataTeam[nth].name.slice(0, 3),
//         <br />,
//         dataTeam[nth].name.slice(3)
//     );
//     return (
//         <div className={isActive ? "team-btn team-btn-active" : "team-btn"}
//             onClick={handleClick}
//         >
//             <h2>{name}</h2>
//         </div>
//     );
// }
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
    //* 包裝「學歷」、「經歷」、「主治」、「專長」四項文本
    const [
        memberDegree,
        memberExperience,
        memberMajor,
        memberSpecialty,
    ] = [[], [], [], []];
    const dataMap = {
        "學歷": memberDegree,
        "經歷": memberExperience,
        "主治": memberMajor,
        "專長": memberSpecialty
    };
    const member4in1 = [];

    for (let key in dataMap) {
        // step 1 : 有內容才渲染
        if (!dataTeam[nth][key]) continue;
        // step 2 : 將所有條目條列成 li
        for (let i in dataTeam[nth][key]) {
            dataMap[key].push(
                <li>{dataTeam[nth][key][i]}</li>
            );
        }
        // step 3 : 將內容拼進上下文
        member4in1.push(
            <div className="team-sub-card">
                <h3>{key}</h3>
                <div className="hr-2">
                    <div></div>
                    <hr />
                </div>
                <ul className="p-text">
                    {dataMap[key]}
                </ul>
            </div>
        );
    }
    //* 包裝「醫師的叮嚀」的文本
    const memberRemind = [], keyWordRemind = "醫師的叮嚀";
    if (dataTeam[nth][keyWordRemind]) {
        memberRemind.push(
            <div className="team-sub-card">
                <h3>{keyWordRemind}</h3>
                <div className="hr-2">
                    <div></div>
                    <hr />
                </div>
                <p className="p-text">{dataTeam[nth][keyWordRemind]}</p>
            </div>
        );
    }
    return (
        <div className="team-about">
            {member4in1}
            {memberRemind}
        </div>
    );
}
// 主元件
function TeamPage() {
    const [memberIndex, setMemberIndex] = useState(0);
    // function TeamBtns() {
    //     let stateInit = new Array(dataTeam.length);
    //     stateInit.fill(false);
    //     const [btnStates, SetBtnStates] = useState(stateInit);
    //     const pack = [];
    //     function handleClick(nth) {
    //         SetBtnStates(stateInit);
    //         SetBtnStates(btnStates[3] = !btnStates[3]);
    //         setMemberIndex(nth);
    //     }
    //     for (let nth = 0; nth < dataTeam.length; nth++) {
    //         const name = [];
    //         name.push(
    //             dataTeam[nth].name.slice(0, 3),
    //             <br />,
    //             dataTeam[nth].name.slice(3)
    //         );
    //         pack.push(
    //             <div className={btnStates[nth] ? "team-btn team-btn-active" : "team-btn"}
    //                 onClick={handleClick(nth)}
    //             >
    //                 <h2>{name}</h2>
    //             </div>
    //         );
    //     }
    //     return (pack);
    // }
    return (
        <section id="team-page">
            <header>
                <hr className="hr-1" />
                <h1 className="title-1">醫療團隊</h1>
            </header>
            <div id="team-btn-box">
                {/* {TeamBtns()} */}
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

export default TeamPage ;