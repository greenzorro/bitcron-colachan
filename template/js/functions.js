(function() {
  var basic, pageFunc, plugin;

  window.onload = function() {
    pageFunc.mainMenu();
    pageFunc.searchForm();
    pageFunc.qrCode();
    pageFunc.listType();
    pageFunc.postDirectory();
    pageFunc.movies();
    pageFunc.works();
    pageFunc.aboutProgress();
    return plugin.smoothScroll();
  };

  pageFunc = {
    mainMenu: function() {
      var menu, menuIcon;
      menu = document.getElementsByClassName("header")[0].getElementsByClassName("menu_wrapper");
      menuIcon = document.getElementsByClassName("header")[0].getElementsByClassName("menu");
      return $(".header .icon-icon_menu").on("click", function() {
        if (basic.getWinSize() < 3) {
          $(menu).toggleClass("menu_wrapper_show");
        }
        if (basic.getWinSize() < 3) {
          return $(menuIcon).toggleClass("menu_active");
        }
      });
    },
    searchForm: function() {
      var inputForm, searchKeyword;
      inputForm = document.getElementsByClassName("header")[0].getElementsByTagName("input")[0];
      $(".header .search .icon-icon_search").on("click", function() {
        var thisInput;
        thisInput = $(this).parent().find("input");
        if (basic.getWinSize() > 4 && $(inputForm).val() !== "") {
          return searchKeyword(thisInput.val(), thisInput);
        }
      });
      $(inputForm).focus(function() {
        $(".header").addClass("search_on");
        return $(this).val($(this).val());
      });
      $(inputForm).blur(function() {
        return $(".header").removeClass("search_on");
      });
      $(inputForm).bind("keyup", function() {
        if (event.keyCode === 13) {
          return searchKeyword($(this).val(), $(this));
        }
      });
      return searchKeyword = function(keyword, obj) {
        if (obj.val().length) {
          return window.location = "http://" + window.location.host + "/?s=" + keyword;
        }
      };
    },
    qrCode: function() {
      if ((document.getElementsByClassName("index_header") != null) && basic.getWinSize() > 4) {
        return $(document).on("click", function(e) {
          var qr, target;
          target = $(e.target);
          qr = $(".header .qr");
          if (target.hasClass("icon-icon_qr")) {
            return qr.addClass("qr_show");
          } else {
            return qr.removeClass("qr_show");
          }
        });
      }
    },
    listType: function() {
      var setBg;
      if (document.getElementsByClassName("list")[0] != null) {
        setBg = function() {
          var i, imgs, item, j, len, len1, results, results1;
          imgs = document.getElementsByClassName("img");
          if (basic.getWinSize() < 3) {
            results = [];
            for (i = 0, len = imgs.length; i < len; i++) {
              item = imgs[i];
              results.push($(item).css("background-image", "url(" + ($(item).attr("bg")) + ")"));
            }
            return results;
          } else {
            results1 = [];
            for (j = 0, len1 = imgs.length; j < len1; j++) {
              item = imgs[j];
              results1.push($(item).removeAttr("style"));
            }
            return results1;
          }
        };
        setBg();
        return window.onresize = function() {
          return setBg();
        };
      }
    },
    postDirectory: function() {
      if (document.getElementsByClassName("toc")[0] != null) {
        $(".post a.directory").show();
        return $(".post a.directory").click(function() {
          $(this).toggleClass("directory_active");
          return $(".toc").toggleClass("toc_active");
        });
      }
    },
    movies: function() {
      if ((document.getElementById("movie") != null) && basic.getWinSize() > 4) {
        $("#movie li h3").hover(function() {
          return $(this).parent().addClass("hover");
        });
        return $("#movie li h3").mouseout(function() {
          return $(this).parent().removeClass("hover");
        });
      }
    },
    works: function() {
      var i, item, len, results, workItem;
      if ((document.getElementById("works") != null) && basic.getWinSize() < 3) {
        $(".pic a.title").remove();
        workItem = document.getElementsByClassName("pic")[0].getElementsByTagName("a");
        results = [];
        for (i = 0, len = workItem.length; i < len; i++) {
          item = workItem[i];
          results.push($(item).replaceWith("<img src='" + ($(item).attr("href")) + "'>"));
        }
        return results;
      }
    },
    aboutProgress: function() {
      if (document.getElementById("about") != null) {
        return $("#about").ready(function() {
          var i, item, len, percentage, progress, results;
          progress = document.getElementsByClassName("circle_progress");
          results = [];
          for (i = 0, len = progress.length; i < len; i++) {
            item = progress[i];
            percentage = parseInt($(item).find(".center span").html().split("%")[0]) / 100;
            results.push(plugin.setPercentage(0, percentage, $(item)));
          }
          return results;
        });
      }
    }
  };

  plugin = {
    setPercentage: function(m, n, obj) {
      var resetTime, speed;
      speed = 0.5;
      resetTime = function() {
        return obj.find(".pie_wrap span").css({
          "-webkit-transition-delay": "0",
          "transition-delay": "0",
          "-webkit-transition-duration": speed + "s",
          "transition-duration": speed + "s"
        });
      };
      if (n >= 0 && n < 0.5) {
        if (m >= 0.5) {
          resetTime();
          obj.find(".pie_left").css({
            "-webkit-transition-duration": speed / (m - n) * (m - 0.5) + "s",
            "transition-duration": speed / (m - n) * (m - 0.5) + "s"
          });
          obj.find(".pie_right").css({
            "-webkit-transition-duration": speed / (m - n) * (0.5 - n) + "s",
            "transition-duration": speed / (m - n) * (0.5 - n) + "s",
            "-webkit-transition-delay": speed / (m - n) * (m - 0.5) + "s",
            "transition-delay": speed / (m - n) * (m - 0.5) + "s"
          });
        }
        obj.find(".pie_right").css({
          "-webkit-transform": "rotate(" + (n * 360) + "deg)",
          "transform": "rotate(" + (n * 360) + "deg)"
        });
        return obj.find(".pie_left").css({
          "-webkit-transform": "rotate(0deg)",
          "transform": "rotate(0deg)"
        });
      } else if (n >= 0.5 && n <= 1) {
        if (m <= 0.5) {
          resetTime();
          obj.find(".pie_right").css({
            "-webkit-transition-duration": speed / (n - m) * (0.5 - m) + "s",
            "transition-duration": speed / (n - m) * (0.5 - m) + "s"
          });
          obj.find(".pie_left").css({
            "-webkit-transition-duration": speed / (n - m) * (n - 0.5) + "s",
            "transition-duration": speed / (n - m) * (n - 0.5) + "s",
            "-webkit-transition-delay": speed / (n - m) * (0.5 - m) + "s",
            "transition-delay": speed / (n - m) * (0.5 - m) + "s"
          });
        }
        obj.find(".pie_right").css({
          "-webkit-transform": "rotate(180deg)",
          "transform": "rotate(180deg)"
        });
        return obj.find(".pie_left").css({
          "-webkit-transform": "rotate(" + ((n - 0.5) * 360) + "deg)",
          "transform": "rotate(" + ((n - 0.5) * 360) + "deg)"
        });
      }
    },
    smoothScroll: function() {
      return $("a[href*='#']").click(function(e) {
        var $target, hash, targetOffset;
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          e.preventDefault();
          hash = this.hash.slice(1);
          if (hash.length) {
            $target = $("[name=" + hash + "]").length ? $("[name=" + hash + "]") : $("[id=" + hash + "]");
            if ($target.length) {
              targetOffset = $target.offset().top;
              return $("html,body").animate({
                scrollTop: targetOffset
              }, 800);
            }
          } else {
            return $("html,body").animate({
              scrollTop: 0
            }, 800);
          }
        }
      });
    }
  };

  basic = {
    getWinSize: function() {
      var padLandscape, padPortrait, pc, phoneLandscape, winWidth;
      phoneLandscape = 568;
      padPortrait = 768;
      padLandscape = 1024;
      pc = 1200;
      winWidth = screen.width;
      if (winWidth < phoneLandscape) {
        return 1;
      } else if (winWidth >= phoneLandscape && winWidth < padPortrait) {
        return 2;
      } else if (winWidth >= padPortrait && winWidth < padLandscape) {
        return 3;
      } else if (winWidth >= padLandscape && winWidth < pc) {
        return 4;
      } else {
        return 5;
      }
    }
  };

}).call(this);
