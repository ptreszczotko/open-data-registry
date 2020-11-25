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

$('.modal').on('show.bs.modal', function(e) {
  const id = e.relatedTarget.dataset.postid;
  const title = e.relatedTarget.dataset.title;
  // $.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //   .then(data => {
  //     $('.modal-title', this).text(data.title);
  //     $('.modal-body', this).html(data.body);
  //   });

  $( '.modal-body').load('https://htmtopdf.herokuapp.com/ipynbviewer/temp/4d4c756d738f790ec8f66349cf132cd8/us-election-results-2020.html?t=1606190103648', function(a,b) {
    
  });

  $('.modal-title', this).html(title);

});

