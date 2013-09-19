$.fn.stylableRadio = function() {
  $(this).each(function() {
    var e = $(this); var i = e.attr("for"); var r = $("#" + i); 
    e.html("<span class=\"radio-before-label\"></span><span class=\"wrapper\">" + e.html() + "</span><span class=\"radio-after-label\"></span>");
    r.css({ 
       visibility: "visible", height: "1px", width: "1px", margin: "-1px", 
       position: "absolute", border: "0", padding: "0", clip: "rect(0 0 0 0)", 
       overflow: "hidden"
    });
    e.click(function() {
      $("input[name='" + r.attr("name") + "']:checked + .radio-checked", r.prop("form")).removeClass("radio-checked");
      $(this).addClass("radio-checked")
    })
  })
}
