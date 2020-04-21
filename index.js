var cards = ["msft-card", "google-card", "intersect-card", "ix-card"];

for (let i = 0; i < cards.length; i++) {
  var card = cards[i];
  console.log("card: " + card);
  document.getElementById(card).addEventListener("mouseover", function (e) {
    var currId = e.srcElement.id;
    console.log("mouseover currId: " + currId);
    if (currId) {
      for (let i = 0; i < cards.length; i++) {
        if (currId != cards[i]) {
          disableCardShadow(cards[i]);
        }
      }
    }
  });

  document.getElementById(card).addEventListener("mouseleave", function (e) {
    var currId = e.srcElement.id;
    console.log("mouseleave currId: " + currId);
    if (currId) {
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
  console.log("enabling card shadow for " + cardId);
  document.getElementById(cardId).style.transition = "all 0.7s ease-in;";
  document.getElementById(cardId).style.boxShadow = "7px 7px 25px #cdcccc";
}
