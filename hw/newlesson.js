var count = 1

function prepare(text) {
	return "<li>" +  '<span class="listik">' + text.split() + '</span> <button class="clickButton"> delite </button> </li>';
  }
  function news(ku) {
	return document.querySelector(ku);
  }
  
  news("button").addEventListener("click", function () {
	let a = news(".newElem").value;
	news(".listik").insertAdjacentHTML("beforeEnd", prepare(a));
  });
