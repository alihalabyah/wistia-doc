(function() {
  var Search;

  Search = (function() {
    function Search() {
      this.query = this.getQuery();
      this.getSearchResults(this.query, (function(_this) {
        return function(data) {
          var result, _i, _len, _ref;
          _this.resultHtml = "";
          _this.resultsLength = data.results.length || 0;
          if (_this.resultsLength > 0) {
            _ref = data.results;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              result = _ref[_i];
              _this.resultHtml += _this.convertJsonToHtml(result);
            }
          } else if (_this.query != null) {
            _this.resultHtml = _this.noResultsStr(_this.query);
          } else {
            _this.resultHtml = _this.suggestedSearchesStr();
          }
          _this.header = _this.buildHeader();
          return _this.renderResults();
        };
      })(this));
    }

    Search.prototype.getQuery = function() {
      return (window.location.href.split('?')[1] || "").split('=')[1];
    };

    Search.prototype.getSearchResults = function(query, callback) {
      return $.getJSON("" + basepath + "/search/" + query + "?format=json&callback=?", callback);
    };

    Search.prototype.stringify = function(str) {
      return str.replace(/_/g, ' ');
    };

    Search.prototype.noResultsStr = function(query) {
      return "<div class='no_result'>\n  <p>We couldn't find any results for your query, <span class='query'>" + (this.stringify(query)) + "</span>.\n  <p>Please try another search, or head back to the <a href='http://wistia.com/doc'>Documentation Main page</a>.</p>\n</div>";
    };

    Search.prototype.suggestedSearchesStr = function() {
      return "<h2 class='suggested-title'>Here are some of our favorites:</h2>\n<div class='result'>\n  <h2><a href='" + basepath + "/media'>Guide to Using Media in Wistia</a></h2> \n  <p class='description'>From changing the title, to embedding it on your \n  website or blog, learn all the functionality for uploaded media here.</p>\n</div>\n<div class='result'>\n  <h2><a href='" + basepath + "/projects'>Guide to Using Projects in Wistia</a></h2> \n  <p class='description'>Projects are where you store, organize, and access \n  media. Projects are the building blocks for Wistia organization.</p>\n</div>\n<div class='result'>\n  <h2><a href='" + basepath + "/wistia-basics'>Wistia Basics Video Series</a></h2> \n  <p class='description'>If you are getting started, or just need a little \n  refresher, the Wistia Basics series is just what you need. Join Chris and \n  Jeff as they take you through the key features and workflows of Wistia, \n  to make sure you get the most out of your account.</p>\n</div>";
    };

    Search.prototype.convertJsonToHtml = function(json) {
      return "<div class='result'>\n  <h2><a href='" + basepath + json.url + "'>" + json.title + "</a></h2> \n  <p class='description'>" + json.description + "</p>\n</div>";
    };

    Search.prototype.buildHeader = function() {
      var html_end_str, html_start_str, resultHeaderText;
      html_start_str = "<div class='results_header'><h1>";
      html_end_str = "</h1></div>";
      resultHeaderText = (this.query != null) && this.query.length > 0 ? "" + this.resultsLength + " results found for " + (this.stringify(this.query)) : "Enter a search to begin";
      return "" + html_start_str + resultHeaderText + html_end_str;
    };

    Search.prototype.renderResults = function() {
      return $('#results').append(this.header).append(this.resultHtml);
    };

    return Search;

  })();

  $(function() {
    var docSearch;
    return docSearch = new Search();
  });

}).call(this);
