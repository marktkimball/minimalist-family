(function (d, s, c, o) {
  console.info({ d, s, c, o });
  var js = d.createElement(s),
    fjs = d.getElementsByTagName(s)[0];
  var h = 'https:' == document.location.protocol ? 'https:' : 'http:';
  js.src = h + '//js.boxcast.com/v3.min.js';
  js.onload = function () {
    boxcast
      .noConflict()('#boxcast-widget-' + c)
      .loadChannel(c, o);
  };
  js.charset = 'utf-8';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'xitozwc5ayisqvml6map', {
  showTitle: 1,
  showDescription: 1,
  showHighlights: 1,
  showRelated: true,
  defaultVideo: 'next',
  market: 'house-of-worship',
  showDocuments: true,
  showIndex: true,
  showDonations: false,
  layout: 'playlist-to-right',
});
