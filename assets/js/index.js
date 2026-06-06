var scrollBtn = document.querySelector('.scroll-btn');
var themeToggle = document.querySelector('#theme-toggle-button');
var htmlElement = document.querySelector('html');
var settingsToggle = document.querySelector('#settings-toggle');
var closeToggle = document.querySelector('#close-settings');
var settingsSidebar = document.getElementById('settings-sidebar');
var alexaFontBtn = document.getElementById('font-alexandria');
var tajawalFontBtn = document.getElementById('font-tajawal');
var cairoFontBtn = document.getElementById('font-cairo');
var bodyElement = document.body;
var restartBtn = document.getElementById('reset-settings');
var filterAllBtn = document.getElementById('filter-all');
var filterWebBtn = document.getElementById('filter-web');
var filterAppBtn = document.getElementById('filter-app');
var filterDesignBtn = document.getElementById('filter-design');
var filterEcommerceBtn = document.getElementById('filter-ecommerce');
var webProjects = document.querySelectorAll('.portfolio-item[data-category="web"]');
var appProjects = document.querySelectorAll('.portfolio-item[data-category="app"]');
var designProjects = document.querySelectorAll('.portfolio-item[data-category="design"]');
var ecommerceProjects = document.querySelectorAll('.portfolio-item[data-category="ecommerce"]');
var portfolioGrid = document.getElementById('portfolio-grid');
// Show or hide the scroll-to-top button based on scroll position 

if (scrollBtn) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  scrollBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


// Theme toggle functionality
themeToggle.addEventListener('click', function () {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    settingsSidebar.classList.add('translate-x-full');
    settingsSidebar.classList.add('translate-setup');
    settingsToggle.classList.add('translate-setup');
    settingsToggle.classList.add('right-0');
    settingsToggle.classList.remove('right-320px');
  } else {
    htmlElement.classList.add('dark');
    settingsSidebar.classList.add('translate-x-full');
    settingsSidebar.classList.add('translate-setup');
    settingsToggle.classList.add('translate-setup');
    settingsToggle.classList.add('right-0');
    settingsToggle.classList.remove('right-320px');
  }
});


// Testimonial carousel functionality



// Settings sidebar toggle functionality
if (settingsToggle && settingsSidebar) {
  settingsToggle.addEventListener('click', function () {
    if (settingsSidebar.classList.contains('translate-x-full')) {
      settingsSidebar.classList.remove('translate-x-full');
      settingsSidebar.classList.add('translate-setup');
      settingsToggle.classList.add('translate-setup');
      settingsToggle.classList.remove('right-0');
      settingsToggle.classList.add('right-320px');
    }
  });
}
if (closeToggle && settingsSidebar) {
  closeToggle.addEventListener('click', function () {
    settingsSidebar.classList.add('translate-x-full');
    settingsSidebar.classList.add('translate-setup');
    settingsToggle.classList.add('translate-setup');
    settingsToggle.classList.add('right-0');
    settingsToggle.classList.remove('right-320px');
  });
}


// Font selection functionality

tajawalFontBtn.addEventListener('click', function () {
  tajawalFontBtn.classList.add('active');
  tajawalFontBtn.classList.add('dark:bg-slate-800');
  tajawalFontBtn.classList.add('border-primary');
  tajawalFontBtn.classList.remove('border-slate-200');
  alexaFontBtn.classList.remove('dark:bg-slate-800');
  alexaFontBtn.classList.remove('border-primary');
  alexaFontBtn.classList.add('border-slate-200');
  alexaFontBtn.classList.remove('active');
  cairoFontBtn.classList.remove('active');
  cairoFontBtn.classList.remove('dark:bg-slate-800');
  cairoFontBtn.classList.remove('border-primary');
  cairoFontBtn.classList.add('border-slate-200');
  bodyElement.classList.add('font-tajawal');
  bodyElement.classList.remove('font-alexandria');
  bodyElement.classList.remove('font-cairo');
});
alexaFontBtn.addEventListener('click', function () {
  alexaFontBtn.classList.add('active');
  alexaFontBtn.classList.add('dark:bg-slate-800');
  alexaFontBtn.classList.add('border-primary');
  alexaFontBtn.classList.remove('border-slate-200');
  tajawalFontBtn.classList.remove('dark:bg-slate-800');
  tajawalFontBtn.classList.remove('border-primary');
  tajawalFontBtn.classList.add('border-slate-200');
  tajawalFontBtn.classList.remove('active');
  cairoFontBtn.classList.remove('active');
  cairoFontBtn.classList.remove('dark:bg-slate-800');
  cairoFontBtn.classList.remove('border-primary');
  cairoFontBtn.classList.add('border-slate-200');
  bodyElement.classList.add('font-alexandria');
  bodyElement.classList.remove('font-tajawal');
  bodyElement.classList.remove('font-cairo');
});
cairoFontBtn.addEventListener('click', function () {
  cairoFontBtn.classList.add('active');
  cairoFontBtn.classList.add('dark:bg-slate-800');
  cairoFontBtn.classList.add('border-primary');
  cairoFontBtn.classList.remove('border-slate-200');
  alexaFontBtn.classList.remove('dark:bg-slate-800');
  alexaFontBtn.classList.remove('border-primary');
  alexaFontBtn.classList.add('border-slate-200');
  alexaFontBtn.classList.remove('active');
  tajawalFontBtn.classList.remove('active');
  tajawalFontBtn.classList.remove('dark:bg-slate-800');
  tajawalFontBtn.classList.remove('border-primary');
  tajawalFontBtn.classList.add('border-slate-200');
  bodyElement.classList.add('font-cairo');
  bodyElement.classList.remove('font-alexandria');
  bodyElement.classList.remove('font-tajawal');
});

// Reset settings functionality
restartBtn.addEventListener('click', function () {
  bodyElement.classList.remove('font-alexandria');
  bodyElement.classList.remove('font-cairo');
  bodyElement.classList.add('font-tajawal');
  htmlElement.classList.add('dark');
  htmlElement.classList.remove('light');
  tajawalFontBtn.classList.add('active');
  tajawalFontBtn.classList.add('dark:bg-slate-800');
  tajawalFontBtn.classList.add('border-primary');
  tajawalFontBtn.classList.remove('border-slate-200');
  alexaFontBtn.classList.remove('dark:bg-slate-800');
  alexaFontBtn.classList.remove('border-primary');
  alexaFontBtn.classList.add('border-slate-200');
  alexaFontBtn.classList.remove('active');
  cairoFontBtn.classList.remove('active');
  cairoFontBtn.classList.remove('dark:bg-slate-800');
  cairoFontBtn.classList.remove('border-primary');
  cairoFontBtn.classList.add('border-slate-200');
  bodyElement.classList.add('font-tajawal');
  bodyElement.classList.remove('font-alexandria');
  bodyElement.classList.remove('font-cairo');
  htmlElement.style.setProperty('--color-primary', '#6366f1');
  htmlElement.style.setProperty('--color-secondary', '#8b5cf6');
  htmlElement.style.setProperty('--color-accent', '#a855f7');
});

// Theme color selection functionality
var mainColorOption = document.querySelectorAll('.main-color-option');
var pinkOrangeColorOption = document.querySelectorAll('.pink-orange-color-option');
var greenColorOption = document.querySelectorAll('.green-color-option');
var blueColorOption = document.querySelectorAll('.blue-color-option');
var redColorOption = document.querySelectorAll('.red-color-option');
var orangeColorOption = document.querySelectorAll('.orange-color-option');

function setThemeColors(primary, secondary, accent) {
  htmlElement.style.setProperty('--color-primary', primary);
  htmlElement.style.setProperty('--color-secondary', secondary);
  htmlElement.style.setProperty('--color-accent', accent);
}

mainColorOption.forEach(function (button) {
  button.addEventListener('click', function () {
    setThemeColors('#6366f1', '#8b5cf6', '#a855f7');
  });
});

pinkOrangeColorOption.forEach(function (button) {
  button.addEventListener('click', function () {
    setThemeColors('#ec4899', '#f97316', '#fb923c');
  });
});

greenColorOption.forEach(function (button) {
  button.addEventListener('click', function () {
    setThemeColors('#10b981', '#059669', '#34d399');
  });
});

blueColorOption.forEach(function (button) {
  button.addEventListener('click', function () {
    setThemeColors('#3b82f6', '#06b6d4', '#22d3ee');
  });
});

redColorOption.forEach(function (button) {
  button.addEventListener('click', function () {
    setThemeColors('#ef4444', '#f43f5e', '#fb7185');
  });
});

orangeColorOption.forEach(function (button) {
  button.addEventListener('click', function () {
    setThemeColors('#f97316', '#fb923c', '#f59e0b');
  });
});

// Portfolio filtering functionality
function setActiveFilterButton(activeButton) {
  var filterButtons = [filterAllBtn, filterWebBtn, filterAppBtn, filterDesignBtn, filterEcommerceBtn];
  filterButtons.forEach(function (button) {
    if (!button) return;
    var isActive = button === activeButton;
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');

    if (isActive) {
      button.classList.add('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white');
      button.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-300', 'dark:border-slate-700');
    } else {
      button.classList.remove('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white');
      button.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-300', 'dark:border-slate-700');
    }
  });

  if (activeButton && activeButton.id) {
    localStorage.setItem('selectedPortfolioFilter', activeButton.id);
  }
}

function getSavedFilterId() {
  return localStorage.getItem('selectedPortfolioFilter') || 'filter-all';
}

function restoreSavedFilter() {
  var savedFilterId = getSavedFilterId();
  var savedButton = document.getElementById(savedFilterId);
  if (savedButton) {
    savedButton.click();
  } else if (filterAllBtn) {
    filterAllBtn.click();
  }
}

function applyPortfolioFilter(category) {
  webProjects.forEach(function (project) {
    toggleProjectVisibility(project, category === 'all' || category === 'web');
  });
  appProjects.forEach(function (project) {
    toggleProjectVisibility(project, category === 'all' || category === 'app');
  });
  designProjects.forEach(function (project) {
    toggleProjectVisibility(project, category === 'all' || category === 'design');
  });
  ecommerceProjects.forEach(function (project) {
    toggleProjectVisibility(project, category === 'all' || category === 'ecommerce');
  });
}

function filterProjects(category, activeButton) {

  setActiveFilterButton(activeButton);

  var visibleProjects = Array.from(document.querySelectorAll('.project-card'));

  gsap.to(visibleProjects, {
    opacity: 0,
    y: 30,
    scale: 0.95,
    stagger: 0.05,
    duration: 0.25,
    ease: "power2.out",

    onComplete: () => {

      applyPortfolioFilter(category);

      var filteredProjects = Array.from(
        document.querySelectorAll('.project-card')
      ).filter(project => project.style.display !== 'none');

      gsap.fromTo(
        filteredProjects,
        {
          opacity: 0,
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "back.out(1.5)"
        }
      );
    }
  });
}

function toggleProjectVisibility(project, visible) {
  gsap.killTweensOf(project);
  project.style.willChange = 'opacity, transform';

  if (visible) {
    project.dataset.visible = 'true';
    project.style.display = 'block';
    gsap.fromTo(project, {
      opacity: 0,
      y: 40,
      scale: 0.9
    }, {
      duration: 0.35,
      autoAlpha: 1,
      scale: 1,
      y: 0,
      ease: 'power2.out',
      clearProps: 'willChange'
    });
  } else {
    project.dataset.visible = 'false';
    gsap.to(project, {
      duration: 0.32,
      autoAlpha: 0,
      scale: 0.94,
      y: 20,
      ease: 'power2.inOut',
      clearProps: 'willChange',
      onComplete: function () {
        if (project.dataset.visible === 'false') {
          project.style.display = 'none';
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  webProjects.forEach(function (project) {
    project.style.display = 'block';
    project.style.opacity = '1';
  });
  appProjects.forEach(function (project) {
    project.style.display = 'block';
    project.style.opacity = '1';
  });
  designProjects.forEach(function (project) {
    project.style.display = 'block';
    project.style.opacity = '1';
  });
  ecommerceProjects.forEach(function (project) {
    project.style.display = 'block';
    project.style.opacity = '1';
  });

  restoreSavedFilter();
});

filterAllBtn.addEventListener('click', function () {
  filterProjects('all', filterAllBtn);
});
filterWebBtn.addEventListener('click', function () {
  filterProjects('web', filterWebBtn);
});
filterAppBtn.addEventListener('click', function () {
  filterProjects('app', filterAppBtn);
});
filterDesignBtn.addEventListener('click', function () {
  filterProjects('design', filterDesignBtn);
});
filterEcommerceBtn.addEventListener('click', function () {
  filterProjects('ecommerce', filterEcommerceBtn);
});


//testimonials

var carousel = document.getElementById("testimonials-carousel");
var carouselCard = document.querySelectorAll(".testimonial-card");
var indicators = document.querySelectorAll(".carousel-indicator");

var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");

var currentIndex = 0;
var maxIndex = carouselCard.length - 3;

function updateSlider() {
  var cardWidth = carouselCard[0].offsetWidth;

  carousel.style.transform = `translateX(${currentIndex * cardWidth}px)`;

  indicators.forEach((dot, index) => {
    dot.classList.remove(
      "bg-accent",
      "scale-125",
      "active"
    );

    dot.classList.add(
      "bg-slate-400",
      "dark:bg-slate-600"
    );

    if (index === currentIndex) {
      dot.classList.remove(
        "bg-slate-400",
        "dark:bg-slate-600"
      );

      dot.classList.add(
        "bg-accent",
        "scale-125",
        "active"
      );
    }
  });
}

function nextSlide() {
  currentIndex++;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  updateSlider();
}

function prevSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

indicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();