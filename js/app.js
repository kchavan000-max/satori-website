/**
 * SATORI ADVERTISING & ENTERTAINMENT
 * Interactive Studio Experience (2026)
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjects();
  initVideoModal();
  initStatsObserver();
  initContactForm();
});

/* ==========================================================================
   1. NAVIGATION & SCROLL MANAGEMENT
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  const mobileBackdrop = document.querySelector(".mobile-nav-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-menu-links .nav-link");

  // Sticky header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    highlightActiveNav();
  });

  // Mobile menu drawer
  const toggleMobileMenu = (open) => {
    if (open) {
      mobileDrawer.classList.add("open");
      mobileBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    } else {
      mobileDrawer.classList.remove("open");
      mobileBackdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => toggleMobileMenu(true));
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", () => toggleMobileMenu(false));
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMobileMenu(false));
  });

  // Active navigation highlight
  function highlightActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset + 200;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  }
}

/* ==========================================================================
   2. PORTFOLIO & PROJECTS DATA
   ========================================================================== */
const PROJECTS_DATA = [
  // --- FEATURE FILMS ---
  {
    id: "imago",
    title: "Imago (2018)",
    category: "feature",
    categoryLabel: "Feature Film",
    badge: "Netflix Worldwide",
    badgeType: "gold",
    tagline: "Premiered at Jio MAMI Mumbai Film Festival • Streamed across 126 Countries on Netflix & Waves OTT",
    desc: "Critically acclaimed Marathi feature film exploring human identity, self-worth, and social stigma. Honored at Dadasaheb Phalke Film Festival, Kolhapur IFF (Best Director & Public Choice), and Chicago South Asian Film Festival.",
    laurel: "🏆 Best Director & Public Choice Award (KIFF)",
    videoType: "youtube",
    videoId: "nqsoq0Vhs2A",
    thumb: "https://img.youtube.com/vi/nqsoq0Vhs2A/maxresdefault.jpg",
    featured: true
  },
  {
    id: "bardovi",
    title: "Bardovi (2024)",
    category: "feature",
    categoryLabel: "Feature Film",
    badge: "Theatrical & Waves OTT",
    badgeType: "gold",
    tagline: "Hindi Supernatural Thriller Rooted in Indian Folklore",
    desc: "A gripping atmospheric thriller released theatrically in India and selected UK cinemas before streaming globally on Waves OTT. Established Karan S. Chavan’s signature visual language combining mythology and visceral tension.",
    laurel: "🎬 Theatrical Release in India & United Kingdom",
    videoType: "youtube",
    videoId: "r-jUhQPBJgs",
    thumb: "https://img.youtube.com/vi/r-jUhQPBJgs/maxresdefault.jpg",
    featured: true
  },

  // --- AWARD-WINNING AI CINEMA ---
  {
    id: "last-wanderer",
    title: "The Last Wanderer",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "Best AI Film Award 2026",
    badgeType: "ai",
    tagline: "Winner: Best AI Film Award at Nagpur International Film Festival 2026",
    desc: "Showcased at the prestigious AI Summit in New Delhi. A pioneering exploration of generative cinema, demonstrating how AI models amplify emotional depth, scale, and high-concept visual aesthetics.",
    laurel: "🏆 Best AI Film (Nagpur IFF 2026) • AI Summit Delhi",
    videoType: "youtube",
    videoId: "rz29KnNttIU",
    thumb: "https://img.youtube.com/vi/rz29KnNttIU/maxresdefault.jpg",
    featured: false
  },
  {
    id: "maun",
    title: "Maun (Silence)",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "AI Summit New Delhi",
    badgeType: "ai",
    tagline: "Officially Showcased at the AI Summit, New Delhi",
    desc: "An evocative psychological short film experimenting with atmospheric pacing, visual stillness, and synthetic character emotions.",
    laurel: "🏛️ Official Showcase — AI Summit New Delhi",
    videoType: "youtube",
    videoId: "8jvZNoimwnU",
    thumb: "https://img.youtube.com/vi/8jvZNoimwnU/maxresdefault.jpg",
    featured: false
  },
  {
    id: "between",
    title: "Between",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "AI Narrative",
    badgeType: "ai",
    tagline: "Liminal spaces of human consciousness",
    desc: "A visual exploration bridging dreams, subconscious memory, and surreal cinematic poetry.",
    laurel: "✨ Generative Visual Experiment",
    videoType: "youtube",
    videoId: "Ya6d_SGm-vk",
    thumb: "https://img.youtube.com/vi/Ya6d_SGm-vk/hqdefault.jpg"
  },
  {
    id: "sara",
    title: "Sara",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "AI Short",
    badgeType: "ai",
    tagline: "Intimate psychological character study",
    desc: "An AI-powered character narrative exploring grief, isolation, and fragile remembrance.",
    laurel: "✨ AI Character Study",
    videoType: "youtube",
    videoId: "qOpPHM4Ii7s",
    thumb: "https://img.youtube.com/vi/qOpPHM4Ii7s/hqdefault.jpg"
  },
  {
    id: "radheya",
    title: "Radheya",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "Mythological AI",
    badgeType: "gold",
    tagline: "Re-imagining Karna from the Indian Epic Mahabharata",
    desc: "Cinematic folklore concept visualizing the legendary tragic warrior with grand mythic scale and visual depth.",
    laurel: "🔱 Epic Folklore Concept",
    videoType: "youtube",
    videoId: "97rWGJ_PYog",
    thumb: "https://img.youtube.com/vi/97rWGJ_PYog/hqdefault.jpg"
  },
  {
    id: "vasudev",
    title: "Vasudev",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "Cultural Folklore",
    badgeType: "gold",
    tagline: "Sacred cultural wanderer traditions of Maharashtra",
    desc: "Capturing the ancient mystical tradition of the dawn wandering bard through futuristic visual synthesis.",
    laurel: "🪘 Cultural Heritage Visual",
    videoType: "youtube",
    videoId: "YfRwtvyZwdQ",
    thumb: "https://img.youtube.com/vi/YfRwtvyZwdQ/hqdefault.jpg"
  },
  {
    id: "realm-serpents",
    title: "Realm of the Serpents",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "Fantasy & Myth",
    badgeType: "ai",
    tagline: "Ancient serpent lore and mystical underworlds",
    desc: "High-fantasy world-building showcasing scale, mythological serpents, and surreal visual effects pipelines.",
    laurel: "🐍 World-Building Showcase",
    videoType: "youtube",
    videoId: "R_YSsTs5FhU",
    thumb: "https://img.youtube.com/vi/R_YSsTs5FhU/hqdefault.jpg"
  },
  {
    id: "void",
    title: "Void",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "Sci-Fi Concept",
    badgeType: "ai",
    tagline: "Cosmic isolation and existential silence",
    desc: "A contemplative science-fiction visual piece exploring cosmic scale and synthetic aesthetics.",
    laurel: "🌌 Sci-Fi Visual Concept",
    videoType: "youtube",
    videoId: "U3s8IndX0f8",
    thumb: "https://img.youtube.com/vi/U3s8IndX0f8/hqdefault.jpg"
  },
  {
    id: "the-last-train",
    title: "The Last Train",
    category: "ai",
    categoryLabel: "AI Cinema",
    badge: "Atmospheric Drama",
    badgeType: "ai",
    tagline: "Nocturnal journey through memory",
    desc: "Evocative atmospheric short capturing the mystery and romance of nighttime locomotive travels.",
    laurel: "🚂 Atmospheric Mood Piece",
    videoType: "youtube",
    videoId: "QqihimkUQss",
    thumb: "https://img.youtube.com/vi/QqihimkUQss/hqdefault.jpg"
  },

  // --- COMMERCIAL & CORPORATE WORK ---
  {
    id: "rbi-bank",
    title: "RBI Bank Campaign",
    category: "commercial",
    categoryLabel: "Commercial / Ad Film",
    badge: "National Banking",
    badgeType: "gold",
    tagline: "Public trust and financial awareness commercial film",
    desc: "High-impact broadcast storytelling crafted for Reserve Bank of India consumer awareness, blending clarity and cinematic production value.",
    laurel: "🏦 National Banking Commercial",
    videoType: "youtube",
    videoId: "gJPHlJQCdLk",
    thumb: "https://img.youtube.com/vi/gJPHlJQCdLk/hqdefault.jpg"
  },
  {
    id: "idfc-bank",
    title: "IDFC Bank Digital Campaign",
    category: "commercial",
    categoryLabel: "Commercial / Digital",
    badge: "Banking Innovation",
    badgeType: "gold",
    tagline: "Modern banking & customer experience digital campaign",
    desc: "Fast-paced, contemporary commercial created for IDFC First Bank digital channels focusing on accessibility and seamless technology.",
    laurel: "📱 Modern Financial Ad",
    videoType: "youtube",
    videoId: "gS-pwfA13dg",
    thumb: "https://img.youtube.com/vi/gS-pwfA13dg/hqdefault.jpg"
  },
  {
    id: "rising-spaces",
    title: "Rising Spaces",
    category: "commercial",
    categoryLabel: "Commercial / Brand Film",
    badge: "Real Estate Architecture",
    badgeType: "gold",
    tagline: "Architectural luxury & lifestyle showcase film",
    desc: "Cinematic real estate brand film celebrating modern architectural elegance, aspirational living spaces, and premium craftsmanship.",
    laurel: "🏛️ Architectural Brand Film",
    videoType: "youtube",
    videoId: "v9WOW4nyfDo",
    thumb: "https://img.youtube.com/vi/v9WOW4nyfDo/hqdefault.jpg"
  },
  {
    id: "davakar-infra",
    title: "Davakar Infra",
    category: "commercial",
    categoryLabel: "Corporate / Infrastructure",
    badge: "Infrastructure & Engineering",
    badgeType: "gold",
    tagline: "Engineering excellence & urban infrastructure",
    desc: "A corporate film portraying engineering strength, modern machinery, and urban development across Maharashtra.",
    laurel: "🏗️ Corporate Infrastructure Film",
    videoType: "youtube",
    videoId: "76a_8SdE3XU",
    thumb: "https://img.youtube.com/vi/76a_8SdE3XU/hqdefault.jpg"
  },
  {
    id: "gokul-ads",
    title: "Gokul Brand Advertisements",
    category: "commercial",
    categoryLabel: "Commercial / FMCG",
    badge: "Heritage Brand",
    badgeType: "gold",
    tagline: "Trusted dairy & FMCG commercial campaigns",
    desc: "Broadcast commercial campaigns celebrating pure heritage, consumer health, and regional trust for the iconic Gokul brand.",
    laurel: "🥛 Heritage FMCG Commercial",
    videoType: "youtube",
    videoId: "2WK3taobHg4",
    thumb: "https://img.youtube.com/vi/2WK3taobHg4/hqdefault.jpg"
  },
  {
    id: "revive-gym",
    title: "Revive Gym, Kalyan",
    category: "commercial",
    categoryLabel: "Commercial / Fitness",
    badge: "Fitness Lifestyle",
    badgeType: "gold",
    tagline: "High-energy fitness & wellness commercial campaign",
    desc: "Dynamic, rhythmic commercial film showcasing modern fitness training facilities, strength culture, and personal transformation.",
    laurel: "⚡ Fitness Brand Showcase",
    videoType: "youtube",
    videoId: "moIM3p2CQlY",
    thumb: "https://img.youtube.com/vi/moIM3p2CQlY/hqdefault.jpg"
  }
];

function initProjects() {
  const container = document.getElementById("projects-grid-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!container) return;

  function render(category = "all") {
    container.innerHTML = "";
    const filtered = category === "all" 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === category);

    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = `project-card ${p.featured ? "featured-card" : ""}`;
      
      const badgeClass = p.badgeType === "gold" ? "badge-gold" : "badge-ai";

      card.innerHTML = `
        <div class="project-thumb-box" onclick="window.playProjectVideo('${p.id}')">
          <img class="project-thumb-img" src="${p.thumb}" alt="${p.title}" loading="lazy" onerror="this.src='assets/logo-dark.png'; this.style.padding='40px'; this.style.objectFit='contain';" />
          <div class="project-thumb-overlay">
            <div class="play-circle-btn" aria-label="Play ${p.title}">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            </div>
          </div>
          <span class="project-badge-tag ${badgeClass}">${p.badge}</span>
        </div>
        <div class="project-body">
          <span class="project-category">${p.categoryLabel}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-footer">
            <span class="project-laurel-text">${p.laurel}</span>
            <button class="project-watch-link" onclick="window.playProjectVideo('${p.id}')">
              <span>Watch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Filter clicks
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      render(category);
    });
  });

  render("all");
}

/* ==========================================================================
   3. VIDEO MODAL PLAYER
   ========================================================================== */
function initVideoModal() {
  const modal = document.getElementById("video-modal");
  const modalClose = document.getElementById("modal-close-btn");
  const videoTitleElem = document.getElementById("modal-video-title");
  const iframeContainer = document.getElementById("modal-iframe-box");

  if (!modal) return;

  window.playProjectVideo = function(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    videoTitleElem.textContent = project.title;
    
    let iframeUrl = "";
    if (project.videoType === "youtube") {
      iframeUrl = `https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0&modestbranding=1`;
    } else if (project.videoType === "drive") {
      iframeUrl = project.videoUrl;
    }

    iframeContainer.innerHTML = `<iframe src="${iframeUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  window.closeVideoModal = function() {
    modal.classList.remove("active");
    iframeContainer.innerHTML = "";
    document.body.style.overflow = "";
  };

  if (modalClose) {
    modalClose.addEventListener("click", window.closeVideoModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      window.closeVideoModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      window.closeVideoModal();
    }
  });
}

/* ==========================================================================
   4. STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsObserver() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";
        let current = 0;
        const duration = 1600;
        const stepTime = 25;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = `${prefix}${target}${suffix}`;
            clearInterval(timer);
          } else {
            el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
          }
        }, stepTime);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(stat => observer.observe(stat));
}

/* ==========================================================================
   5. INTERACTIVE CONTACT FORM & ACTIONS
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("satori-contact-form");
  const feedback = document.getElementById("form-feedback");
  const whatsappBtn = document.getElementById("whatsapp-direct-btn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();
      const projectTypeElem = document.querySelector('input[name="project_type"]:checked');
      const projectType = projectTypeElem ? projectTypeElem.value : "Feature / Commercial";

      if (!name || !email || !message) {
        alert("Please complete the required fields.");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Transmitting Inquiry...";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Studio Inquiry";
        form.reset();

        feedback.innerHTML = `
          <strong>Thank you, ${name}!</strong><br>
          Your project brief has been received by Karan S. Chavan & Satori team. We will review your requirements and respond via <strong>${email}</strong> within 24 hours.
        `;
        feedback.className = "form-feedback-msg success";
        feedback.style.display = "block";
      }, 1200);
    });
  }

  // Quick WhatsApp Launcher
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const text = encodeURIComponent("Hello Karan, I would like to discuss a project with Satori Advertising & Entertainment.");
      window.open(`https://wa.me/918408800532?text=${text}`, "_blank");
    });
  }
}
