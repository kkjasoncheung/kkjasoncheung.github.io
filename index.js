var cards = ["msft-card", "google-card", "intersect-card", "ix-card"];

for (let i = 0; i < cards.length; i++) {
  var card = cards[i];
  document.getElementById(card).addEventListener("mouseover", function (e) {
    var currId = e.srcElement.id;
    if (currId && cards.includes(currId)) {
      for (let i = 0; i < cards.length; i++) {
        if (currId != cards[i]) {
          disableCardShadow(cards[i]);
        }
      }
    }
  });

  document.getElementById(card).addEventListener("mouseleave", function (e) {
    var currId = e.srcElement.id;
    if (currId && cards.includes(currId)) {
      for (let i = 0; i < cards.length; i++) {
        if (currId != cards[i]) {
          enabledCardShadow(cards[i]);
        }
      }
    }
  });
}

function disableCardShadow(cardId) {
  document.getElementById(cardId).style.transition = "all 0.5s ease-out";
  document.getElementById(cardId).style.boxShadow = "0px 0px 0px #cdcccc";
}

function enabledCardShadow(cardId) {
  document.getElementById(cardId).style.transition = "all 0.7s ease-in;";
  document.getElementById(cardId).style.boxShadow = "7px 7px 25px #cdcccc";
}
