document.addEventListener('DOMContentLoaded', () => {
    // --- Data Management ---
    const DEFAULT_BLOGS = [
      {
         ima:'images/eth.jpg',
         name: 'Exploring the Enchanting Beauty of Gambelia',
         blo: `Embark on a captivating adventure as we delve into the breathtaking landscapes of Gambelia. Nestled in the heart of the region, this hidden gem beckons travelers with its untouched beauty and mesmerizing charm.`,
         more: `From lush green valleys to rugged mountain ranges, Gambelia offers a diverse tapestry of natural wonders waiting to be explored. Immerse yourself in the vibrant culture and warm hospitality of the locals as you traverse winding trails that lead to cascading waterfalls, ancient ruins, and pristine beaches. Discover hidden gems off the beaten path, where time stands still and every corner reveals a new marvel. Join us on this unforgettable journey through Gambelia, where nature's splendor and cultural richness intertwine to create an experience like no other.`,
         date:'23 July 2023'
      },
      {
        ima:'images/La.jpg',
        name: `Lost in Time: Lalibela's Ancient Churches`,
        blo: `As we arrived in Lalibela, the air seemed to carry a sense of mystique, hinting at the extraordinary adventure that awaited us. The town itself, nestled amidst rugged mountains and verdant valleys, exuded a serene and spiritual atmosphere.`,
        more: `Our exploration began with a visit to the awe-inspiring rock-hewn churches, which stood as testament to the remarkable architectural prowess of their creators. Walking through the narrow passageways, we marveled at the intricate details carved into the solid rock. The sunlight filtering through the high windows cast an ethereal glow upon the ancient walls, adding to the sense of reverence and awe. Each church we encountered had its own unique character and story to tell. We were captivated by the grandeur of Bete Medhane Alem, the largest monolithic church in the world.`,
        date:'05 Dec 2023'
      },
      {
        ima:'images/ento.jpg',
        name: `Nature's Oasis: Entoto Park`,
        blo: `Finding Bliss in Nature's Embrace: Unveiling the Serene Splendor of Entoto Park. Step into a world where tranquility reigns and nature's beauty unfolds at every turn. Welcome to Entoto Park, a hidden gem.`,
        more: `Join us on a virtual journey as we explore the untamed allure of this enchanting oasis. As you enter Entoto Park, a sense of calm envelops you, transporting you far from the chaos of everyday life. The vibrant hues of blooming flowers and the gentle rustle of leaves in the breeze create a symphony of serenity. Wander along meandering pathways, each one unveiling a new vista of natural wonder.`,
        date: `18 August 2023`
      }
    ];
  
    // Load from LocalStorage or use Default
    let blogPosts = JSON.parse(localStorage.getItem('joyEthiopiaBlogs')) || DEFAULT_BLOGS;
  
    // --- DOM Elements ---
    const blogContainer = document.getElementById('blog-container');
    const toggleFormBtn = document.getElementById('toggle-form-btn');
    const postFormContainer = document.getElementById('post-form-container');
    const postForm = document.getElementById('post-form');
    // Inputs
    const titleInput = document.getElementById('post-title');
    const placeInput = document.getElementById('post-place');
    const dateInput = document.getElementById('post-date');
    const introInput = document.getElementById('post-intro');
    const contentInput = document.getElementById('post-content');
  
    // --- Functions ---
  
    function savePosts() {
      localStorage.setItem('joyEthiopiaBlogs', JSON.stringify(blogPosts));
    }
  
    function renderBlogs() {
      if (!blogContainer) return;
  
      blogContainer.innerHTML = '';
      
      // Reverse to show newest first
      // Create a reversed copy to avoid mutating original array in place if we were to re-save it
      [...blogPosts].reverse().forEach((post, index) => {
        // Create Card
        const card = document.createElement('div');
        card.className = 'blog-card';
        
        // Image handling (fallback if image doesn't exist)
        const imgSrc = post.ima || 'images/default.jpg';
  
        card.innerHTML = `
          <div class="blog-img">
            <img src="${imgSrc}" alt="${post.name}" onerror="this.src='https://via.placeholder.com/400x200?text=Joy+Ethiopia'">
          </div>
          <div class="blog-content">
            <div class="blog-date"><i class="fas fa-calendar-alt"></i> ${post.date}</div>
            <h3 class="blog-title">${post.name}</h3>
            <div class="blog-excerpt">
              ${post.blo}
              <span class="hidden-content" id="more-${index}">${post.more || ''}</span>
            </div>
            ${post.more ? `<button class="read-more" onclick="toggleReadMore(${index})">Read more</button>` : ''}
          </div>
        `;
        
        blogContainer.appendChild(card);
      });
    }
  
    // Global function for the onclick handler in the template string
    window.toggleReadMore = function(index) {
        const contentSpan = document.getElementById(`more-${index}`);
        const btn = contentSpan.parentElement.nextElementSibling;
        
        if (contentSpan.classList.contains('show')) {
            contentSpan.classList.remove('show');
            btn.innerText = 'Read more';
        } else {
            contentSpan.classList.add('show');
            btn.innerText = 'Read less';
        }
    };
  
    // --- Event Listeners ---
  
    if (toggleFormBtn) {
        toggleFormBtn.addEventListener('click', (e) => {
            e.preventDefault();
            postFormContainer.classList.toggle('active');
            toggleFormBtn.innerText = postFormContainer.classList.contains('active') ? 'Close Form' : 'Post New Blog';
        });
    }
  
    if (postForm) {
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();
  
            const newPost = {
                ima: 'images/t.jpg', 
                name: titleInput.value || placeInput.value, 
                blo: introInput.value,
                more: contentInput.value,
                date: dateInput.value || new Date().toLocaleDateString()
            };
  
            blogPosts.push(newPost);
            savePosts();
            renderBlogs();
            
            // Reset Form and Close
            postForm.reset();
            postFormContainer.classList.remove('active');
            toggleFormBtn.innerText = 'Post Blog';
        });
    }
  
    // Initial Render
    renderBlogs();
  });
