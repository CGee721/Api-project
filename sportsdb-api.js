const baseURL =('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal');
const key='1';
let div = document.getElementById('charles');
let p = Math.floor(Math.random() * 24);

fetch(baseURL)
    .then(function(result) {
      console.log(result)
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      display(json);
     })

function display(json) {
      let players = document.createElement('img')
      players.src = json.player[p].strFanart1;
      div.appendChild(players)

      let name = document.createElement('h2')
      name.innerText = json.player[p].strPlayer;
      div.appendChild(name)

      let height = document.createElement('h3')
      height.innerText = json.player[p].strHeight;
      div.appendChild(height)

      let weight = document.createElement('h3')
      weight.innerText = json.player[p].strWeight;
      div.appendChild(weight)

      let position = document.createElement('h3')
      position.innerText = json.player[p].strPosition;
      div.appendChild(position)

}






 

 