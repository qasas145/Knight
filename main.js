const header=document.querySelector('.header-wrapper .navbar')
// part of the navbar mobile in that app
// /************ */
  var myBtn=document.getElementById('myBtn')
  myBtn.addEventListener('click', function(){
    var el=document.getElementById('navbar')
    el.classList.toggle('navbar-mobile')
    myBtn.classList.toggle('myBtnClose')
  })
// end of that part
// *************************** */
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 0) {
        header.classList.add('bgHeader')
    }
    else {
        header.classList.remove('bgHeader')
    }
})
function backToTop() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
// *********************************
// part of the main.js the main
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  /**
   * Scrool with ofset on links with a class name .scrollto
   */
   const glightbox = GLightbox({
    selector: '.glightbox'
  });
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });
  /**
   * Portfolio details slider
   */
   const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });