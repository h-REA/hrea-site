const scrollToSection = (event: {
  preventDefault: () => void;
  target: { href?: string | URL; dataset?: { href?: string } };
}) => {
  // event.persist()

  // only do this behaviour if already on the homepage
  if (window.location.pathname === "/") {
    event.preventDefault();
    let url
    if (event.target.href) {
      url = new URL(event.target.href as string);
    } else if (event.target.dataset?.href) {
      url = new URL(window.location.protocol + '//' + window.location.host + event.target.dataset.href)
    } else {
      return; // No href found, exit early
    }
    const id = url.hash;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
};

export { scrollToSection };

const scrollToHome = (event: { preventDefault: () => void }) => {
  if (window.location.pathname === "/") {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export { scrollToHome };
