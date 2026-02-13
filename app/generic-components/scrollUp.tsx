'use client';
export default function ScrollUp() {

  function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-up" onClick={handleScroll}></div>
  )
}