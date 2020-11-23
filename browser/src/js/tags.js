'use strict';

// Listen for clicks on the tags and send to appropriate page if clicked.
$('.tag').click(function () {
  let location = '/tag/' + $(this).text().replace(/ /g, '-');
  window.location.href = location;
});

$('.nav-tab').click(function(e) {
  //Toggle tab link
  $(this).addClass('nav-tab-active').siblings().removeClass('nav-tab-active');

  //Toggle target tab
  $($(this).attr('href')).addClass('active').siblings().removeClass('active');
});