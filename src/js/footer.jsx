export default function Footer() {
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