'use strict';


function createElement(content) {
  const element = document.createElement(content.name);
  
  if ((typeof content == 'string') || (typeof content == 'number')) {
    return document.createTextNode(content);
  }
  if ((content === undefined) || (content === null)) {
    return document.createTextNode('');
  }

  if (content.props && Object.keys(content.props).length > 0) {
    Object.keys(content.props).forEach(key => {
      if (content.props[key]) {
        element.setAttribute(key, content.props[key]);
      }
    });
  }
  if (content.childs && content.childs.length > 0) {
    content.childs.forEach(child => {
      element.appendChild(createElement(child));
    })
  }
  return element;
}