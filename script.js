document.addEventListener("DOMContentLoaded", function () {
    // ===== Header scroll effect =====
    const header = document.getElementById("header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // ===== Mobile menu toggle =====
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
  
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
    });
  
    // ===== Smooth scroll for nav links =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
  
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPos = target.offsetTop - headerHeight - 10;
  
          window.scrollTo({
            top: targetPos,
            behavior: "smooth",
          });
        }
  
        // close mobile nav on click (mobile only)
        navLinks.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      });
    });
  
    // ===== Explore Collection button =====
    const exploreBtn = document.querySelector(".hero .btn");
    if (exploreBtn) {
      exploreBtn.addEventListener("click", () => {
        document
          .querySelector("#collections")
          .scrollIntoView({ behavior: "smooth" });
      });
    }
  
    // ===== Newsletter form =====
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const button = this.querySelector("button");
  
        if (emailInput.value) {
          button.textContent = "Subscribing...";
          button.disabled = true;
  
          setTimeout(() => {
            button.textContent = "✓ Subscribed!";
            setTimeout(() => {
              button.textContent = "Subscribe";
              button.disabled = false;
              emailInput.value = "";
            }, 2000);
          }, 1500);
        }
      });
    }
  });
  