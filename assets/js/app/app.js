(function ($) {
  'use strict';

  var key;
  var feeds = {
    'blogs': 'https://api.myjson.com/bins/37qfi',
    'team': 'https://api.myjson.com/bins/3ocnm',
    'podcasts': 'https://api.myjson.com/bins/56gq6',
    'testimonials': 'https://api.myjson.com/bins/1ufqm',
  };

  var products = {
    'drones': 'https://api.myjson.com/bins/2x0mm',
    'cats': 'https://api.myjson.com/bins/2z5se',
    'robots': 'https://api.myjson.com/bins/3mrei',
    'vr': 'https://api.myjson.com/bins/3owka'
  };

  for (key in feeds) {
    $.ajax({
      url: feeds[key]
    })
      .done(updateFeedContent);
  }

  function updateFeedContent(data) {
    console.log(data);
  }

}(jQuery));

