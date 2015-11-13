(function ($, window) {
  'use strict';

  var feeds = {
    blogs: 'https://api.myjson.com/bins/37qfi',
    profiles: 'https://api.myjson.com/bins/3ocnm',
    podcasts: 'https://api.myjson.com/bins/56gq6',
    testimonials: 'https://api.myjson.com/bins/1ufqm'
  };

  var ourProduct = 'vr';

  var products = {
    drones: 'https://api.myjson.com/bins/2x0mm',
    cats: 'https://api.myjson.com/bins/2z5se',
    robots: 'https://api.myjson.com/bins/3mrei',
    vr: 'https://api.myjson.com/bins/3owka'
  };

  // content functions
  var content = {
    about: function () {
      updateTestimonialContent(feeds.testimonials);
    },
    blogs: function () {
      updateContent(feeds.blogs)
    },
    podcasts: function () {
      updateContent(feeds.podcasts);
    },
    products: function () {
      updateProductsContent(products[ourProduct]);
    },
    team: function () {
      updateTeamContent(feeds.profiles)
    }
  };

  var route = window.location.pathname;

  switch (route) {
    case '/':
    case '/index.html': //intended fallthrough
      break;

    case '/about.html':
      content.about();
      break;

    case '/blogs.html':
      content.blogs();
      break;

    case '/podcasts.html':
      content.podcasts();
      break;

    case '/products.html':
      content.products();
      break;

    case '/team.html':
      content.team();
      break;

    default:
      break;
  }

  /**
   * Content fetch/update functions.
   */
  function updateContent(feedUrl) {
    $.ajax({
      url: feedUrl
    })
      .done(function (data) {
        console.log(data);
        var content = '';
        data.forEach(function (val) {
          content += '<h3>' + val.Title + '</h3>';
          content += '<p>' + val.Body + '</h3>';
        });
        $('#main .inner').html(content);
      });
  }

  function updateTestimonialContent(feedUrl) {
    $.ajax({
      url: feedUrl
    })
      .done(function (data) {
        console.log(data);
        var content = '';
        data.forEach(function (val) {
          content += '<h3>' + val.Name + '</h3>';
          content += '<p>' + val.Testimonial + '</h3>';
        });
        $('#main .inner').html(content);
      });
  }

  function updateProductsContent(feedUrl) {
    $.ajax({
      url: feedUrl
    })
      .done(function (data) {
        console.log(data);
        var content = '';
        data.forEach(function (val) {
          content += '<h3>' + val.Title + '</h3>';
          content += '<img src="/scripts/thumb/thumb.php?url=' + val.Picture + '?width=300&height=200" />';
          content += '<p>' + val.Description + '</h3>';
        });
        $('#main .inner').html(content);
      });
  }

  function updateTeamContent(feedUrl) {
    $.ajax({
      url: feedUrl
    })
      .done(function (data) {
        var teamData = data.filter(function (element) {
          return (element['Team #'] === 5);
        });

        console.log(teamData);
        var content = '';
        teamData.forEach(function (val) {
          content += '<h3>' + val.Name   + '</h3>';
          content += '<p>' + val.Bio + '</h3>';
        });
        $('#main .inner').html(content);
      });
  }

}(jQuery, window));
