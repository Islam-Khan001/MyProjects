let ham = document.getElementById("ham");
let menumain = document.getElementById("menumain");
let cancel = document.getElementById("cancel");
let body = document.getElementsByTagName("body")[0];
let ovrly = document.getElementById("ovrly");
let btt = document.getElementById("btt");
let img = document.getElementsByTagName("img")[1];
let btl = document.getElementById("btl");
let btr = document.getElementById("btr");
let search = document.getElementById("search-icon");
let searchbar = document.getElementById("search-bar");
let searchfor = document.getElementById("searchfor");
let carousal = document.getElementById("carousal");
let addbtnp = document.getElementById("addbtnp");
let addd = document.getElementById("addd");
let addclick = document.getElementById("addclick");
let navadd = document.getElementById("navadd");
let  addpage = document.getElementById("addpage");

// let u1 = document.getElementById("u1");

let translate = 0;

function btlclick() {
  btr.style.border = "";
  btl.style.border = "4px solid #55bad6";

  if (translate == 0) {
    translate = 500;
  }
  translate = translate - 100;
  carousal.style.transform = `translateX(-${translate}%)`;
}

btl.addEventListener("click", function () {
  btlclick();
  clearInterval(sic);
});

function btrclick() {
  if (translate >= 400) {
    translate = -100;
  }
  translate = translate + 100;
  carousal.style.transform = `translateX(-${translate}%)`;
}

btr.addEventListener("click", function () {
  btl.style.border = "";
  btr.style.border = "4px solid #55bad6";

  btrclick();
  clearInterval(sic);
});
let sic = setInterval(btrclick, 5000);

document.addEventListener("click", function (event) {
  if (!btl.contains(event.target) && !btr.contains(event.target)) {
    btl.style.border = "";
    btr.style.border = "";
  }
});

u1.addEventListener("click", function () {
  window.location.href =
    "https://www.amazon.com/s?k=gifts+for+dad&crid=2XQWI7L2BQQOZ&sprefix=gifts+for+dad%2Caps%2C430&ref=nb_sb_noss_1";
});

u2.addEventListener("click", function () {
  window.location.href =
    "https://www.amazon.com/s?k=kitchen&rh=p_36%3A-5000&_encoding=UTF8&content-id=amzn1.sym.6495adb3-7346-40dc-9baa-c15e82da1fd7&crid=3T9EH9JRSQV3Q&pd_rd_r=bffac5b6-1fcf-4ef1-98b6-756cbd80a7d1&pd_rd_w=eXxMF&pd_rd_wg=cYCdC&pf_rd_p=6495adb3-7346-40dc-9baa-c15e82da1fd7&pf_rd_r=6RBYRSVHG6Z28QEZ1Z2K&qid=1686341204&rnid=386465011&sprefix=kitchen%2Caps%2C162&ref=sr_nr_p_36_5";
});

u3.addEventListener("click", function () {
  window.location.href =
    "https://www.amazon.com/b/?_encoding=UTF8&node=283155&pd_rd_w=F78lU&content-id=amzn1.sym.73d958bd-6ca7-46ff-8084-5fcdad211985&pf_rd_p=73d958bd-6ca7-46ff-8084-5fcdad211985&pf_rd_r=6GEB8QW6GMFMGSQ0ANJY&pd_rd_wg=NH1zY&pd_rd_r=dd6d9634-c8a6-4a33-b8af-bfdede460cec";
});

u4.addEventListener("click", function () {
  window.location.href =
    "https://www.amazon.com/s?i=specialty-aps&bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A7926841011&_encoding=UTF8&content-id=amzn1.sym.812ce43c-263d-4b59-8859-52a4798112ab&pd_rd_r=114e1364-dc40-46c6-9746-65bf763dea46&pd_rd_w=puPz7&pd_rd_wg=TC8l7&pf_rd_p=812ce43c-263d-4b59-8859-52a4798112ab&pf_rd_r=4Y9PKHZYJK4PRXARQMEG&ref=nav_em__nav_desktop_sa_intl_video_game_consoles_and_accessories_0_2_5_15";
});

u5.addEventListener("click", function () {
  window.location.href =
    "https://www.amazon.com/s?k=beauty&s=exact-aware-popularity-rank&ds=v1%3AZT6v%2FJBMjurDnqbBIedbwTizYhNIzE2Qivb780ZIMWc&_encoding=UTF8&content-id=amzn1.sym.0044bffe-bf18-49f9-8d38-b2cc8858b52f&crid=2E2YA31C0ZTXE&pd_rd_r=c982952e-5a93-48ec-a6e3-85a95bb519ee&pd_rd_w=JExAn&pd_rd_wg=YSAHi&pf_rd_p=0044bffe-bf18-49f9-8d38-b2cc8858b52f&pf_rd_r=T4HEK0MBC7SCHBDP073D&qid=1686170937&sprefix=beauty%2Caps%2C180&ref=sr_st_exact-aware-popularity-rank";
});

searchbar.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    search.click();
  }
});

search.addEventListener("click", function clicksearch() {
  searchfor.href = `https://www.amazon.com/s?k=${searchbar.value}&crid=YA9MLAB2L8YP&sprefix=${searchbar.value}%2Caps%2C617&ref=nb_sb_noss_2`;
});

ham.addEventListener("click", function () {
  // body.style.overflow = "hidden";

  menumain.style.display = "block";
  menumain.style.marginLeft = "-30%";
  ovrly.style.display = "block";

  let ml = 29;
  let si = setInterval(() => {
    menumain.style.marginLeft = `-${ml}%`;
    ml -= 1;

    ovrly.style.backgroundColor = "#000000c4";
    if (ml < 0) {
      cancel.style.display = "flex";
      cancel.style.opacity = "100%";
      clearInterval(si);
    }
  }, 7);
});

cancel.addEventListener("click", function () {
  cancel.style.opacity = "0%";
  cancel.style.display = "none";

  // body.style.overflow = "";

  ovrly.style.backgroundColor = "#00000000";

  let mld = 0;
  let sid = setInterval(() => {
    menumain.style.marginLeft = `-${mld}%`;
    mld += 1;
    if (mld >= 35) {
      clearInterval(sid);
      menumain.style.display = "none";
      ovrly.style.display = "none";
    }
  }, 7);
});

btt.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navadd.addEventListener('click',function(e){
  addclick.style.display = "flex";
});

addbtnp.addEventListener("click", function () {
  window.location.href =
    "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fie%3DUTF8%26useRedirectOnSuccess%3D1%26ref_%3Ddex_glow_signin%26path%3D%2F&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
});

addd.addEventListener('click',function(){
  addclick.style.display = "";
});

addclick.addEventListener('click',function(){
  if (!addpage.contains(event.target)) {
    addclick.style.display = "";
  }
});


// script lang of the web, used in millions of web pages to add functionality validate forms
// detect browser and much MutationRecord

// intruduction to javascript

// it is the most popular scriting lang on the net and works in all major browser such as

// what is javascript

// it was designed to add interactivity to html pages,
// it is a scripting lang lightweight pro lang,
// usually embedded directly into html pages
// interpreted lang(scipts executes without priliminary compilantion)
// everyone can use js without purchasing a license

// what can a js do

// it gives html designers a prog tool -

// 1. html authors are normally not progrmmers,but js is a scripting lang
// with simple syntax, almost anyine can put small snippets of code into thier html pages

// 2. js can put dyanamic text into html page - a js statement like this -- document.write("string"); can write
// a string into an html page
