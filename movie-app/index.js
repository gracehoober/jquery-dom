"use strict";



$(".ratings").on("click", ".remove", (evt) => {
  $(evt.target.parentElement).remove();
});



$("form").on("submit", (evt) => {
  evt.preventDefault();

  const movieTitle = $("#movie-title").val();
  const movieRating = $("#movie-rating").val();

  $(".ratings").append($("<p>", { text: `${movieTitle} has a ratings of ${movieRating}` })
    .append($("<button>", { text: "Remove rating", class: "remove" })));

});
