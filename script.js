/**
 * Mind Matters — Mountain Wellness JavaScript
 * Framework-free Vanilla JavaScript
 * Powers all pages: Home, About, Categories, and Contact
 */

// ============================================================================
// 1. Mountain Blog Dataset (Comprehensive Articles for All Categories)
// ============================================================================
const blogArticles = [
  {
    id: 1,
    title: "5 Simple Ways to Reduce Daily Stress",
    category: "Mental Health",
    subtopic: "Stress management",
    date: "Sep 24, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    excerpt: "Feeling the weight of deadlines and daily rush? Learn five scientifically grounded, alpine-inspired rituals to regain tranquility and release physical tension.",
    content: `
      <p>Stress is our body's automatic response to demanding circumstances, but chronic stress can drain our vitality. Taking small, intentional pauses throughout your day can reshape how your nervous system reacts to pressure.</p>
      
      <h3>1. Practice the 4-7-8 Mountain Breath</h3>
      <p>Inhale deeply through your nose for 4 seconds imagining crisp mountain air, hold your breath gently for 7 seconds, and exhale slowly through your mouth for 8 seconds. Repeating this cycle four times signals your brain that you are safe.</p>

      <h3>2. Step Away From Screens Every 50 Minutes</h3>
      <p>Give your eyes and mind a breather. Stand up, look out the window at distant greenery or the horizon, and stretch your shoulders. Physical detachment breaks mental tension loops.</p>

      <h3>3. Write Down a 'Brain Dump'</h3>
      <p>When thoughts overwhelm you, transfer them to paper. Externalizing worries prevents mental clutter and helps you realize that many concerns are manageable one by one.</p>

      <h3>4. Sip Warm Herbal Tea Without Distractions</h3>
      <p>Chamomile, peppermint, or warm water with lemon. Spend five quiet minutes focusing solely on the warmth of the mug and the aroma, leaving your phone in another room.</p>

      <h3>5. Practice Progressive Muscle Relaxation</h3>
      <p>Starting from your toes, consciously clench each muscle group for 5 seconds, then let go completely. Notice the physical sensation of release flowing through your limbs.</p>

      <div class="modal-quote-box">
        “Peace is not the absence of trouble, but the presence of calm within you.”
      </div>
    `
  },
  {
    id: 2,
    title: "How to Build a Positive Mindset",
    category: "Motivation",
    subtopic: "Positive thinking",
    date: "Sep 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
    excerpt: "A positive mindset is not about ignoring difficulties; it is about building the mental resilience to look for solutions and opportunities from the summit of every challenge.",
    content: `
      <p>Cultivating an optimistic mindset is a daily discipline rather than a lucky genetic trait. It starts by training your inner voice to support you rather than tear you down.</p>

      <h3>1. Catch Cognitive Distortions</h3>
      <p>Notice when your mind says 'I always fail' or 'Nothing ever works out.' Challenge these absolute statements. Ask yourself: <em>Is this completely true, or is this just an emotional reaction to a temporary setback?</em></p>

      <h3>2. Keep an Evening Gratitude Journal</h3>
      <p>Before bed, jot down three specific moments you appreciated today—a tasty meal, a supportive message from a friend, or completing a lecture. This trains your brain to scan for good moments.</p>

      <h3>3. Embrace the Power of 'Yet'</h3>
      <p>When you encounter a skill you haven't mastered, reframe <em>'I can't do this'</em> into <em>'I can't do this yet.'</em> This minor change unlocks curiosity and growth.</p>

      <div class="modal-quote-box">
        “Your perspective determines whether an obstacle is a roadblock or a stepping stone.”
      </div>
    `
  },
  {
    id: 3,
    title: "The Power of Taking a Break",
    category: "Self Care",
    subtopic: "Taking breaks",
    date: "Sep 19, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=700&q=80",
    excerpt: "Rest is not a reward you earn only after exhaustion; rest is a biological necessity that fuels your creativity, emotional stability, and health.",
    content: `
      <p>In our modern culture of endless hustle, resting often carries unwarranted guilt. Yet neuroscientists consistently find that downtime allows our brain's Default Mode Network to process memories and innovate.</p>

      <h3>The Signs You Need an Immediate Pause</h3>
      <ul>
        <li>You reread the same paragraph four times without retaining it.</li>
        <li>Minor interruptions trigger irritation or frustration.</li>
        <li>Your body feels heavy, with tight neck muscles or head pressure.</li>
      </ul>

      <h3>Micro-Breaks vs. Macro-Breaks</h3>
      <p>You don't need a month-long vacation to restore your spirit. A 5-minute stroll in fresh air, closed-eye resting between study sessions, or an unhurried weekend afternoon without emails does wonders for your mental state.</p>
    `
  },
  {
    id: 4,
    title: "How to Stop Overthinking",
    category: "Mental Health",
    subtopic: "Overthinking",
    date: "Sep 16, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=700&q=80",
    excerpt: "Break free from the mental paralysis of rumination. Discover practical mindfulness triggers and cognitive techniques to quiet an overactive mind.",
    content: `
      <p>Overthinking is often disguised as problem-solving. But while problem-solving leads to decisions and actions, rumination spins in repetitive circles of worry and hypothetical regret.</p>

      <h3>1. The 5-Minute Worry Window</h3>
      <p>Designate a fixed time—such as 4:30 PM to 4:35 PM—solely for worrying. If an anxious thought arrives at 11:00 AM, tell yourself: <em>'I acknowledge this, but I will review it during my worry window.'</em> Often, by 4:30 PM, the urge has dissolved.</p>

      <h3>2. Shift From Mind to Body</h3>
      <p>Overthinking traps you in your head. Re-ground yourself using the 5-4-3-2-1 technique: notice 5 things you can see, 4 things you can touch, 3 sounds, 2 scents, and 1 taste.</p>

      <h3>3. Focus on Actionable Next Steps</h3>
      <p>Ask: <em>'Is there an action I can take right now regarding this concern?'</em> If yes, take that step. If not, acknowledge that overthinking will not change external realities.</p>
    `
  },
  {
    id: 5,
    title: "Small Habits That Improve Your Life",
    category: "Self Care",
    subtopic: "Healthy routines",
    date: "Sep 14, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    excerpt: "You do not need a radical life overhaul to experience positive transformation. Micro-habits done consistently create massive shifts over time.",
    content: `
      <p>Massive changes often collapse under their own weight. Instead, micro-habits—actions so small they feel effortless—bypass our brain's natural resistance to change.</p>

      <h3>Tiny Habits With Huge Returns</h3>
      <ul>
        <li><strong>One Glass of Water First Thing:</strong> Hydrates your brain immediately upon waking before caffeine intake.</li>
        <li><strong>Making Your Bed:</strong> Provides an immediate subconscious win before starting your morning routine.</li>
        <li><strong>Leaving Your Phone Across the Room:</strong> Eliminates doomscrolling right before sleep and upon waking.</li>
        <li><strong>Two Minutes of Gentle Stretching:</strong> Unlocks blood flow and reminds you to breathe deeply.</li>
      </ul>
      <p>Pick just ONE micro-habit to practice this week. Once it becomes automatic, layer on another.</p>
    `
  },
  {
    id: 6,
    title: "Why Self-Care Is Important",
    category: "Self Care",
    subtopic: "Personal well-being",
    date: "Sep 11, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80",
    excerpt: "Self-care isn't selfish indulgence or expensive spa trips. It is preserving your physical, emotional, and psychological energy so you can thrive.",
    content: `
      <p>You cannot pour from an empty cup. When you neglect yourself, your patience frays, your immune system weakens, and your relationships suffer.</p>

      <h3>The Four Pillars of Real Self-Care</h3>
      <ol>
        <li><strong>Physical:</strong> Nutritious food, adequate water, gentle movement, and restorative sleep.</li>
        <li><strong>Emotional:</strong> Allowing yourself to feel your feelings without harsh judgment.</li>
        <li><strong>Social:</strong> Setting kind boundaries and spending time with uplifting people.</li>
        <li><strong>Mental:</strong> Disconnecting from noise and feeding your curiosity with books and nature.</li>
      </ol>
      <p>True self-care is building a daily life you don't continually need an escape from.</p>
    `
  },
  {
    id: 7,
    title: "How to Stay Motivated Every Day",
    category: "Motivation",
    subtopic: "Goal setting & confidence",
    date: "Sep 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=700&q=80",
    excerpt: "Motivation is an emotion, and like all emotions, it naturally ebbs and flows. Discover how systems and meaningful purpose keep you moving forward.",
    content: `
      <p>Waiting to 'feel motivated' before taking action is the easiest way to remain stuck. Action often precedes motivation, not the other way around.</p>

      <h3>1. Connect to Your Core 'Why'</h3>
      <p>When a task feels tedious, remind yourself what it serves. Studying for an exam isn't just about grades—it is about securing your future freedom and mastering discipline.</p>

      <h3>2. The 2-Minute Rule</h3>
      <p>Commit to working on your goal for just two minutes. Open the document, write one sentence, or put on your hiking shoes. Once friction is broken, momentum takes over.</p>

      <h3>3. Celebrate Micro-Wins</h3>
      <p>Acknowledge every small step forward. Progress fuels dopamine, creating a positive reinforcement loop for sustained focus.</p>
    `
  },
  {
    id: 8,
    title: "Mindfulness for Beginners",
    category: "Mindfulness",
    subtopic: "Meditation & breathing",
    date: "Sep 05, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    excerpt: "You don't need to sit cross-legged on a mountain peak for an hour. Start your mindfulness journey with simple, non-intimidating practices.",
    content: `
      <p>Mindfulness simply means being intentionally present in the current moment without judging it. If you are drinking water, focus on its coolness; if you are walking, feel your feet touching the ground.</p>

      <h3>A Simple 3-Minute Beginner Meditation</h3>
      <ol>
        <li>Sit comfortably in a chair with your back upright and shoulders relaxed like a steady mountain.</li>
        <li>Close your eyes gently or soften your gaze looking downward.</li>
        <li>Place your attention on the feeling of breath entering and leaving your nostrils.</li>
        <li>When your mind wanders (and it will wander!), simply notice it gently and return your attention to your breathing without criticism.</li>
      </ol>
      <p>Each time you notice your mind has wandered and bring it back, you have done a mental rep that strengthens focus and inner calm.</p>
    `
  },
  {
    id: 9,
    title: "Time Management & Avoiding Procrastination",
    category: "Productivity",
    subtopic: "Study habits & focus",
    date: "Sep 01, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80",
    excerpt: "Procrastination is an emotional regulation problem, not a character flaw. Learn gentle productivity systems that protect your mental peace.",
    content: `
      <p>We often procrastinate not because we are lazy, but because a task triggers anxiety, fear of failure, or feeling overwhelmed. By tackling the underlying emotions, productivity flows naturally.</p>

      <h3>1. Break Projects Into Atomic Steps</h3>
      <p>'Write research paper' is terrifying. 'Write one introductory sentence' is doable. Shrink the task until your brain no longer perceives threat.</p>

      <h3>2. The Pomodoro Routine</h3>
      <p>Work for 25 focused minutes with notifications silenced, followed by a guaranteed 5-minute break to stretch and drink water. Knowing that a break is guaranteed keeps boredom at bay.</p>

      <h3>3. Treat Tomorrow's Self With Kindness</h3>
      <p>Before packing up for the evening, leave your desk tidy and write down the single most important task for tomorrow. When you sit down the next day, you can begin without decision fatigue.</p>
    `
  }
];

// ============================================================================
// 2. Application State & Page Category Detection
// ============================================================================
// Check if the current page has a specific category lock (e.g. mental-health.html)
const pageCategoryLock = document.body.getAttribute("data-page-category");
let currentFilter = pageCategoryLock ? pageCategoryLock : "all";
let currentSearchQuery = "";

// DOM Elements
const blogsGrid = document.getElementById("blogsGrid");
const noResultsBox = document.getElementById("noResultsBox");
const noResultsMessage = document.getElementById("noResultsMessage");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchCountBadge = document.getElementById("searchCountBadge");
const filterButtons = document.querySelectorAll(".filter-btn");
const filterStatusBar = document.getElementById("filterStatusBar");
const filterStatusText = document.getElementById("filterStatusText");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const resetSearchFromEmpty = document.getElementById("resetSearchFromEmpty");
const quickTags = document.querySelectorAll(".quick-tag");

// Modal Elements
const articleModal = document.getElementById("articleModal");
const modalArticleContent = document.getElementById("modalArticleContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Contact Form Elements
const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactSubject = document.getElementById("contactSubject");
const contactMessage = document.getElementById("contactMessage");
const formSuccessAlert = document.getElementById("formSuccessAlert");
const formErrorAlert = document.getElementById("formErrorAlert");

// Navigation Elements
const mobileNavToggle = document.getElementById("mobileNavToggle");
const sidebarNav = document.getElementById("sidebarNav");
const heroReadBtn = document.getElementById("heroReadBtn");

// ============================================================================
// 3. Render Blog Cards (Context-aware for Home & Category Pages)
// ============================================================================
function renderBlogCards() {
  if (!blogsGrid) return; // If on a page without blogsGrid (like contact or about)

  const filtered = blogArticles.filter(article => {
    // If page is locked to a category (e.g. mental-health.html), check that first
    const matchesCategory = (currentFilter === "all") || 
      (article.category.toLowerCase() === currentFilter.toLowerCase());

    const query = currentSearchQuery.trim().toLowerCase();
    const matchesSearch = query === "" || 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.subtopic.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (searchCountBadge) {
    const totalCount = pageCategoryLock 
      ? blogArticles.filter(a => a.category.toLowerCase() === pageCategoryLock.toLowerCase()).length
      : blogArticles.length;
    searchCountBadge.textContent = `${filtered.length} of ${totalCount} Articles`;
  }

  updateStatusBar(filtered.length);

  if (filtered.length === 0) {
    blogsGrid.innerHTML = "";
    if (noResultsBox) noResultsBox.style.display = "block";
    if (noResultsMessage) {
      if (currentSearchQuery) {
        noResultsMessage.innerHTML = `No articles found matching "<strong>${escapeHtml(currentSearchQuery)}</strong>" in <em>${currentFilter === 'all' ? 'All categories' : currentFilter}</em>. Try another mountain search keyword.`;
      } else {
        noResultsMessage.textContent = `No articles found in category "${currentFilter}".`;
      }
    }
    return;
  }

  if (noResultsBox) noResultsBox.style.display = "none";
  blogsGrid.innerHTML = filtered.map(article => `
    <article class="blog-card" data-id="${article.id}">
      <div class="blog-card-media">
        <img 
          src="${article.image}" 
          alt="${escapeHtml(article.title)}" 
          class="blog-card-image"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80';"
        />
        <span class="blog-card-badge">${escapeHtml(article.category)}</span>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span>${article.date}</span>
          <span class="blog-card-meta-dot">&bull;</span>
          <span>${article.readTime}</span>
        </div>
        <h3 class="blog-card-title">${escapeHtml(article.title)}</h3>
        <p class="blog-card-desc">${escapeHtml(article.excerpt)}</p>
        <div class="blog-card-footer">
          <button type="button" class="read-more-btn" data-id="${article.id}" aria-label="Read more about ${escapeHtml(article.title)}">
            <span>Read More</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <span class="read-time-pill">${escapeHtml(article.subtopic)}</span>
        </div>
      </div>
    </article>
  `).join("");

  // Attach click listeners to all "Read More" buttons
  const readMoreButtons = blogsGrid.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const articleId = parseInt(btn.getAttribute("data-id"), 10);
      openArticleModal(articleId);
    });
  });
}

function updateStatusBar(count) {
  if (!filterStatusBar) return;

  const hasFilter = !pageCategoryLock && currentFilter !== "all";
  const hasSearch = currentSearchQuery.trim() !== "";

  if (hasFilter || hasSearch) {
    filterStatusBar.style.display = "flex";
    let textParts = [];
    if (hasFilter) textParts.push(`Category: <strong>${currentFilter}</strong>`);
    if (hasSearch) textParts.push(`Search: "<strong>${escapeHtml(currentSearchQuery)}</strong>"`);
    textParts.push(`(${count} result${count === 1 ? '' : 's'})`);
    if (filterStatusText) filterStatusText.innerHTML = `Filtered by ${textParts.join(" &bull; ")}`;
  } else {
    filterStatusBar.style.display = "none";
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// ============================================================================
// 4. Search Functionality (Vanilla JS)
// ============================================================================
if (searchInput) {
  // Live filter as user types
  searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    if (clearSearchBtn) {
      clearSearchBtn.style.display = currentSearchQuery.length > 0 ? "flex" : "none";
    }
    
    // If not on an article listing page, redirecting or showing in place
    if (blogsGrid) {
      renderBlogCards();
    }
  });

  // Handle Search Form submit
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      currentSearchQuery = searchInput.value;
      if (blogsGrid) {
        renderBlogCards();
        const articlesSection = document.getElementById("featured-articles") || blogsGrid;
        if (articlesSection) {
          articlesSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on About or Contact, navigate to index.html with query
        window.location.href = `index.html?search=${encodeURIComponent(currentSearchQuery)}`;
      }
    });
  }
}

// Read URL query parameter for search if redirected
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search");
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    currentSearchQuery = searchParam;
    if (clearSearchBtn) clearSearchBtn.style.display = "flex";
  }
  renderBlogCards();
});

// Clear Search Input Button
if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchQuery = "";
    clearSearchBtn.style.display = "none";
    renderBlogCards();
    searchInput.focus();
  });
}

// Quick Topic Tags trigger quick search
quickTags.forEach(tag => {
  tag.addEventListener("click", () => {
    const keyword = tag.getAttribute("data-tag");
    if (searchInput) {
      searchInput.value = keyword;
      currentSearchQuery = keyword;
      if (clearSearchBtn) clearSearchBtn.style.display = "flex";
      if (blogsGrid) {
        renderBlogCards();
        const articlesSection = document.getElementById("featured-articles") || blogsGrid;
        if (articlesSection) {
          articlesSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = `index.html?search=${encodeURIComponent(keyword)}`;
      }
    }
  });
});

// Reset Search / Filters
if (resetFilterBtn) {
  resetFilterBtn.addEventListener("click", resetAllFilters);
}

if (resetSearchFromEmpty) {
  resetSearchFromEmpty.addEventListener("click", resetAllFilters);
}

function resetAllFilters() {
  if (!pageCategoryLock) {
    currentFilter = "all";
  }
  currentSearchQuery = "";
  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.style.display = "none";

  filterButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-filter") === "all");
  });

  renderBlogCards();
}

// Category filter tabs on Home page
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedFilter = button.getAttribute("data-filter");
    currentFilter = selectedFilter;

    filterButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    renderBlogCards();
  });
});

// ============================================================================
// 5. Mobile Navigation Toggle
// ============================================================================
if (mobileNavToggle && sidebarNav) {
  mobileNavToggle.addEventListener("click", () => {
    const isExpanded = mobileNavToggle.getAttribute("aria-expanded") === "true";
    mobileNavToggle.setAttribute("aria-expanded", !isExpanded);
    sidebarNav.classList.toggle("mobile-open");
  });
}

// Hero button smooth scroll
if (heroReadBtn) {
  heroReadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const blogSection = document.getElementById("featured-articles");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ============================================================================
// 6. Full Article Reader Modal
// ============================================================================
function openArticleModal(articleId) {
  const article = blogArticles.find(a => a.id === articleId);
  if (!article || !articleModal || !modalArticleContent) return;

  modalArticleContent.innerHTML = `
    <span class="modal-hero-badge">${escapeHtml(article.category)}</span>
    <h2 class="modal-title">${escapeHtml(article.title)}</h2>
    <div class="modal-meta">
      <span>By <strong>Mind Matters Team</strong></span>
      <span>&bull;</span>
      <span>${article.date}</span>
      <span>&bull;</span>
      <span>${article.readTime}</span>
    </div>
    <img 
      src="${article.image}" 
      alt="${escapeHtml(article.title)}" 
      class="modal-featured-img"
      onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80';"
    />
    <div class="modal-body-text">
      ${article.content}
    </div>
  `;

  articleModal.style.display = "flex";
  articleModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeArticleModal() {
  if (!articleModal) return;
  articleModal.style.display = "none";
  articleModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeArticleModal);
if (articleModal) {
  articleModal.addEventListener("click", (e) => {
    if (e.target === articleModal) closeArticleModal();
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && articleModal && articleModal.style.display === "flex") {
    closeArticleModal();
  }
});

// ============================================================================
// 7. Contact Form Validation (Vanilla JS)
// ============================================================================
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formSuccessAlert) formSuccessAlert.style.display = "none";
    if (formErrorAlert) formErrorAlert.style.display = "none";

    let isValid = true;

    // Validate Name
    const nameVal = contactName.value.trim();
    const nameError = document.getElementById("nameError");
    if (nameVal === "") {
      showError(contactName, nameError, "Please enter your name.");
      isValid = false;
    } else if (nameVal.length < 2) {
      showError(contactName, nameError, "Name must be at least 2 characters.");
      isValid = false;
    } else {
      clearError(contactName, nameError);
    }

    // Validate Email
    const emailVal = contactEmail.value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
      showError(contactEmail, emailError, "Please enter your email address.");
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      showError(contactEmail, emailError, "Please enter a valid email address (e.g. name@example.com).");
      isValid = false;
    } else {
      clearError(contactEmail, emailError);
    }

    // Validate Subject
    const subjectVal = contactSubject.value.trim();
    const subjectError = document.getElementById("subjectError");
    if (subjectVal === "") {
      showError(contactSubject, subjectError, "Please provide a subject for your message.");
      isValid = false;
    } else {
      clearError(contactSubject, subjectError);
    }

    // Validate Message
    const messageVal = contactMessage.value.trim();
    const messageError = document.getElementById("messageError");
    if (messageVal === "") {
      showError(contactMessage, messageError, "Please write your message.");
      isValid = false;
    } else if (messageVal.length < 10) {
      showError(contactMessage, messageError, "Your message should be at least 10 characters long.");
      isValid = false;
    } else {
      clearError(contactMessage, messageError);
    }

    if (isValid) {
      if (formSuccessAlert) formSuccessAlert.style.display = "flex";
      contactForm.reset();
      setTimeout(() => {
        if (formSuccessAlert) formSuccessAlert.style.display = "none";
      }, 6000);
    } else {
      if (formErrorAlert) formErrorAlert.style.display = "flex";
    }
  });

  [contactName, contactEmail, contactSubject, contactMessage].forEach(input => {
    if (input) {
      input.addEventListener("input", () => {
        const errorSpan = document.getElementById(input.id.replace("contact", "").toLowerCase() + "Error");
        clearError(input, errorSpan);
        if (formErrorAlert) formErrorAlert.style.display = "none";
      });
    }
  });
}

function showError(inputEl, errorEl, message) {
  inputEl.classList.add("is-invalid");
  if (errorEl) errorEl.textContent = message;
}

function clearError(inputEl, errorEl) {
  inputEl.classList.remove("is-invalid");
  if (errorEl) errorEl.textContent = "";
}
