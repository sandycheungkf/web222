// Name: Kwai Fong Cheung 
// Student ID: 111951224
// Web222 Final Accessment

const { reviewData } = window;

document.addEventListener("DOMContentLoaded", function () {
  showReview();
});

// // Show review list
function showReview(reviewId) {
  const reviewContainer = document.getElementById("cardContainer");
  reviewContainer.innerHTML = ""; 

  const chosenReview = reviewData.filter((review) => review.Id === reviewId);
  const sortReview = chosenReview.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  sortReview.forEach(function (reviewData) {
    const reviewCard = createReviewCard(reviewData);
    reviewContainer.appendChild(reviewCard); 
  });
}

//create review card
function createReviewCard(reviewData) {
  const card = document.createElement("div");
  card.classList.add("card");

  const reviewImg = document.createElement("img");
  reviewImg.src = reviewData.imageUrl;
  reviewImg.alt = "review Image";
  reviewImg.classList.add("card-image");
  card.appendChild(reviewImg);

  const ratingStars = "★".repeat(reviewData.rating) + "☆".repeat(5 - reviewData.rating);

  const reviewStarHeading = document.createElement("h2");
  reviewStarHeading.textContent = ratingStars;
  reviewStarHeading.classList.add("ratingStars");
  card.appendChild(reviewStarHeading);

  const reviewName = document.createElement("name");
  reviewName.textContent = reviewData.name;
  reviewName.classList.add("name");
  card.appendChild(reviewName);

  card.appendChild(document.createElement("br"));

  const commentBox = document.createElement("comment");
  commentBox.textContent = reviewData.comment;
  commentBox.classList.add("comment");
  card.appendChild(commentBox);

  card.appendChild(document.createElement("br"));

  const reviewDate = document.createElement("time");
  reviewDate.textContent = reviewData.date;
  reviewDate.classList.add("date");
  card.appendChild(reviewDate);

  return card;
}
//add review
function addReview(event) {
  event.preventDefault(); 
  const usernameInput = document.getElementById("name");
  const ratingInput = document.getElementById("rating");
  const commentInput = document.getElementById("comment");
  const dateInput = document.getElementById("date");

  const currentDate = new Date();
  const displayedDate= currentDate.toISOString().split("T")[0]; 

  const newReview = {
    id: "r" + (reviewData.length + 1),
    name: usernameInput.value,
    rating: parseInt(ratingInput.value),
    date: displayedDate,
    imageUrl: "img/review_image.png?auto=format&fit=crop&w=750&q=80 ",
    comment: commentInput.value
  };

  reviewData.push(newReview);
  showReview();
  usernameInput.value = "";
  ratingInput.value = "0";
  commentInput.value = "";
  dateInput.value = "";
}

document.getElementById("createButton").addEventListener("click", addReview);
showReview();

