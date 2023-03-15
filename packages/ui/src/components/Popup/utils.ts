

export function creatPopupRoot(id: string) {
  let dom = document.getElementById(id);
  if (dom) {
    return dom;
  };
  dom = document.createElement('div');
  dom.id = id;
  dom.style.setProperty('position', 'absolute');
  dom.style.setProperty('top', '0');
  dom.style.setProperty('left', '0');
  document.body.appendChild(dom);
  return dom;
}