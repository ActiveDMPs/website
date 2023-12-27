jQuery(document).ready(() => {
  // Scrolling
  const sections = document.querySelectorAll("section")
  const navLi = document.querySelectorAll(".navbar .navbar-nav a")
  let currentSection = null;
  window.onscroll = () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (window.scrollY >= sectionTop - 80) {
        current = section.getAttribute("id")
      }
    })

    if (current !== currentSection) {
      navLi.forEach((li) => {
        li.classList.remove("active")
        if (li.href.includes(current)) {
          li.classList.add("active")
        }
      })
      currentSection = current
    }
  }

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
  })
  jQuery("#btn-theme-dark").on('click', function() {
    useTheme("dark")
    setStoredTheme("dark")
  })

  jQuery('#table-supporters').DataTable();

  jQuery('.btn-bibtex').on('click', function() {
    const btnId = jQuery(this).attr('id')
    const bibtexId = btnId.replace('btn-', '#bibtex-')
    jQuery(this).toggleClass('active')
    jQuery(bibtexId).toggleClass('d-none')
  })
})
