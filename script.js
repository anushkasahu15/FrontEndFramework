<script>
  // Example JS to show alert when a card is clicked
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('b')?.textContent || 'A monument';
      alert(`You clicked on ${title}`);
    });
  });
</script>
