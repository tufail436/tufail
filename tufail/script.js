// Fetch product data from API
fetch('https://api.example.com/products')
.then(response => response.json())
.then(data => {
  // Display product list dynamically
  const productContainer = document.querySelector('.product-list');

  data.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.name;
    productElement.appendChild(imageElement);

    const nameElement = document.createElement('h3');
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price}`;
    productElement.appendChild(priceElement);

    productContainer.appendChild(productElement);
  });
})
.catch(error => {
  console.error('Error fetching product data:', error);
});

// Smooth scrolling for anchor links
const scroll = new SmoothScroll('a[href*="#"]', {
speed: 800,
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
event.preventDefault();

// Perform form validation
// ...

// Submit the form data
const formData = new FormData(contactForm);
const formObject = Object.fromEntries(formData.entries());

// Send the form data to the server
fetch('https://api.example.com/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formObject),
})
  .then(response => response.json())
  .then(data => {
    // Display success message or handle response
    console.log('Form submitted successfully:', data);
  })
  .catch(error => {
    console.error('Error submitting form:', error);
  });
});