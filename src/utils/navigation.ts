export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'Inicio' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

export const smoothScrollTo = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = elementPosition - startPosition;
  const duration = 800;
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const getActiveSection = (): string => {
  const sections = navigationItems.map(item => item.id);
  const scrollPosition = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }

  return sections[0];
};