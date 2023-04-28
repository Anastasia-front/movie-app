export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function scrollPos() {
  localStorage.setItem('scrollPos', window.scrollY);
}

export function resetScrollPos(scrollPosition) {
  if (window.scrollY !== scrollPosition && window.scrollY !== 0) {
    localStorage.removeItem('scrollPos');
  } else {
    const scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos !== null) {
      window.scrollTo(0, scrollPos);
    }
  }
  if (window.scrollY !== scrollPosition) {
    localStorage.removeItem('scrollPos');
  }
}
