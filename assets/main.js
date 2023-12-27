jQuery(document).ready(() => {
  // Scrolling
  const sections = document.querySelectorAll("section")
  const navLi = document.querySelectorAll(".navbar .navbar-nav a")
  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active")
      if (li.classList.contains(current)) {
        li.classList.add("active")
      }
    });
  });

  // Themes
  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const useTheme = (theme) => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-bs-theme", "light")
      jQuery("#btn-theme-light").addClass("d-none")
      jQuery("#btn-theme-dark").removeClass("d-none")
    } else if (theme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "dark")
      jQuery("#btn-theme-light").removeClass("d-none")
      jQuery("#btn-theme-dark").addClass("d-none")
    }
  }

  useTheme(getPreferredTheme())
  jQuery("#btn-theme-light").on('click', function() {
    useTheme("light")
    setStoredTheme("light")
  });
  jQuery("#btn-theme-dark").on('click', function() {
    useTheme("dark")
    setStoredTheme("dark")
  });
})
