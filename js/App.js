// OGÓLNA FUNKCJA
function randomString() {
  var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
  var str = '', i;
  for (i = 0; i < 10; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

// komunikacja z serwerem
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': <[1496]>,
  'X-Auth-Token': <[9c686913b5c141fc12d7f2b222d89d2b]>
};

// pobieranie z serwera informacji
$.ajaxSetup({
  headers: myHeaders
  $.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
  });

});

// tworzenie kolumn
function setupColumns(columns) {
  columns.forEach(function (column) {
    var col = new Column(column.id, column.name);
      board.createColumn(col);
      setupCards(col, column.cards);
  });
}

function setupCards(col, cards) {
  cards.forEach(function (card) {
    var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    col.createCard(card);
  })
}