<script>
import { ArrowUpIcon, ChevronRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import { Carousel, Slide } from "vue-carousel";

import Texts from "@/assets/texts.js";

/**
 * Index-landing-two component
 */
export default {
  data() {
    return {
      texts: Texts,
      lang: "en",
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ChevronRightIcon,
    Carousel,
    Slide,
  },

  methods: {
    contact: function (refid) {
      this.$ga.event("calltoaction", "contact", "contactus" + refid, 1);
    },
    contactusprice: function (refid) {
      this.$ga.event("calltoaction", "contact", "contactusprice" + refid, 1);
    },
    schedule: function (refid) {
      this.$ga.event("calltoaction", "schedule", "schedule", 1);
    },
  },
  mounted() {
    this.$ga.page("/");
  },

  mounted() {
    var section = this.$router.currentRoute.hash.replace("#", "");
    if (section) {
      this.$nextTick(() =>
        window.document.getElementById(section).scrollIntoView()
      );
    }
  },
};
</script>


<style lang="scss">
.card_min_height {
  min-height: 350px;
}
</style>


<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100" :id="texts[lang].banner.uid">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title-heading mt-4">
              <h1 class="display-4 font-weight-bold mb-3">
                {{ texts[lang].banner.title }}<br />
              </h1>
              <p class="para-desc text-muted">
                {{ texts[lang].banner.subtitle }}
              </p>
              <button
                class="btn btn-primary"
                v-scroll-to="'#' + texts[lang].contact.uid"
                id="contact_btn_header"
                :click="contact(1)"
              >
                {{ texts[lang].btn_start }}
              </button>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6">
            <!-- <img src="images/illustrator/Creativity-bro.svg" alt="" /> -->
            <!-- <img src="images/rocket.svg" alt="" /> -->
            <img src="images/illustrator/Startup_SVG.svg" alt="" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- start grey -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    <section class="section bg-light" :id="texts[lang].services.uid">
      <div class="container mb-100">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h6 class="text-primary">{{ texts[lang].services.uid }}</h6>
              <h4 class="title mb-4">{{ texts[lang].services.title }}</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                {{ texts[lang].services.subtitle }}

                {{ texts[lang].services.disclaimer }}
                <router-link to="/page-terms" class="text-foot">
                  Terms of Services</router-link
                >.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div
            v-for="(service, skey) in texts[lang].services.types"
            :key="skey"
            class="col-lg-4 col-md-6 col-12 mt-4 pt-2"
          >
            <div
              class="card_min_height card features explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center"
            >
              <div class="icons rounded h1 text-center text-primary px-3">
                <i class="" :class="service.icon"></i>
              </div>

              <div class="card-body p-0 content">
                <h5 class="mt-4">
                  <a href="javascript:void(0)" class="title text-dark">{{
                    service.title
                  }}</a>
                </h5>
                <p class="text-muted">
                  {{ service.subtitle }}
                </p>
                <!-- <a href="javascript:void(0)" class="text-primary"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a> -->
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>

    <!-- end grey section -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    <section class="section" :id="texts[lang].whowehelp.uid">
      <div class="container mb-100">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h6 class="text-primary">{{ texts[lang].whowehelp.uid }}</h6>
              <h4 class="title mb-4">{{ texts[lang].whowehelp.title }}</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                {{ texts[lang].whowehelp.subtitle }}

                {{ texts[lang].services_disclaimer }}
                <router-link to="/page-terms" class="text-foot">
                  Terms of Services</router-link
                >.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row align-items-center">
          <div class="col-lg-8 col-md-8 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="section-title text-md-left text-center ml-lg-4">
              <div
                v-for="(whotype, key) in texts[lang].whowehelp.types"
                :key="key"
                class="media align-items-top text-left mt-4 pt-2"
              >
                <div
                  class="text-primary h4 mb-0 mr-3 p-3 rounded-md shadow bg-white"
                >
                  <i :class="whotype.icon"></i>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0)" class="text-dark h4">{{
                    whotype.title
                  }}</a>
                  <p>{{ whotype.subtitle }}</p>
                </div>
              </div>
              <!-- end v-for media -->

              <div class="media align-items-center text-left mt-4 pt-2">
                <button
                  class="btn btn-primary"
                  v-scroll-to="'#' + texts[lang].contact.uid"
                  :click="contact(2)"
                >
                  {{ texts[lang].btn_start }}
                </button>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-4">
            <img
              src="images/landing/1.jpg"
              class="img-fluid rounded-md shadow-lg"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- start grey -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    <section class="section bg-light" :id="texts[lang].howitworks.uid">
      <div class="container mb-100">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h6 class="text-primary">{{ texts[lang].howitworks.uid }}</h6>
              <h4 class="title mb-4">{{ texts[lang].howitworks.title }}</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                {{ texts[lang].howitworks.subtitle }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row align-items-center d-flex justify-content-center">
          <div class="col-lg-4 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <img src="images/illustrator/faq.svg" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-8 col-md-8">
            <div class="faq-content">
              <div class="accordion" id="accordionExampleone">
                <b-card
                  v-for="(detail, index) in texts[lang].howitworks.details"
                  :key="index"
                  no-body
                  class="mb-2 rounded border-bottom"
                >
                  <b-card-header class="border-0 bg-light p-3 pr-5">
                    <a
                      class="faq position-relative text-dark"
                      v-b-toggle="'accordion-' + index"
                      href="javascript: void(0);"
                    >
                      <h6 class="title mb-0">{{ detail.title }}</h6>
                    </a>
                  </b-card-header>
                  <b-collapse
                    :id="'accordion-' + index"
                    :visible="index == 0"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="px-2 py-4">
                      <p class="text-muted mb-0 faq-ans">{{ detail.text }}</p>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- end grey section -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    <section class="section" :id="texts[lang].pricing.uid">
      <div class="container mb-100">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h6 class="text-primary">{{ texts[lang].pricing.uid }}</h6>
              <h4 class="title mb-4">
                {{ texts[lang].pricing.title }}
              </h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                {{ texts[lang].pricing.subtitle }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row align-items-center">
          <div
            v-for="(pkgitem, pindex) in texts[lang].pricing.packages"
            :key="pindex"
            class="col-md-4 col-12 mt-4 pt-2"
          >
            <div
              class="card pricing-rates business-rate shadow bg-light rounded text-center border-0"
            >
              <div class="card-body py-5">
                <h2 class="title text-uppercase mb-4">{{ pkgitem.title }}</h2>
                <div class="d-flex justify-content-center mb-4">
                  <span class="h4 mb-0 mt-2">$</span>
                  <span class="price h1 mb-0">{{ pkgitem.price }}</span>
                  <!-- <span class="h4 align-self-end mb-1">/mo</span> -->
                </div>

                <ul
                  v-for="(pkgItem, pkgitemIndex) in pkgitem.items"
                  :key="pkgitemIndex"
                  class="list-unstyled mb-0 pl-0"
                >
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2">
                      <!-- <i class="uim uim-check-circle"></i> --> </span
                    >{{ pkgItem }}
                  </li>
                </ul>
                <a
                  href="javascript:void(0)"
                  :click="contactusprice(pindex)"
                  v-scroll-to="'#' + texts[lang].contact.uid"
                  class="btn btn-primary mt-4"
                >
                  {{ texts[lang].btn_start }}
                </a>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>

    <!-- start grey -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    <section class="section bg-light" :id="texts[lang].about.uid">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h6 class="text-primary">{{ texts[lang].about.uid }}</h6>
              <h4 class="title mb-4">{{ texts[lang].about.title }}</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                {{ texts[lang].about.subtitle }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div
            v-for="(highlight, aind) in texts[lang].about.highlights"
            :key="aind"
            class="col-lg-4 col-md-6 mt-4 pt-2"
          >
            <div class="card text-center border-0 bg-light">
              <div class="position-relative">
                <img
                  :src="highlight.img"
                  class="img-fluid avatar avatar-ex-large rounded-circle shadow"
                  alt=""
                />
              </div>
              <div class="card-body py-3 px-0 content">
                <h5 class="mb-0 mt-3">{{ highlight.heading }}</h5>
                <h6 class="mb-0 mt-3">{{ highlight.text }}</h6>
                <h5 class="mb-0 mt-3">
                  <a href="javascript:void(0);" class="name text-dark">
                    {{ highlight.footer }}
                  </a>
                </h5>
                <small class="designation text-muted">{{
                  highlight.footer2
                }}</small>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- end grey section -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Start Contact -->
    <section class="section pb-100" :id="texts[lang].contact.uid">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h6 class="text-primary">{{ texts[lang].contact.uid }}</h6>
              <h4 class="title mb-4">
                {{ texts[lang].contact.title }}
              </h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                {{ texts[lang].contact.subtitle }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div
            v-for="(way, wkey, wind) in texts[lang].contact.ways"
            :key="wind"
            class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="card contact-detail text-center border-0">
              <div class="card-body">
                <div class="icon">
                  <i class="h1 text-primary" :class="way.icon"></i>
                </div>

                <div class="content mt-3" v-if="way.type != 'calendly'">
                  <h4 class="title font-weight-bold">{{ way.title }}</h4>
                  <a :href="way.ref" class="text-primary">{{ way.label }}</a>
                </div>

                <div class="content mt-3" v-if="way.type == 'calendly'">
                  <a
                    :href="way.ref"
                    target="_blank"
                    rel="noopener noreferrer"
                    :click="schedule()"
                    class="btn btn-primary btn-pills btn-lg mt-4 text-center"
                  >
                    {{ way.title }}
                    <i class="ml-2" :class="way.icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End contact -->
    <!--end section-->

    <Footer />
    <!-- Footer End -->
    <!-- <Switcher /> -->
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-soft-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>
