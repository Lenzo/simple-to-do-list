var $input = $('#list-input');
var $list = $('.list');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
  $input.val('');
});

$li.on('click', 'li', function () {
  $li.toggleClass('strike');
});
