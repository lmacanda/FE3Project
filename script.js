/* Discover More NFTs Tabs */
const nftTabButtons = document.querySelectorAll(".disc-nft-ctr-cat-tab-left-tablinks");
nftTabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const tabcontent = document.querySelectorAll(".disc-nft-ctr-cat-tabcontent");
    tabcontent.forEach((tab) => {
      tab.style.display = "none";
    });

    nftTabButtons.forEach((button) => {
      button.className = button.className.replace(" active", "");
    });

    document.getElementById(e.target.textContent.split(' ').join('').toLowerCase()).style.display = "block";
    e.target.className += " active";
  });
});

document.getElementById("defaultTab").click();
/* Discover More NFTs Tabs */