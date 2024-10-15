fetch('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyD9B9w6BEhFoJJW108S6hDGx9YMEY7AiDc')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));