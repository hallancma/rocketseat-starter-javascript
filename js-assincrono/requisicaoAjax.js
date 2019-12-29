let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/hallancma');
xhr.send(null);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
