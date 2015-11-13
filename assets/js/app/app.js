(function ($, window) {
  'use strict';

  var feeds = {
    blogs: 'https://api.myjson.com/bins/37qfi',
    profiles: 'https://api.myjson.com/bins/3ocnm',
    podcasts: 'https://api.myjson.com/bins/56gq6',
    testimonials: 'https://api.myjson.com/bins/1ufqm'
  };

  var products = {
    drones: 'https://api.myjson.com/bins/2x0mm',
    cats: 'https://api.myjson.com/bins/2z5se',
    robots: 'https://api.myjson.com/bins/3mrei',
    vr: 'https://api.myjson.com/bins/3owka'
  };

  // content functions
  var content = {
    blogs: function() {
      $.ajax({
        url: feeds.blogs
      })
        .done(function (data) {
          var content = '';
          data.forEach(function (val) {
            content += '<h3>' + val.Title + '</h3>';
            content += '<p>' + val.Body + '</h3>';
          });
          $('#main .inner').html(content);
        });
    }
  };

  var route = window.location.pathname;

  switch (route) {
    case '/':
    case '/index.html': //intended fallthrough
      break;

    case '/about.html':
      break;

    case '/blogs.html':
      content.blogs();
      break;

    default:
      break;
  }

}(jQuery, window));
