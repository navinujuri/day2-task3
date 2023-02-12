const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const Apikey = "9ce40401";

const parent = document.createElement("div");
parent.style.display = "flex";
parent.style.justifyContent = "flex-start";
parent.style.alignItems = "center";
parent.style.border = "2px solid red";
parent.style.width = "400px";
parent.style.marginTop = "20px";

async function fun() {
  parent.innerHTML = "";
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=9ce40401&t=${inp.value}`
    );
    const data = await res.json();

    if (data.Response == "True") {
      const { Actors, Director, Poster, Title, Year, imdbRating } = data;
      btn.insertAdjacentElement("afterend", parent);

      parent.innerHTML = `<ul style="list-style: none;">
      <li><img src=${Poster} alt="poster" /></li>
      <li>Title: ${Title}</li>
      <li>  Year: ${Year}</li>
      <li>imdbRating:${imdbRating}</li>
      <li> Director:${Director}</li>
      <li>Cast & Crew: ${Actors}</li>
    </ul> `;
      inp.value = "";
    } else {
      parent.innerText = "No Search Results Found";
    }
  } catch (e) {
    console.log(e);
  }
}
