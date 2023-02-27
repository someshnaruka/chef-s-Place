// Owl Carousel Functionality Starts
var $owl = $("#owlCarouselCardItems").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["", ""],
    dots: false,
    autoplay: true,
    center: true,
    smartSpeed: 300,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        800: {
            items: 3,
            nav: false,
        },
        1000: {
            items: 3,
        },
    },
});

// Owl Carousel Functionality Ends

// Modal Functionality Starts
const showModal = () => {
    $("#cartModal").show();
    $("body").css("overflow", "hidden");
};

const hideModal = () => {
    $("#cartModal").hide();
    $("body").css("overflow", "auto");
};

const showRequestDishModal = () => {
    $("#requestDishModal").show();
    $("body").css("overflow", "hidden");
};

const hideRequestDishModal = () => {
    $("#requestDishModal").hide();
    $("body").css("overflow", "auto");
};
// Modal Functionality Ends

// Video Play Pause Functionality Starts

const playPause = () => {
    var vid = document.getElementById("foodVideo");
    if (vid.paused) {
        vid.play();
        $("#foodVideoBtn").hide();
    } else {
        vid.pause();
        $("#foodVideoBtn").show();
    }
};

// Video Play Pause Functionality Ends


// Making data for Card Items
const cardItems = [
    {
        imgUrl: "./Assests/FoodImages/Images/image1.png",
        imgName: "Chilli Chicken"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/image2.png",
        imgName: "Tandoori Chicken"

    },
    {
        imgUrl: "./Assests/FoodImages/Images/chicken-skewers.png",
        imgName: "Chicken Skewers"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/image12.png",
        imgName: "Angoori Rasmalai"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/indian-chicken-biryani.png",
        imgName: "Indian Chicken biryani"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/gulab-jamun.png",
        imgName: "Gulab Jamun"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/paneer-pulao.png",
        imgName: "Paneer Pulao"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/penne-pasta.png",
        imgName: "Penne Pasta"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/pohe.png",
        imgName: "Poha"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/schezwan-fried.png",
        imgName: "Schezwan Fried Rice"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/semiya.png",
        imgName: "Semiyan"
    },
    {
        imgUrl: "./Assests/FoodImages/Images/image7.png",
        imgName: "Indi Tandoori Paneer"
    },
];

let cardItemDiv = "";
// To create CardItems in Html dynamically
const fetchCardItems = () => {
    cardItems.map((cardItem) => {
        cardItemDiv += `<div class="card-item">
        <div class="card-img">
          <figure>
            <img
              class="cover"
              src=${cardItem.imgUrl}
              alt="cardItemImage" 
              loading="lazy"
            />
          </figure>
          <div class="card-discount">
            <p>20%</p>
          </div>
        </div>
        <div class="card-details">
          <div class="card-details-first">
            <h4>${cardItem.imgName}</h4>
            <h4>$190</h4>
          </div>
          <div class="card-details-second">
            <div class="card-details-second-first">
              <div class="rating">
                <figure>
                  <img src="./Assests/star.svg" alt="Rating" />
                </figure>
                <p>4.7</p>
              </div>
              <div class="duration">
                <p>57-59 min</p>
              </div>
            </div>
            <button class="addToCartButton">
              <figure>
                <img
                  class="cover"
                  src="./Assests/plus.svg"
                  alt="addToCartButton"
                />
              </figure>
            </button>
          </div>
        </div>
      </div>`;

        //   To create items in Owl Carousel
        $("#owlCarouselCardItems")
            .trigger("add.owl.carousel", [
                `<div class="item">
              <div class="card-item">
                <div class="card-img">
                  <figure>
                    <img
                      class="cover"
                      src=${cardItem.imgUrl}
                      alt=""
                    />
                  </figure>
                  <div class="card-discount">
                    <p>20%</p>
                  </div>
                </div>
                <div class="card-details">
                  <div class="card-details-first">
                    <h4>${cardItem.imgName}</h4>
                    <h4>$190</h4>
                  </div>
                  <div class="card-details-second">
                    <div class="card-details-second-first">
                      <div class="rating">
                        <figure>
                          <img src="./Assests/star.svg" alt="Rating" />
                        </figure>
                        <p>4.7</p>
                      </div>
                      <div class="duration">
                        <p>57-59 min</p>
                      </div>
                    </div>
                    <button class="addToCartButton">
                      <figure>
                        <img
                          class="cover"
                          src="./Assests/plus.svg"
                          alt="addToCartButton"
                        />
                      </figure>
                    </button>
                  </div>
                </div>
              </div>
            </div>`
            ])
            .trigger("refresh.owl.carousel");
    });
};

fetchCardItems();
$("#card-section-main").html(cardItemDiv);
