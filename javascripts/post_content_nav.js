(function() {
  var NavBar;

  NavBar = (function() {
    function NavBar() {
      this.mainTitle = $('.post_title > h1');
      this.navBoxUl = $('ul#page_nav');
      this.titlesForNav = this.titlesForNav();
      this.buildNavBox();
      $('li.header_link:first').css('border', 'none');
    }

    NavBar.prototype.buildNavBox = function() {
      if (this.titlesForNav.length) {
        this.mainTitle.attr('id', $.textToId(this.mainTitle.text()));
        this.appendTitlesToNavBox();
        this.addSubtopicAnchor();
        this.spaceTheTopicsTitle();
      } else {
        this.navBoxUl.hide();
        $('#container').css("text-align", "center");
        $('#post_container').css("left", 0);
      }
      return $('#page_nav').onePageNav({
        changeHash: true
      });
    };

    NavBar.prototype.appendTitlesToNavBox = function() {
      var idText, text, title, _i, _len, _ref, _results;
      this.navBoxUl.append("<li class=\"title_list_item\"><a href=\"#" + (this.mainTitle.attr('id')) + "\">" + (this.mainTitle.text()) + "</a></li>");
      _ref = this.titlesForNav;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        title = _ref[_i];
        text = $(title).text();
        idText = $.textToId(text);
        _results.push(this.appendListElemToNavBox($(title), text, idText));
      }
      return _results;
    };

    NavBar.prototype.appendListElemToNavBox = function(elem, linkText, idText) {
      var linkSettings;
      linkSettings = this.linkSettings(elem, linkText);
      return this.navBoxUl.append("<li class=\"" + linkSettings.klass + "\"><a href=\"#" + idText + "\">" + linkSettings.linkText + "</a></li>");
    };

    NavBar.prototype.addSubtopicAnchor = function() {
      var idText, topic, topics, _i, _len, _results;
      topics = $('h2,h3:not(#wistiacom_footer h3)');
      _results = [];
      for (_i = 0, _len = topics.length; _i < _len; _i++) {
        topic = topics[_i];
        idText = $.textToId($(topic).text());
        _results.push($(topic).attr('id', idText).prepend("<a class=\"subtopic_anchor\" href=\"#" + idText + "\">#</a>"));
      }
      return _results;
    };

    NavBar.prototype.linkSettings = function(elem, linkText) {
      if (window.api) {
        if (elem.is('h3')) {
          return {
            klass: "sub_link",
            linkText: $.sectionTitleToNavTitle(linkText)
          };
        } else {
          return {
            klass: "header_link",
            linkText: linkText
          };
        }
      } else {
        return {
          klass: "",
          linkText: linkText
        };
      }
    };

    NavBar.prototype.titlesForNav = function() {
      return $('h2');
    };

    NavBar.prototype.spaceTheTopicsTitle = function() {
      var $titleLink, $topicsTitleBox;
      $topicsTitleBox = $('#page_nav li:first-child');
      $titleLink = $topicsTitleBox.find('a');
      return $titleLink.css('top', ($topicsTitleBox.height() - $titleLink.height()) / 2);
    };

    return NavBar;

  })();

  $.browserEscapeCharacters = function(span) {
    return span.html(span.html().replace(/</g, '&lt;').replace(/>/g, '&gt;'));
  };

  $.textToId = function(text) {
    return text.toLowerCase().replace(/[^\s0-9a-z]/g, '').replace(/\s/g, '_');
  };

  $.sectionTitleToNavTitle = function(text) {
    if (/\:\s/.test(text)) {
      text = text.split(/\:\s/)[1];
    }
    return text;
  };

  $(function() {
    return window.navBar = new NavBar;
  });

}).call(this);
