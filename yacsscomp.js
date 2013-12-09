(function ($) {
    "use strict";

    $.fn.stylableRadio = function(arg) {
        var select = function(r) {
            var id = r.attr("id"), name = r.attr("name"), 
            form = r.prop("form");

            $("input[name='" + name + "'] + .radio-checked", form).
                removeClass("radio-checked");

            $("label[for="+id+"]", form).addClass("radio-checked");
            
            return r;
        };

        if (arg == "select") {
            return $(this).trigger("click")
        }

        // ---

        $(this).each(function() {
            var e = $(this); 

            if (e.hasClass("yacsscomp")) { /* Skip */ return true }

            var i = e.attr("for"), r = $("#" + i); 
            e.addClass("yacsscomp").html("<span class=\"radio-before-label\"></span><span class=\"wrapper\">" + e.html() + "</span><span class=\"radio-after-label\"></span>");
            r.css({ 
                visibility: "visible", height: "1px", width: "1px", 
                margin: "-1px", position: "absolute", border: "0", 
                padding: "0", clip: "rect(0 0 0 0)", overflow: "hidden"
            });
            if (r.is(":checked")) { e.addClass("radio-checked") }
            e.click(function() { select(r) });
            r.click(function() { select(r) })
        })
    };

    $.fn.stylableCheckbox = function(arg) {
        var checked = function(e) {
            return e.hasClass("checkbox-checked") || e.is(":checked")
        };

        if (arg == "checked") {
            return checked($(this))
        }

        if (arg == "select") {
            var e = $(this);

            if (checked(e)) return e;
            else return e.trigger("click")
        }

        if (arg == "unselect") {
            var e = $(this);

            if (!checked(e)) return e;
            else return e.trigger("click")
        }

        // ---

        $(this).each(function() {
            var e = $(this); 
            
            if (e.hasClass("yacsscomp")) { /* Skip */ return true }
            
            var c = $("#" + e.attr("for"));
            e.addClass("yacsscomp").html("<span class=\"checkbox-before-label\"></span><span class=\"wrapper\">" + e.html() + "</span><span class=\"checkbox-after-label\"></span>");
            c.css({
                visibility: "visible", height: "1px", width: "1px", margin: "-1px",
                position: "absolute", border: "0", padding: "0", clip: "rect(0 0 0 0)",
                overflow: "hidden"
            });
            if (c.is(":checked")) { e.addClass("checkbox-checked") }
            e.click(function() {
                if (e.hasClass("checkbox-checked")) {
                    e.removeClass("checkbox-checked")
                } else e.addClass("checkbox-checked")
            })
        })
    };
})(jQuery);
