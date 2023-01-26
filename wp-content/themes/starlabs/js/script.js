//Burger Menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Dropdown Menu
const dropdownBtn = document.querySelector(".dropdown-menu");
const div = document.querySelector(".doubleDropdown");

dropdownBtn.addEventListener("click", () => {
  div.classList.toggle("hidden");
});

window.addEventListener("load", showActiveName);
window.addEventListener("load", showActiveDesc);

//This function gets the ID of the first Tab Description Div and removes class 'hidden' from it
function showActiveName() {
  let div = document.querySelector(".tab-content");
  let firstElement = div.firstElementChild;
  firstElement.classList.remove("hidden");
}

//This function adds text color and background color to the first Tab name which is active on load
function showActiveDesc() {
  let element = document.getElementById("list-item");
  element.classList.add("bg-[#4767c9]");
  element.classList.add("text-white");
  element.classList.remove("text-gray-600");
  element.classList.remove("bg-white");
}

//This function changes the tab description based on which Tab Name we click
function changeActiveTab(event, tabID) {
  let element = event.target;
  ulElement = element.parentNode.parentNode;
  aElements = ulElement.querySelectorAll("li > a");
  tabContents = document
    .getElementById("tabs-id")
    .querySelectorAll(".tab-content > div");
  for (let i = 0; i < aElements.length; i++) {
    aElements[i].classList.remove("text-white");
    aElements[i].classList.remove("bg-[#4767c9]");
    aElements[i].classList.add("text-gray-600");
    aElements[i].classList.add("bg-white");
    tabContents[i].classList.add("hidden");
    tabContents[i].classList.remove("block");
  }
  element.classList.remove("text-gray-600");
  element.classList.remove("bg-white");
  element.classList.add("text-white");
  element.classList.add("bg-[#4767c9]");
  document.getElementById(tabID).classList.remove("hidden");
  document.getElementById(tabID).classList.add("block");
}

// Handle like and dislike
// Add click event to like-button
jQuery(document).ready(function ($) {
  $(".like-button").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    // Send AJAX request
    $.ajax({
      type: "post",
      dataType: "json",
      url: ajax_object.ajax_url,
      data: {
        action: "like",
        nonce: $this.data("nonce"),
        comment_id: $this.data("comment-id"),
      },
      success: function (response) {
        //update the count of the element
        var countElem = $this.siblings(".like-count");
        var current_count = parseInt(countElem.attr("data-count"));
        var new_count = current_count == 0 ? 1 : 0;
        countElem.attr("data-count", new_count);
        countElem.text(new_count);
      },
    });
  });

  // Add click event to dislike-button
  $(".dislike-button").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    // Send AJAX request
    $.ajax({
      type: "post",
      dataType: "json",
      url: ajax_object.ajax_url,
      data: {
        action: "dislike",
        nonce: $this.data("nonce"),
        comment_id: $this.data("comment-id"),
      },
      success: function (response) {
        //update the count of the element
        var countElem = $this.siblings(".dislike-count");
        var current_count = parseInt(countElem.attr("data-count"));
        var new_count = current_count == 0 ? 1 : 0;
        countElem.attr("data-count", new_count);
        countElem.text(new_count);
      },
    });
  });
});
