// Function to handle search input
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let query = event.target.value;
        if (query) {
            // Perform a Bing search for the query
            openBingSearch(query);
        }
    }
});

// Function to open URL in a new tab using about:blank
function openInAboutBlank() {
    let url = document.getElementById('searchInput').value;
    if (url) {
        let newWindow = window.open('about:blank', '_blank');
        if (newWindow) {
            newWindow.location.href = url;
        }
    }
}

// Function to open URL inside the page (iframe)
function openURLInIframe(url) {
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'block'; // Show results container
    resultsContainer.innerHTML = ''; // Clear previous results
    let iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    resultsContainer.appendChild(iframe);
}

// Function to perform a Bing search and display results in an iframe
function openBingSearch(query) {
    let bingSearchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(query);
    openURLInIframe(bingSearchUrl);
}

// Function to handle tab switching
document.querySelectorAll('.menu a').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        let tabId = this.getAttribute('data-tab');
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');

        // Show or hide search bar based on the tab
        if (tabId === 'home') {
            document.getElementById('searchBar').style.display = 'flex';
        } else {
            document.getElementById('searchBar').style.display = 'none';
        }
    });
});

// Function to toggle display of proxy links
function toggleProxyLinks(id) {
    const links = document.getElementById(id);
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
}
