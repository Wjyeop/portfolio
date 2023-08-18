import { BiLogoReact } from "react-icons/bi";

function Skills() {
    return(
        <div className="Skills">
            <h1>MY SKILLS</h1>

            <div className="Skills-1">

                <div className='React'>
                    <div>
                        <BiLogoReact size={40} color="black"/>
                        <span>React</span>
                    </div>                    
                    <ul>
                        <li>컴포넌트 기반으로 설계하여 작동 방식을 이해하고 활용합니다.</li>
                        <li>리액트의 다양한 라이브러리를 활용합니다.</li>
                        <li>상태관리 라이브러리 Recoil을 활용합니다.</li>
                    </ul>
                </div> 

                <div className='javascript'>
                    <div>
                        <img src='img/javascript.png' alt=""/>
                        <span>JavaScript</span>
                    </div>                    
                    <ul>
                        <li>JS로 웹 제작이 가능합니다.</li>
                        <li>리액트와 함께 사용해 SPA을 제작 합니다.</li>
                        <li>ES6와 자바스크립트 문법에 맞게 사용합니다.</li>
                    </ul>
                </div> 
                
                <div className='html'>
                    <div>
                        <img src='img/html5.png' alt=""/>
                        <span>HTML5</span>
                    </div>                    
                    <ul>
                        <li>브라우저와의 호환성을 검토하여 개발합니다.</li>
                        <li>시맨틱 태그를 유용하게 사용하여 코드의 가독성을 높입니다.</li>
                        <li>localStorage와 sessionStorage를 활용합니다.</li>
                    </ul>
                </div>
                <div className='css'>
                    <div>
                        <img src='img/css3.png' alt=""/>
                        <span>CSS3</span>
                    </div>                    
                    <ul>
                        <li>미디어 쿼리를 활용하여 반응형 웹을 제작합니다.</li>
                        <li>시각적으로 깔끔하고 풍부한 개발을 선호합니다.</li>
                    </ul>
                </div> 
                <div className='typeScript'>
                    <div>
                        <img src='img/typescript.png' alt=""/>
                        <span>TypeScript</span>
                    </div>                    
                    <ul>
                        <li>변수와 함수의 타입을 명시하며 오류를 예방할 수 있습니다.</li>
                        <li>협업에서 코드의 가독성과 유지 보수성을 향상시킬 수 있습니다.</li>
                    </ul>
                </div>
                <div className='firebase'>
                    <div>
                        <img src='img/firebase.png' alt=""/>
                        <span>Firebase</span>
                    </div>                    
                    <ul>
                        <li>간단한 인증과 보안을 해결할 수 있습니다.</li>
                        <li>정적 웹 사이트나 SPA을 호스팅 할 수 있습니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills