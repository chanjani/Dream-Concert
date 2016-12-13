 var c = "2017/11/15";
     $("#days")
  .countdown(c, function(event) {
    $(this).text(
      event.strftime('%D')
    );
  });
            $("#hours")
  .countdown(c, function(event) {
    $(this).text(
      event.strftime('%H')
    );
  });
            $("#min")
  .countdown(c, function(event) {
    $(this).text(
      event.strftime('%M')
    );
  });