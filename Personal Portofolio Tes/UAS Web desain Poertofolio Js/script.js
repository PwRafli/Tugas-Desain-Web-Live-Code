// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle")
    const navbar = document.getElementById("navbar")
    const menuIcon = document.getElementById("menu-icon")

    if (menuToggle && navbar && menuIcon) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active")
            menuIcon.classList.toggle("bx-menu")
            menuIcon.classList.toggle("bx-x")
        })

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll(".nav-link")
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active")
                menuIcon.classList.remove("bx-x")
                menuIcon.classList.add("bx-menu")
            })
        })
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".nav-link")

    function updateActiveNav() {
        const scrollY = window.pageYOffset

        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight
            const sectionTop = section.offsetTop - 100
            const sectionId = section.getAttribute("id")
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"))
                if (navLink) {
                    navLink.classList.add("active")
                }
            }
        })
    }

    window.addEventListener("scroll", updateActiveNav)

    // Header background on scroll
    const header = document.querySelector(".header")

    function updateHeaderBackground() {
        if (window.scrollY > 100) {
            header.style.background = "rgba(31, 36, 45, 0.95)"
        } else {
            header.style.background = "rgba(31, 36, 45, 0.9)"
        }
    }

    window.addEventListener("scroll", updateHeaderBackground)

    // ScrollReveal animations
    const ScrollReveal = window.ScrollReveal // Declare the ScrollReveal variable
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2500,
            delay: 400,
            reset: true,
        })

        // Header animations
        sr.reveal(".logo", {
            delay: 200,
            origin: "left",
        })

        sr.reveal(".navbar", {
            delay: 400,
            origin: "top",
        })

        sr.reveal(".header-btn", {
            delay: 600,
            origin: "right",
        })

        // Home section animations
        sr.reveal(".greeting", {
            delay: 800,
            origin: "top",
        })

        sr.reveal(".home-text h1", {
            delay: 1000,
            origin: "left",
        })

        sr.reveal(".home-text p", {
            delay: 1200,
            origin: "right",
        })

        sr.reveal(".btn-group", {
            delay: 1400,
            origin: "bottom",
        })

        sr.reveal(".home-img", {
            delay: 1600,
            origin: "right",
        })

        sr.reveal(".social-share", {
            delay: 1800,
            origin: "bottom",
        })

        // Content section animations
        sr.reveal(".section-header", {
            delay: 200,
            origin: "top",
        })

        sr.reveal(".sidebar", {
            delay: 400,
            origin: "left",
        })

        sr.reveal(".main-content", {
            delay: 600,
            origin: "right",
        })
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            const targetSection = document.querySelector(targetId)

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                })
            }
        })
    })

    // Loading animation
    window.addEventListener("load", () => {
        document.body.classList.add("loaded")
    })
})

// Error handling for missing elements
function handleError(error) {
    console.warn("Portfolio Script Warning:", error.message)
}

// Intersection Observer for performance
if ("IntersectionObserver" in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view")
            }
        })
    }, observerOptions)

    // Observe sections for animations
    document.querySelectorAll("section").forEach((section) => {
        observer.observe(section)
    })
}  