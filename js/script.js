//#1. 헤더공간 구성
Vue.component("header-el", {
    data : () => {
        return {
            global_menu : ["summary", "performance", "motive", "aspiration", "etc"]
        }   
    },
    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <router-link to="/"><img src="./img/logo_1.png" alt="포트폴리오 로고"></router-link>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="menu in global_menu">
                        <router-link class="gt" :to="'/'+menu">{{menu}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    `
});

const gitDeco = {
    template : `
    <section id="gitDeco">
        <div class="wrap">
            <h3 class="gt clickGit">click Me!!</h3>
            <a href="https://github.com/jinyeaju" target="_blank"><img src="./img/github_1.png" alt="Git허브 연결 아이콘"></a>
        </div>
    </section>
    `
}

// 요약 시작
const pageSummary = {
    template : `
    <section id="summary">
        <div class="wrap">
            <h3>자기소개서(요약)</h3>
            <a href="https://myportfolio0827.netlify.app" target="_blank">이력서&포트폴리오(클릭)</a>
            <div class="perfom">
                <h3>주요실적</h3>
                <div class="projectB">
                    <p>
                        <b>
                            MBTI를 통해 클래스를 추천해주는 사이트, CUSCLA(Customized Class)<br><br>
                        </b>
                        요즘 사람들은 만날 때 성격을 쉽게 알 수 있는 성격 지표 검사인 MBTI 유형을 서로 묻고는 합니다. 그래서 저는 MBTI를 통해서 사용자가 최적으로 만족할만한 클래스를 추천하는 사이트를 만들어보자는 생각으로 CUSCLA를 제작하게 되었습니다. 사용 언어를 PHP로 정한 데에는 흥미를 느꼈던 언어이기도 하지만 클래스 정보를 등록/조회/수정하는 과정에서 HTML 구조 사이에 데이터베이스 명령어나 스크립트 언어가 포함되어 동작하는 직관적인 스크립트 언어라는 점이 큰 이점이라고 생각되었기 때문입니다.
                    </p>
                </div>
                <div class="projectC">
                    <p>
                        <b>
                            포트폴리오 케이스<br><br>
                        </b>
                        Vue.js를 배우며 컴포넌트를 활용하는 싱글 페이지 애플리케이션(SPA)를 배우게 되었습니다. 서버로부터 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 변경이 필요 없는 부분은 갱신하지 않고 새로고침도 발생하지 않아 전체적인 트래픽이 감소하고 사용성도 좋습니다. 이러한 이유로 최근 Vue.js를 사용하여 프로그래밍하는 곳이 많아지고 있고 HTML 파일엔 중요한 정보는 남지 않아 추후엔 보안에도 용이할 것 같다는 생각이 들었기 때문에 Vue.js를 활용하여 포트폴리오 케이스를 제작하게 되었습니다.
                    </p>
                </div>
            </div>
            
            <div class="moti">
                <h3>지원동기</h3>
                <div class="com_one">
                    <p>
                        현재 저는 HTML, CSS, Javascript, JQuery, PHP, Vue.js, MySQL 기술을 습득했으며, 전혀 새로운 것을 배우고 적응한 후 업무를 하는 것도 좋겠지만 우선 Vue, Ionic을 기반으로 웹/앱 서비스를 개발하는 캐럿글로벌에 입사해서 제가 배운 기술들을 최대한 활용해서 빠르게 적응하고 업무에 기여하고 싶고 Ionic 프레임워크에 대한 부분도 배우며 성장하고 싶습니다
                    </p>
                </div>
                <div class="com_two">
                    <p>
                        캐럿글로벌의 연혁 중 글로벌 역량 강화 HRD Conference를 꾸준히 개최해온 기업이라는 점과 많은 수상 이력, 꾸준히 한국 국제봉사기구(KVO)에 후원을 한다는 점이 캐럿글로벌이 타사보다 더 경쟁력 있고, 교육계 기업인만큼 직무 관련 교육 지원이 있어서 저와 회사가 함께 성장해갈 수 있을 것 같다고 생각되었기 때문에 꼭 지원하고 싶은 기업이라는 생각이 들었습니다.
                    </p>
                </div>
                <div class="com_three">
                    <p>
                        CARROT의 핵심 가치(비전) 부분에서 최고의 정신이 최고의 콘텐츠와 최고의 회사, 최고의 삶을 만든다는 부분에서 크게 공감했으며 자유로운 분위기에서 즐겁게 업무가 가능한 캐럿글로벌과 함께 하고 싶은 마음이 생겼습니다.
                    </p>
                </div>
            </div>
            
            <div class="aspira">
                <h3>입사 후 포부</h3>
                <div class="my_work">
                    <p>
                        1. 입사 후 회사에서 주어지는 업무에 최대한 빠르게 적응하고 한명의 구성원으로서 도움이 되고 싶습니다.
                    </p>
                </div>
                <div class="after_com_vision">
                    <p>
                        2. 개발자로서 성장을 위해 업무와 관련된 공부도 개을리하지 않고 끊임없이 배우려고 노력할 것입니다.
                    </p>
                </div>
                <div class="after_my_vision">
                    <p>
                        3. 웹 개발 업무를 먼저 숙련되게 하고 이후에는 저를 더 성장시켜서 앱 개발에도 참여해보고 싶습니다.
                    </p>
                </div>
            </div>
            
            <div class="etc">
                <h3>기타</h3>
                <div class="social">
                    <p>
                        대학교 때 졸업작품을 준비하는 과정에서 초기 팀장의 사퇴와 주제 도출에 대해 문제를 겪게 되었지만, 자진해서 팀장이 되어 팀을 재정비하고 졸업작품이 실무에 비해 많이 부족하고 팀장을 맡게 되어 홀로 여러 사람에게 발표를 해야 한다는 것이 떨리고 부담으로 다가왔지만 작품에 대한 이해와 발표 연습을 반복해서 다듬어갔습니다. 교내에서 교수님들께만 발표하게 되었지만 1년 동안 준비한 졸업작품을 무사히 발표하고 뿌듯함을 느낄 수 있었던 것 같습니다. 준비해온 것을 모두 발표하고 열정과 뿌듯함을 얻게 된 경험이 되었습니다.
                    </p>
                </div>
                <div class="hobby">
                    <p>
                        저는 많은 취미 활동을 하고 있는데 그중에서 레진이라는 재료를 사용해서 맞춤형 액세서리를 만들어 지인에게 선물해주는 것을 좋아합니다. 선물 받는 사람의 특징이나 좋아하는 것, 의미 있는 문구 등을 생각하며 디자인한 후 머릿속으로 구현한 디자인이 구현되고 난 후의 성취감과 선물을 받은 지인이 기뻐했을 때의 뿌듯함도 취미를 이어가는 데 큰 역할을 한 것 같습니다.
                    </p>
                </div>
            </div>

        </div>
    </section>
    `
}
// 요약 끝

const pagePerformance = {
    template : `
    <section id="performance">
        <div class="wrap">
            <div class="perfom">
                <h3>주요실적</h3>
                <div class="projectA">
                    <p>
                        저는 배화여자대학교 스마트 IT 학과(4년 과정)를 졸업했습니다. 이 과정에서는 한 가지 분야를 지정해서 배우는 것이 아니라 데이터베이스나 SW 테스팅, JAVA, 자료구조 등의 여러 가지 분야를 조금씩 배우는 과정으로 구성되어 있었습니다. 대학교 과정이 끝난 직후 저는 취업을 원하는 Front-End 분야의 실무를 공부해 보고 싶어져서 국비 지원을 통해 UI & UX 적응형 반응형 과정을 수료하게 되었습니다. 이전에는 배우지 못했던 디테일을 배우고 새로운 언어를 배우는 것에 재미를 느꼈습니다. 그중에 PHP와 Vue.js에 좀 더 흥미를 느끼게 되어 PHP를 활용하여 MBTI를 통해 클래스를 추천해주는 사이트, CUSCLA(Customized Class)를 제작하고 Vue.js를 활용하여 포트폴리오를 담을 수 있는 케이스를 제작하게 되었습니다.
                    </p>
                </div>
                <div class="projectB">
                    <p>
                        <b>
                            MBTI를 통해 클래스를 추천해주는 사이트, CUSCLA(Customized Class)<br><br>
                        </b>
                        자신만의 사이트를 제작하고자 할 때 주제 잡기에 대한 많은 고민이 있었습니다. 아이디어 구상 과정에서 초반에는 고등학교까지 유치원 교사가 꿈이었던 것이 생각나서 어린이용 교육 사이트나 교육을 추천해주는 사이트를 제작해보고자 했었습니다. 하지만 특별한 포인트가 없는 사이트이고 밋밋하다고 생각이 되어 교육 사이트를 좀 더 특별하게 만들어줄 포인트가 없을까 고민하다가 요즘 사람들은 만날 때 전화번호보다는 카톡, 인스타그램 아이디를 교환하거나 성격을 쉽게 알 수 있는 성격 지표 검사인 MBTI 유형을 서로 묻고는 합니다. 그래서 저는 MBTI를 통해서 사용자가 최적으로 만족할만한 클래스를 추천하는 사이트를 만들어보자는 생각으로 CUSCLA를 제작하게 되었습니다. 사용 언어를 PHP로 정한 데에는 흥미를 느꼈던 언어이기도 하지만 클래스 정보를 등록/조회/수정하는 과정에서 HTML 구조 사이에 데이터베이스 명령어나 스크립트 언어가 포함되어 동작하는 직관적인 스크립트 언어라는 점이 큰 이점이라고 생각되었기 때문입니다. 
                    </p>
                </div>
                <div class="projectC">
                    <p>
                        <b>
                            포트폴리오 케이스<br><br>
                        </b>
                        Vue.js를 배우며 컴포넌트를 활용하는 싱글 페이지 애플리케이션(Single Page Application, SPA)를 배우게 되었습니다. 서버로부터 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 변경이 필요 없는 부분은 갱신하지 않고 새로고침도 발생하지 않아 전체적인 트래픽이 감소하고 사용성도 좋습니다. 이러한 이유로 최근 Vue.js를 사용하여 프로그래밍하는 곳이 많아지고 있고 HTML 파일엔 중요한 정보는 남지 않아 추후엔 보안에도 용이할 것 같다는 생각이 들었기 때문에 Vue.js를 활용하여 포트폴리오 케이스를 제작하게 되었습니다.
                    </p>
                </div>
            </div>
        </div>
    </section>
    `
}
const pageMotive = {
    template : `
    <section id="motive">
        <div class="wrap">
            <div class="moti">
                <h3>지원동기</h3>
                <div class="com_one">
                    <p>
                    현재 저는 HTML, CSS, Javascript, JQuery, PHP, Vue.js, MySQL 기술을 습득했으며, 
                    신입이기 때문에 열정을 가지고 입사하여 전혀 새로운 것을 배우고 적응한 후 업무를 하는 것도 좋겠지만 
                    저는 우선 Vue, Ionic을 기반으로 웹/앱 서비스를 개발하는 캐럿글로벌에 입사해서 
                    제가 배운 기술들을 최대한 활용해서 빠르게 적응하고 업무에 기여하고 싶고 
                    Ionic 프레임워크에 대한 부분도 배우며 성장하고 싶습니다.
                    </p>
                </div>
                <div class="com_two">
                    <p>
                        캐럿글로벌의 연혁을 보니 한 곳에 머물러있는 것이 아닌 계속해서 성장하는 기업이라는 생각이 들었습니다. 연혁 중 저의 눈에 띄었던 점은 글로벌 역량 강화 HRD Conference를 꾸준히 개최해온 기업이라는 점과 많은 수상 이력, 꾸준히 한국 국제봉사기구(KVO)에 후원을 한다는 점이 캐럿글로벌이 타사보다 더 경쟁력 있고, 교육계 기업인만큼 직무 관련 교육 지원이 있어서 저와 회사가 함께 성장해갈 수 있을 것 같다고 생각되었기 때문에 꼭 지원하고 싶은 기업이라는 생각이 들었습니다. 
                    </p>
                </div>
                <div class="com_three">
                    <p>
                        최근 캐럿글로벌과 같이 꾸준한 성장을 보여준 기업들의 공통점은 최고의 정신을 위해 힘쓰고 있으며 타인에 대한 배려와 적극적인 참여를 통해서 큰 성과를 낸다는 것이라고 생각합니다. CARROT의 핵심 가치(비전) 부분에서 최고의 정신이 최고의 콘텐츠와 최고의 회사, 최고의 삶을 만든다는 부분에서 크게 공감했으며 자유로운 분위기에서 즐겁게 업무가 가능한 캐럿글로벌과 함께 하고 싶은 마음이 생겼습니다. 
                    </p>
                </div>
            </div>            
        </div>
    </section>
    `
}
const pageAspiration = {
    template : `
    <section id="aspiration">
        <div class="wrap">
            <div class="aspira">
                <h3>입사 후 포부</h3>
                <div class="my_work">
                    <p>
                        1. 입사 후 회사에서 주어지는 업무에 최대한 빠르게 적응하고 한명의 구성원으로서 도움이 되고 싶습니다.
                    </p>
                </div>
                <div class="after_com_vision">
                    <p>
                        2. 개발자로서 성장을 위해 업무와 관련된 공부도 개을리하지 않고 끊임없이 배우려고 노력할 것입니다.
                    </p>
                </div>
                <div class="after_my_vision">
                    <p>
                        3. 웹 개발 업무를 먼저 숙련되게 하고 이후에는 저를 더 성장시켜서 앱 개발에도 참여해보고 싶습니다.
                    </p>
                </div>
            </div>
        </div>
    </section>
    `
}
const pageEtc = {
    template : `
    <section id="etc">
        <div class="wrap">
            <div class="etc">
                <h3>기타</h3>
                <div class="social">
                    <p>
                    대학교 때 교내에서 열린 캡스톤디자인 발표회에 졸업작품을 발표하기 위해서 참가하게 되었습니다.
                    졸업작품을 준비하는 과정에서 초기 팀장의 사퇴와 주제 도출에 대해 문제를 겪게 되었지만, 자진해서 팀장이 되어 팀을 재정비하고 문제를 해결해나갔습니다.
                    우선 팀원들과 대화를 통해 서로의 불만과 심정을 공유하며 현재의 문제가 무엇인지, 나아갈 방향 등을 정했고 업무를 세분화 시켜서 팀원들의 흥미와 능력에 맞는 역할을 분담하게 되었습니다.
                    또한 1년 동안 준비한 졸업작품이 실무에 비해 많이 부족하고 팀장을 맡게 되어 홀로 여러 사람에게 발표를 해야 한다는 것이 떨리고 부담으로 다가왔지만 작품에 대한 이해와 발표 연습을 반복해서 내용을 다듬어갔습니다. 비록 코로나로 인해 교내에서 교수님들께만 발표하게 되었지만 1년 동안 준비한 졸업작품을 무사히 발표하고 뿌듯함을 느낄 수 있었던 것 같습니다. 준비해온 것을 모두 발표하고 열정과 뿌듯함을 얻게 된 경험이 되었습니다.
                    </p>
                </div>
                <div class="hobby">
                    <p>
                    저는 많은 취미 활동을 하고 있는데 그중에서 레진이라는 재료를 사용해서 맞춤형 액세서리를 만들어 지인에게 선물해주는 것을 좋아합니다. 선물 받는 사람의 특징이나 좋아하는 것, 의미 있는 문구 등을 생각하며 디자인한 후 머릿속으로 구현한 디자인이 구현되고 난 후의 성취감과 선물을 받은 지인이 기뻐했을 때의 뿌듯함도 취미를 이어가는 데 큰 역할을 한 것 같습니다.
                    </p>
                </div>
            </div>            
        </div>
    </section>
    `
}


const rtRoutes = [
    {
        path : "/",
        component : pageSummary
    },
    {
        path : "/summary",
        component : pageSummary
    },
    {
        path : "/performance",
        component : pagePerformance
    },
    {
        path : "/motive",
        component : pageMotive
    },
    {
        path : "/aspiration",
        component : pageAspiration
    },
    {
        path : "/etc",
        component : pageEtc
    },


];

const router1 = new VueRouter({
    routes : rtRoutes
});


const date = new Date();
const year = date.getFullYear();

const footer = {
    template : `
    <footer><p>Copyrights &copy; ${year} Jin YeaJu Portfolio</p></footer>
    `
}

new Vue({
    el : "#app",
    router : router1,
    components : {
        "gitdeco-el" : gitDeco,
        "footer-el" : footer,
    },

});

