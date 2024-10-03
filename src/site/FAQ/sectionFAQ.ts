export default function sectionFAQ() {
  // Select all elements with the class 'faq__question'
  const faqItems = document.querySelectorAll('.faq__question') as NodeListOf<HTMLHeadingElement>;

  // Function to collapse or expand the FAQ list
  function collapseList(event: Event) {
    // Get the clicked element
    const item = event.target as HTMLHeadingElement;

    // Close the element if it's already open
    if (item.classList.contains('open-answer')) {
      item.classList.remove('open-answer');
      return;
    }

    // Close all elements except the clicked one
    for (const el of faqItems) {
      if (el.classList.contains('open-answer')) {
        el.classList.remove('open-answer');
      }
    }

    // Open the clicked element
    item.classList.add('open-answer');
  }

  // Add click event handler to each FAQ item
  for (const item of faqItems) {
    item.addEventListener('click', collapseList);
  }
}
