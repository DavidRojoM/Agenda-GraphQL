export function getElement(id: string): HTMLElement {
  return document.getElementById(id) as HTMLElement;
}
export function createElement(
  tag: string,
  className?: string,
  content?: string
): HTMLElement {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (content) {
    element.innerText = content;
  }
  return element;
}
