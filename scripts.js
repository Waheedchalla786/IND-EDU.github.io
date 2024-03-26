


document.addEventListener('DOMContentLoaded', function() {
    const booksCatalogue = document.querySelector('.books-catalogue');

    
    // Simulated data for demonstration
    const books = [
        {
            title: 'Rankers Test Series',
            image: 'img/webshop/Rankers Test Series.png',
            description: 'Rankers Test Series For NEET .',
            downloadLink: 'https://adrinolinks.com/Rankers-test-series'
        },

        {
            title: '45 Crash Course',
            image: 'img/webshop/NEET 45 Days Crash Course Pw.png',
            description: '45 CRASH course For Neet.',
            downloadLink: 'https://adrinolinks.com/45_days_crash_cource'
        },
        
        {
            title: '36 Years PYQ NEET',
            image: 'img/webshop/NEET 36 years Pyq.png',
            description: '36 Years PYQS For Neet.',
            downloadLink: 'https://adrinolinks.com/33_YEARS_PAPERS_NEET'
        },
{
            title: 'NCERT PUNCH',
            image: 'img/webshop/NCERT PUNCH Pw.png',
            description: 'Free Physics Wallah NCERT Punch',
            downloadLink: 'https://adrinolinks.com/NCERT_PUNCH_2024/'
        },

    
        // Add more book objects as needed
    ];
    
    // Function to create book post HTML
    function createBookPost(book) {
        const bookPost = document.createElement('div');
        bookPost.classList.add('book-post');

        bookPost.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <p>${book.description}</p>
            <a href="${book.downloadLink}" class="download-button">Download</a>
        `;

        booksCatalogue.appendChild(bookPost);
    }

    // Populate books catalogue
    books.forEach(book => createBookPost(book));
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    menuToggle.addEventListener('click', function() {
        menuItems.classList.toggle('active');
    });
});


document.getElementById('share-btn').addEventListener('click', function() {
    // Share text along with the link to your website
    var shareText = "Check out this amazing website!";
    var shareUrl = window.location.href;

    // Check if the Web Share API is supported
    if (navigator.share) {
        // Share using the Web Share API
        navigator.share({
            title: document.title,
            text: shareText,
            url: shareUrl
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that do not support the Web Share API
        alert("Your browser does not support the Web Share API. Please use the built-in share options of your browser.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    var currentDate = new Date();

    // Format the date as desired (e.g., "March 25, 2024")
    var formattedDate = currentDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Display the formatted date at the top of the website
    var latestDateElement = document.getElementById('latest-date');
    latestDateElement.textContent = "Latest Date: " + formattedDate;
});


 // Function to open the popup
  function openPopup() {
    document.getElementById('installPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  // Function to close the popup
  function closePopup() {
    document.getElementById('installPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }

  // Function to simulate installation (you can replace this with actual installation logic)
  function installWebsite() {
    alert('Installing website...');
    closePopup();
  }

  // Show the popup when the page loads
  window.onload = openPopup;
