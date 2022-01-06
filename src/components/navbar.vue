<script>
import Texts from "@/assets/texts.js";

var Lang = "en";

/**
 * Navbar component
 */
export default {
  data() {
    return {
      isCondensed: false,
      texts: Texts,
      lang: Lang,

      menuItems: [
        Texts[Lang].services,
        Texts[Lang].whowehelp,
        Texts[Lang].howitworks,
        Texts[Lang].pricing,
        Texts[Lang].about,
      ],
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
  },

  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }

    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
            }
          }
        }
      }
    }
  },
  methods: {
    /**
     * google analytics function
     */
    contact: function (refid) {
      this.$ga.event("calltoaction", "contact", "contactus" + refid, 1);
    },

    /**
     * Toggle menu
     */
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;
      console.log(event.target.nextSibling.nextSibling);
      console.log(event.target.lastChild);
      console.log(event.target.childNodes);

      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    },
  },
};
</script>

<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky"
      :class="{ 'bg-white': isWhiteNavbar === true }"
    >
      <div class="container">
        <!-- Logo container-->
        <div>
          <router-link
            class="logo"
            to="/#"
            v-scroll-to="'#' + texts[lang].banner.uid"
            v-if="navLight !== true"
          >
            <img
              src="images/cryptoconsult/logo_v1_light.png"
              height="34"
              alt=""
            />
          </router-link>
          <router-link class="logo" to="/" v-else>
            <img
              src="images/cryptoconsult/logo_v1_light.png"
              class="l-dark"
              height="34"
              alt=""
            />
            <img
              src="images/cryptoconsult/logo_v1_dark.png"
              class="l-light"
              height="34"
              alt=""
            />
          </router-link>
        </div>
        <div class="buy-button">
          <router-link
            :to="'/#' + texts[lang].contact.uid"
            v-scroll-to="'#' + texts[lang].contact.uid"
            id="contact_btn_header"
            :click="contact(4)"
            class="btn"
            :class="{
              'btn-light': navLight === true,
              'btn-primary': navLight !== true,
            }"
            >{{ texts[lang].btn_start }}
          </router-link>
        </div>
        <!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a
              class="navbar-toggle"
              @click="toggleMenu()"
              :class="{ open: isCondensed === true }"
            >
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <div id="navigation">
          <!-- Navigation Menu-->
          <ul
            class="navigation-menu"
            :class="{ 'nav-light': navLight === true }"
          >
            <li v-for="(menuItem, mindex) in menuItems" :key="mindex">
              <router-link
                to="/#"
                v-scroll-to="'#' + menuItem.uid"
                class="side-nav-link-ref"
                >{{ menuItem.uid }}</router-link
              >
            </li>
          </ul>
          <!--end navigation menu-->
          <div class="buy-menu-btn d-none">
            <router-link
              :to="'/#' + texts[lang].contact.uid"
              v-scroll-to="'#' + texts[lang].contact.uid"
              id="contact_btn_header_mob"
              :click="contact(4)"
              class="btn"
              :class="{
                'btn-light': navLight === true,
                'btn-primary': navLight !== true,
              }"
              >{{ texts[lang].btn_start }}
            </router-link>
          </div>
          <!--end login button-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>
