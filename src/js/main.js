

const liItem = document.querySelectorAll('ul#gallery-filters li');
const imgItem = document.querySelectorAll('.gallery-container .col-lg-3 ');
const pItem = document.querySelectorAll('.gallery-container .col-lg-3 .gallery-item p');

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});


liItem.forEach(li => {
    li.onclick = function(){

      console.log('A')
        // active
        liItem.forEach(li =>{
            li.className = "filter";
        })
        li.className="filter filter-active";

        // filter 
        // console.log(li.textContent);
        const value = li.textContent;
        imgItem.forEach(img =>{
            img.style.display="none";
            
            // console.log(img.getAttribute('data-filter'));
            if(img.getAttribute('data-filter') == value.toLowerCase() || value=="All"){
                img.style.display="flex";
            }
        })

    }
    
})



document.addEventListener( 'DOMContentLoaded', function() {


    $(".owl-carousel").owlCarousel({
      
        loop: true, // Set to true for infinite loop
        nav: true,
        navText:["<div class='nav-btn prev-slide'><i class=\"fa-solid fa-angle-left\"></i></div>","<div class='nav-btn next-slide'><i class=\"fa-solid fa-angle-right\"></i></div>"],
        margin: 10, // Adjust as needed,
        mouseDrag: false,
        responsive: {
          // For mobile devices like phones
          0: {
            items: 1 // Number of slides to show at a time (for mobile)
          },
          // For larger screens like tablets and desktops
          768: {
            items: 2 // Number of slides to show at a time (for larger screens)
          },
          1170: {
            items: 3
          }
        },
        
        // Add other options and customization here
      });


} );

