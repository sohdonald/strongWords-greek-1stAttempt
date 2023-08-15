function renderGerbils(html, element) {
    console.log(html);
    let privateName = element.name;
    let gerbilServed = element.yearsServed;
    let gerbilList = document.createElement("li");
    let findAge = document.querySelector("#gerbilAge");
    let findName = document.querySelector("#gerbilName");
    let placeGerbilPic = document.querySelector("#gerbilPic");
    let findServed = document.querySelector("#yearsServed");
    gerbilList.textContent = privateName;
    html.append(gerbilList);
    gerbilList.addEventListener("click", () => {
      gerbilList.style.color = "navy";
      let ageNumber = element.age;
      findAge.textContent = ageNumber;
      findServed.textContent = gerbilServed;
      // display image on screen when name is clicked
      let getGerbilPic = element.picture;
      findName.textContent = privateName;
      placeGerbilPic.setAttribute("src", getGerbilPic);
    });
  }
  
  function addRecruit(url, rank, nameGerbil, ageGerbil, imgGerbil, servedYears) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameGerbil,
        age: ageGerbil,
        picture: imgGerbil,
        yearsServed: servedYears,
      }),
    }) //fetch ends
      .then(function (response) {
        return response.json();
      })
      .then((newGerbil) => {
        // which element is passed to renderGerbils?
        // html element ol showGerbilPrivates, showGerbilCorporals...
        // use url to display new gerbil to the right rank list
        // if (rank is private) {showGerbilPrivates}
        // if (rank === "Private") {showGerbilPrivates}
        // need conditional
        if (rank === "Private") {
          renderGerbils(showGerbilPrivates, newGerbil)
        } else if (rank === "Corporal") {
          renderGerbils(showGerbilCorporals, newGerbil)
        } else {
          renderGerbils(showGerbilSergents, newGerbil)
        }
        
      });
  }