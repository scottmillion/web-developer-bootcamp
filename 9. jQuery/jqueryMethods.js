console.log($("h1").text());
console.log($("ul").text());
console.log($("li").text());
$("h1").text("New Text");

// console.log($("h1").val("4"));

console.log($("ul").html());
$("h1").html("blue <em>Text</em>");

console.log($("input").val("4444"));
console.log($("input").val());

console.log($("div:first").attr("class", "pizza"));

console.log($("div:first").attr("class"));
console.log($("div:eq(1)").attr("class"));
