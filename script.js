const nfts = [
  {
    name: "ArtCrypto",
    category: "Art",
    price: "0.2",
    image: "./discover_more_nfts_assets/images/nft-image-1.png",
    time: "3 hrs 20 mins",
    "users": [
      {
        "images": [
          "./discover_more_nfts_assets/images/user-1.png",
          "./discover_more_nfts_assets/images/user-2.png",
          "./discover_more_nfts_assets/images/user-3.png",
          "./discover_more_nfts_assets/images/user-4.png"
        ]
      }
    ]
  },

  {
    name: "ArtCrypto",
    category: "Gaming",
    price: "0.2",
    image: "./discover_more_nfts_assets/images/nft-image-2.png",
    time: "3 hrs 20 mins",
    "users": [
      {
        "images": [
          "./discover_more_nfts_assets/images/user-1.png",
          "./discover_more_nfts_assets/images/user-2.png",
          "./discover_more_nfts_assets/images/user-3.png",
          "./discover_more_nfts_assets/images/user-4.png"
        ]
      }
    ]
  }
];

/* Discover More NFTs Tabs */
const nftTabButtons = document.querySelectorAll(".disc-nft-ctr-cat-tab-left-tablinks");
nftTabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const tabcontent = document.querySelectorAll(".disc-nft-ctr-cat-tabcontent");
    
    // Hide all tab contents
    tabcontent.forEach((tab) => {
      tab.style.display = "none";
    });

    // Remove 'active' class from all tab buttons
    nftTabButtons.forEach((button) => {
      button.className = button.className.replace(" active", "");
    });

    // Show the selected tab content
    const selectedTabId = e.target.textContent.split(' ').join('').toLowerCase();
    const selectedTab = document.getElementById(selectedTabId);
    selectedTab.style.display = "block";

    // Add 'active' class to the clicked tab button
    e.target.className += " active";
    
    // Clear previously added cards from the selected tab
    while (selectedTab.children[0].firstChild) {
      selectedTab.children[0].removeChild(selectedTab.children[0].firstChild);
    }

    // Log the selected tab's identifier
    console.log(selectedTabId);

    // Iterate through NFTs to populate cards in the selected tab
    let card = null;
    nfts.forEach((nft) => {

      if (selectedTabId == "allcategories") {
        // Create a card using the provided data and append to the tab's content
        card = createCard(nft.name, nft.category, nft.price, nft.image, nft.time, nft.users);
        selectedTab.children[0].appendChild(card);
      } else {

        if (nft.category.toLowerCase() == selectedTabId) {
          // Create a card using the provided data and append to the tab's content
          card = createCard(nft.name, nft.category, nft.price, nft.image, nft.time, nft.users);
          selectedTab.children[0].appendChild(card);
        }
        
      }
       
    });
  });
});

document.getElementById("defaultTab").click();

// Function to create cards
function createCard(name, category, price, image, time, users) {
  const card = document.createElement("div");
  card.classList.add("disc-nft-ctr-cat-tabcontent-box-card");

  const cardImage = document.createElement("div");
  cardImage.classList.add("disc-nft-ctr-cat-tabcontent-box-card-image");

  const cardImageImg = document.createElement("img");
  cardImageImg.src = image;
  cardImageImg.classList.add("disc-nft-ctr-cat-tabcontent-box-card-image-img");
  cardImage.appendChild(cardImageImg);

  const cardUsers = document.createElement("div");
  cardUsers.classList.add("disc-nft-ctr-cat-tabcontent-box-card-users");
  users[0].images.forEach((image, index) => {
    let userImage = document.createElement("img");
    userImage.src = image;
    userImage.classList.add(`disc-nft-ctr-cat-tabcontent-box-card-users-img-${index + 1}`);
    cardUsers.appendChild(userImage);
  });
  
  // Card Info
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("disc-nft-ctr-cat-tabcontent-box-card-info");

  // Card Info Heading
  const cardInfoHeading = document.createElement("div");
  cardInfoHeading.classList.add("disc-nft-ctr-cat-tabcontent-box-card-info-h");

  const cardInfoHeadingTitle = document.createElement("h3");
  cardInfoHeadingTitle.textContent = name;
  cardInfoHeadingTitle.classList.add("disc-nft-ctr-cat-tabcontent-box-card-info-h-title");
  cardInfoHeading.appendChild(cardInfoHeadingTitle);
  
  // Card Info Price
  const cardInfoPrice = document.createElement("div");
  cardInfoPrice.classList.add("disc-nft-ctr-cat-tabcontent-box-card-info-price");

  // Card Info Price Left
  const cardInfoPriceLeft = document.createElement("div");
  cardInfoPriceLeft.classList.add("disc-nft-ctr-cat-tabcontent-box-card-info-price-left");

  const cardInfoPriceLeftImg = document.createElement("img");
  cardInfoPriceLeftImg.src = "./discover_more_nfts_assets/images/ethereum-2.svg";

  const cardInfoPriceLeftSpan = document.createElement("span");
  cardInfoPriceLeftSpan.textContent = price;

  cardInfoPriceLeft.appendChild(cardInfoPriceLeftImg);
  cardInfoPriceLeft.appendChild(cardInfoPriceLeftSpan);

  // Card Info Price Right
  const cardInfoPriceRight = document.createElement("div");
  cardInfoPriceRight.classList.add("disc-nft-ctr-cat-tabcontent-box-card-info-price-right");

  const cardInfoPriceRightSpan = document.createElement("span");
  cardInfoPriceRightSpan.textContent = "1 of 321";

  cardInfoPriceRight.appendChild(cardInfoPriceRightSpan);

  cardInfoPrice.appendChild(cardInfoPriceLeft);
  cardInfoPrice.appendChild(cardInfoPriceRight);

  cardInfo.appendChild(cardInfoHeading);
  cardInfo.appendChild(cardInfoPrice);

  // Card Time & Bid
  const cardBid = document.createElement("div");
  cardBid.classList.add("disc-nft-ctr-cat-tabcontent-box-card-bid");

  const cardTimeBidDivider = document.createElement("div");
  cardTimeBidDivider.classList.add("disc-nft-ctr-cat-tabcontent-box-card-bid-divider");

  const cardBidTime = document.createElement("div");
  cardBidTime.classList.add("disc-nft-ctr-cat-tabcontent-box-card-bid-time");

  const cardBidTimeBadge = document.createElement("span");
  cardBidTimeBadge.classList.add("disc-nft-ctr-cat-tabcontent-box-card-bid-time-badge");
  
  const cardBidTimeSpan = document.createElement("span");
  cardBidTimeSpan.textContent = time;
  cardBidTimeSpan.classList.add("disc-nft-ctr-cat-tabcontent-box-card-bid-time-badge-text");

  cardBidTimeBadge.appendChild(cardBidTimeSpan);
  cardBidTime.appendChild(cardBidTimeBadge);

  const cardBidPlace = document.createElement("div");
  cardBidPlace.classList.add("disc-nft-ctr-cat-tabcontent-box-card-bid-place");

  const cardBidPlaceLink = document.createElement("a");
  cardBidPlaceLink.href = "#";
  cardBidPlaceLink.textContent = "Place a Bid";
  cardBidPlaceLink.classList.add("disc-nft-ctr-cat-tabcontent-box-card-bid-place-link");

  cardBidPlace.appendChild(cardBidPlaceLink);

  cardBid.appendChild(cardTimeBidDivider);
  cardBid.appendChild(cardBidTime);
  cardBid.appendChild(cardBidPlace);
 

  card.appendChild(cardImage);
  card.appendChild(cardUsers);
  card.appendChild(cardInfo);
  card.appendChild(cardBid)

  return card;
}