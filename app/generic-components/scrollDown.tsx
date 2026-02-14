'use client';
export default function ScrollDown() {

  function handleScroll() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-up scroll-down nav-element" onClick={handleScroll}></div>
  )
}