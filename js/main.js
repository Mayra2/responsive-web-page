// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
      //Menu control
      const menuItems = document.querySelectorAll('.faq-menu .btn');
      const faqGroups = document.querySelectorAll('.faq-group');
  
      menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
          menuItems.forEach((item) => item.classList.remove('active'));
          menuItem.classList.add('active');
         
          const filter = menuItem.classList.contains('faq-all')
            ? 'all' 
            : menuItem.classList[1]; 
  
         
          faqGroups.forEach((group) => {
            if (filter === 'all') {
              group.style.display = 'block';
            } else {
              if (group.classList.contains(`${filter}-element`)) {
                group.style.display = 'block';
              } else {
                group.style.display = 'none';
              }
            }
          });
        });
      });
      
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');


    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});
