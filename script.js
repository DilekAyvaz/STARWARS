const dataSet = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
 
  {
    id: 17,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 18,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 19,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const renderBtn = document.querySelector(".renderBtn");
const row = document.querySelector(".row");
const homeworldsFilterContainer = document.querySelector(
  ".home-filter-container")

  const createCharacterCard = ({ name, pic, homeworld = "other" }) => {
    return `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
          <img src="${pic}" class="card-img-top" alt="${name}">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${homeworld}</p>
          </div>
        </div>
      </div>
    `;
  };
  

const renderCharacters = (characters) => {
  row.innerHTML = characters.map(createCharacterCard).join("");
};
const toggleCharacters = () => {
const isFittered = document.querySelector(".form-check-input:checked");

  if (!row.innerHTML) {
    renderCharacters(dataSet);
    renderBtn.innerText = "Hide Characters";
  } else {
    row.innerHTML = "";
    renderBtn.innerText = "Show Characters";
  }
  document.querySelectorAll(".form-check-input").forEach((input) => {
    input.checked = false;
  });
  renderBtn.innerHTML = row.innerHTML ? "Hide Characters" : "Show Characters";
};

const newArray = (arr, key) => arr.map((item) => item[key]);
const getUniqueHomeworlds = (dataSet) => {
  const homeworldRaw = newArray(dataSet, "homeworld").map(
    (item) => item ?? "other"
  );
  return [...new Set(homeworldRaw.map((item) => item.toLowerCase()))];
};


const createHomeworldFilters = (homeworlds) => {
  homeworldsFilterContainer.innerHTML = homeworlds.map((homeworld)=> 
    `<div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworld}" value="${homeworld}">
  <label class="form-check-label" for="homeworld-${homeworld}">
    ${homeworld}
  </label>
</div>`
  ).join("");
};

const filterCharactersByHomeworld = (homeworld) => {
  const filteredCharacters = dataSet.filter((character) =>
    (character.homeworld ?? "other").toLowerCase()=== homeworld.toLowerCase()
  );
  renderCharacters(filteredCharacters);

  if (filteredCharacters.length > 0) {
    renderBtn.innerText = "Hide Characters";
  }
};
const addHomeworldFilterListeners = () => {
  const checkInputs = document.querySelectorAll(".form-check-input");
  console.log(checkInputs)
  checkInputs.forEach((input) => {
    input.addEventListener("click", () => 
      filterCharactersByHomeworld(input.value)
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBtn.addEventListener("click", toggleCharacters);
const uniqueHomeworlds=getUniqueHomeworlds(dataSet);
createHomeworldFilters(uniqueHomeworlds);
addHomeworldFilterListeners()
});


