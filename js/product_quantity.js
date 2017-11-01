$(document).ready(function() {
      $('.less_goods').click(function () {
        var $input = $(this).parent().find('input[name="product_quantity"]');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.more_goods').click(function () {
        var $input = $(this).parent().find('input[name="product_quantity"]');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    });
