import React from "react";

export const Profile = () => {
    return(
        <div id="body">
            <div id="profile">
                <div>
                    <h1>PROFILE</h1>
                </div>
                <div className="left">
                    <img src="img/good.png" alt=""/>
                </div>
                <div className="right">
                    <p>안녕하세요 프론트엔드 개발자 원준엽입니다.</p>
                    <ul>
                        <li>이름 : 원준엽</li>
                        <li>생년월일 : 96.10.11</li>
                        <li>주소지 : 서울 강서구</li>
                    </ul>
                    <ul>
                        <li>연락처 : 010 2482 1996</li>
                        <li>이메일 : wnsduq2178@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;