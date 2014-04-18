(function() {
  var performSearch;

  performSearch = function() {
    var enteredQuery;
    enteredQuery = $('#searchField').val().replace(/[ ]/g, '_');
    return window.location.replace("" + basepath + "/search?query=" + enteredQuery);
  };

  $('#search button').on('click', function() {
    return performSearch();
  });

  $(window).keyup(function(e) {
    if (e.keyCode === 191) {
      return searchField.focus();
    }
  });

  $('#searchField').keyup(function(e) {
    if (e.keyCode === 13) {
      return performSearch();
    }
  });

}).call(this);
