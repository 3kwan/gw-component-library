(function() {
    var $tips = `
	  <style type="text/css">
		  #tips {
			  display: none;
			  z-index: 10000;
			  position: absolute;
			  top: 0;
			  left: 0;
			  width: 100%;
			  height: 100%;
			  background-color: rgba(0, 0, 0, 0.9);
		  }
		  
		  #tips .tips-cont {
			  position: absolute;
			  top: 50%;
			  left: 50%;
			  width: 100%;
			  -webkit-transform: translate(-50%, -50%);
			  transform: translate(-50%, -50%);
		  }
		  
		  #tips .tips-cont i {
			  display: block;
			  margin: 0 auto;
			  width: 1.65rem;
			  height: 1.74rem;
			  background: url("//game.gtimg.cn/images/game/cp/a20170601fbh/i_tips.png") no-repeat;
			  background-size: 1.65rem 1.74rem;
		  }
		  
		  #tips .tips-cont span {
			  display: block;
			  margin-top: .2rem;
			  font-size: .3rem;
			  text-align: center;
			  color: #fff;
		  }
		  /*@media all and (orientation: landscape) {
			  #tips {
				  display: block;
			  }
		  }
		  
		  @media all and (orientation: portrait) {
			  #tips {
				  display: none;
			  }
		  }*/
	  </style>
	  <div id="tips">
		  <div class="tips-cont">
			  <i></i>
			  <span>请保持竖屏</span>
		  </div>
	  </div>
	  `;
    var container = document.createElement("div");
    container.addEventListener("touchmove", function(e) {
        e.preventDefault();
        return false;
	});
	container.style.width="100%"
    container.innerHTML = $tips;
    document.body.appendChild(container);

    function setFontSize(k) {
        document.documentElement.style.fontSize =
            (((k / 750) * 100) / 16) * 100 + "%";
    }

    function initRem() {
        var W = document.documentElement.clientWidth;
        var H = document.documentElement.clientHeight;
        if (W < H) {
            setFontSize(W);
        } else {
            setFontSize(H);
        }
    }
    const tips = document.getElementById("tips");
    tips.addEventListener(
        "touchstart",
        function(e) {
            e.preventDefault();
            e.stopPropagation();
        },
        {
            passive: true
        }
    );
    var time = null;

    function changeOrientation() {
        var scrollTop = Math.max(
            window.pageYOffset,
            document.body.scrollTop,
            document.documentElement.scrollTop
        );
        clearTimeout(time);
        if (window.orientation == 90 || window.orientation == -90) {
            time = setTimeout(function() {
                clearTimeout(time);

				var offset = -1;
                if (scrollTop === 0) {
                    offset = 1;
                }
                window.scrollTo(0, scrollTop + offset);
                tips.style.top = scrollTop + offset + "px";
                tips.style.display = "block";
            }, 200);
            const maskShow = new CustomEvent("maskShow", {
                detail: {}
            });
            window.dispatchEvent(maskShow);
        } else {
            tips.style.display = "none";
            time = setTimeout(function() {
                clearTimeout(time);
                var offset = -1;
                if (scrollTop === 0) {
                    offset = 1;
                }
                window.scrollTo(0, scrollTop + offset);
            }, 200);

            const maskHide = new CustomEvent("maskHide", {
                detail: {}
            });
            window.dispatchEvent(maskHide);
        }
    }
    window.addEventListener(
        "onorientationchange" in window ? "orientationchange" : "resize",
        changeOrientation,
        false
    );
    document.addEventListener("DOMContentLoaded", initRem, false);
})();
