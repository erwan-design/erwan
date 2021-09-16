      $(document).ready(function() {
            $(".nav__icon").on("click", function() {
                  $(".nav ul").toggleClass("showing");
                  $(".nav").toggleClass("radius");
            });
      });

      $(document).ready(function() {
            $(".nav ul li a").on("click", function() {
                  $(".nav ul").toggleClass("showing");
                  $(".nav").toggleClass("radius");
            });
      });
