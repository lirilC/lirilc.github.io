loggedUser=
{
    profilePic: (localStorage.getItem("user") !== null? (function(){var lU= localStorage.getItem("user"); lU= lU.slice(lU.indexOf("src=") + 4, lU.indexOf("alt=") - 1); return lU})(): "/resources/images/white.jpg"),
    level: (localStorage.getItem("knob") !== null? (function(){var k= localStorage.getItem("knob"); k= k.slice(k.indexOf("value=") + 7, k.indexOf(">") - 1); return k})(): "60")
}