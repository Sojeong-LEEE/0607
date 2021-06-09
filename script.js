'use srtict'
/* window.onload 프로퍼티를 이용해 코드 실행한다
window.onload = function(){
}*/
    var toggle = document.getElementById('toggle');
    var navbar = document.querySelector('.navbar');
    console.log(toggle);
    console.log(navbar);

    /* toggle 클릭 했을 때 */
    toggle.addEventListener('click', function(){
        this.classList.toggle('active')
        navbar.classList.toggle('active')
    })

    /* arrow top 구현 
    1. 초기상태는 숨긴다 (완료)
    2. 스크롤이 일정부분 내려오면 보이게 한다 if
    3. 스크롤이 일정부분 올라가면 숨기게 한다 else
    4. arrow top을 클릭하면 스크롤을 최상단으로 올린다
    addEventListener('scroll', function)*/

    const arrowTop = document.getElementById('arrowTop');
    const aboutSection = document.getElementById('about');
    const aboutHeight = aboutSection.clientHeight;
    const header = document.getElementById('header');

    document.addEventListener('scroll', function(){

        if(window.scrollY > aboutHeight){
            arrowTop.classList.add('visible');
        }
        else{
            arrowTop.classList.remove('visible');
        }

        console.log(window.scrollY);
        /* 스크롤이 되었을 때 header가 fixed가 되어라 */
        if(window.scrollY > 0){
            header.classList.add('fixedHead');
        }else{
            header.classList.remove('fixedHead');
        }
    })
    
    
    /* arrow top 클릭 했을 때 scroll이 제일 위로 올라가기 */
    arrowTop.addEventListener('click', function(event){
        /* a 태그는 기본적으로 이동의 기능을 가지고있다.
        그래서 scrollTo  이전에 화면 이동이 발상해 버린다
        그러므로 preventDefaul()로 막는다
        ----------------------------------------------------
        event(or e) 가 발생하면 event 객체는 자동으로 전달된다 */
        /*  console.log('>>> click arrow top >>>') */
        event.preventDefault(event);
        window.scrollTo({top: 0, behavior: 'smooth'})
    });

    /* navbar 클릭시 스크롤 이동 */
    var navbarItem = document.querySelectorAll('.navbar__item a');
    /* var aboutSection = document.querySelector('#about'); */

    navbarItem.forEach(function(item){
        item.addEventListener('click', function(event){
            event.preventDefault();

            toggle.classList.remove('active');
            navbar.classList.remove('active');

            var target = event.target.dataset.link;
            var element = document.querySelector(target);
            element.scrollIntoView({behavior: "smooth"})
            
        })
    })
    /* console.log(navbarItem[0]);
    navbarItem[0].addEventListener('click', function(event){
        event.preventDefault();

        aboutSection.scrollIntoView({behavior: "smooth"});
    }) */

    /* element.scrollIntoView */