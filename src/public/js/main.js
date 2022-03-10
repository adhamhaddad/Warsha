const header = document.querySelector(".header");
const search = document.querySelector("#search");
const content = document.querySelector(".content");
const searchBox = document.createElement("div");


searchBox.classList.add("searchBox");
const searchContent =
    `<div class="searchHeader">
        <h2>ادخل بعض التفاصيل الدقيقة</h2>
        <i class="fa fa-times exit"></i>
    </div>

    <form action="#" method="GET">
        <div class="form-container">
            <div>
                <label>اسم المحافظة</label>
                <select>
                    <option>الإسكندرية</option>
                    <option>الإسماعيلية</option>
                    <option>الاسكندرية</option>
                    <option>أسوان</option>
                    <option>أسيوط</option>
                    <option>الأقصر</option>
                    <option>البحر الأحمر</option>
                    <option>البحيرة</option>
                    <option>بني سويف</option>
                    <option>بورسعيد</option>
                    <option>جنوب سيناء</option>
                    <option>الجيزة</option>
                    <option>الدقهلية</option>
                    <option>دمياط</option>
                    <option>السويس</option>
                    <option>الشرقية</option>
                    <option>شمال سيناء</option>
                    <option>الغربية</option>
                    <option>الفيوم</option>
                    <option>القاهرة</option>
                    <option>القليوبية</option>
                    <option>قنا</option>
                    <option>كفر الشيخ</option>
                    <option>مطروح</option>
                    <option>المنوفية</option>
                    <option>المنيا</option>
                    <option>الوادي الجديد</option>
                </select>
            </div>
            <div>
                <label>المنطقة</label>
                <input type="text" placeholder="ادخل اسم المنطقة الخاصة بك"/>
            </div>
        </div>

        <div class="form-container">
            <div>
                <label>اسم الحرفة</label>
                <select>
                    <option>نجارة</option>
                    <option>سباكة</option>
                    <option>حدادة</option>
                    <option>نقاشة</option>
                    <option>زجاج</option>
                </select>
            </div>
            <div>
                <button id="search">
                    <span>ابحث</span>
                    <i class="fa-solid fa-magnifying-glass-location"></i>
                </button>
            </div>
        </div>
    </form>`;


// Functions
search.addEventListener("click", () => {
    if (document.querySelector(".header .nav > ul > li").classList == "active") {
        document.querySelector(".header .nav > ul > li").classList.remove("active")
    } else {
        document.querySelector(".header .nav > ul > li").classList.add("active")
    }
    document.querySelector(".header .nav > ul > li").classList.add("active")
    searchBox.innerHTML = searchContent;
    header.appendChild(searchBox);
    document.querySelector("body").classList.add("blur");
    // Close
    let closeSearch = document.querySelector(".exit");
    closeSearch.addEventListener("click", () => {
        header.removeChild(searchBox);
        document.querySelector("body").classList.remove("blur");
    });
});
/*
let search = document.querySelector("#search");
search.addEventListener("click", () => {
    header.removeChild(searchBox);
    document.querySelector("body").classList.remove("blur");
});
*/

/* <ul class="user-info"> */
let userInfo =
`
<li>
    <form method="GET" action="/workshop/profile">
        <button type="submit">
            <span>حسابي</span>
            <i class="fa-solid fa-user"></i>
        </button>
    </form>
</li><li>
    <span>الاعدادات</span>
    <i class="fa fa-cog"></i>
</li><li>
    <span>تسجيل خروج</span>
    <i class="fa fa-sign-out"></i>
</li>
`;



let ul = document.createElement("ul");
ul.classList.add("user-info")
ul.innerHTML = userInfo;
let userList = document.querySelector("li.user-list");
userList.addEventListener("click", () => {
    userList.appendChild(ul);
});




// let content = document.querySelector("")


// Chat Live Support
// Beta

let msgList = 
`
<ul>
    <li></li>
    <li>الدعم الفني</li>
</ul> 
`;

let messageIcon = document.querySelector("#chat");
let liveSupp = document.querySelector(".live-support");
let closeChat = document.querySelector(".close-chat");

messageIcon.addEventListener("click", () => {
    liveSupp.style.display = "block";
});
closeChat.addEventListener("click", () => {
    liveSupp.style.display = "none";
});


/*
Adham Ashraf 40%
Ahmed Emad 40%

in case
20% momawel
*/