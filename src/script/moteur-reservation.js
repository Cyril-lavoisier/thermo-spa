var webKey = "yKQQzQaEYmoLg08tBSzBA4CCn";
var url = new URL(window.location.href);
var appart = url.searchParams.get("appart");
var checkin = url.searchParams.get("checkin");
var checkout = url.searchParams.get("checkout");
var adults = url.searchParams.get("adults");
var children = url.searchParams.get("children");
var lang = url.searchParams.get("lang");
if(lang == null)
    lang = "fr";
if(appart == null) {
var iframeUrl = "https://app.superhote.com/#/get-available-rentals/"+webKey+"?startDate=" + checkin + "&endDate=" + checkout + "&adultsNumber=" + adults + "&childrenNumber=" + children + "&lang=" + lang;
if(checkin == null) iframeUrl = "https://app.superhote.com/#/get-available-rentals/" + webKey + "?lang=" + lang;
document.getElementById('bookingengine').src = iframeUrl;
} else {
var iframeUrl = "https://app.superhote.com/#/rental/" + appart + "?lang=" + lang;
document.getElementById('bookingengine').src = iframeUrl;
}