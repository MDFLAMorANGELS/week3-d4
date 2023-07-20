// Fonction pour effectuer la recherche de films
function searchMovies(apiKey, searchQuery) {
    const apiUrl = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data['Search']) {
            console.log(data)
          const resultContainer = document.getElementById('resultContainer');
          resultContainer.innerHTML = ''; // Effacer les résultats précédents
  
          data['Search'].forEach(movie => {
            const movieTitle = movie['Title'];
            const movieYear = movie['Year'];
            const moviePoster= movie['Poster'];
            resultContainer.innerHTML += `<div class="card mx-3 my-4 rounded-3" style="width: 20rem;">
            <img src="${moviePoster}" class="card-img-top" alt="Affiche du film ${movieTitle}">
            <div class="card-body">
              <h5 class="card-title">${movieTitle}</h5>
              <p class="card-text">${movieYear}</p>
              <button class="btn btn-primary">View More</button>
            </div>
          </div>`
          });
        } else {
          console.log('Aucun film trouvé.');
          const resultContainer = document.getElementById('main');
          resultContainer.innerHTML += `<div>
          <p class="text-center">Aucun film trouvé</p>
          </div>`
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }

  // Écouter l'événement de soumission du formulaire
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const apiKey = '19a1bd43';
    const searchQuery = document.getElementById('searchBar').value;
    searchMovies(apiKey, searchQuery);
  });