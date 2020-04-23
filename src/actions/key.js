function parseKeyCode(keyCode) {
  switch(keyCode) {
    case 'ESC':
      return 27;
    case 'ENTER':
      return 13;
  }
}

export function key(node, params) {
  let keyCode;
  let target;
  if(typeof params === 'string') {
    keyCode = parseKeyCode(params);
    target = document;
  } else {
    keyCode = parseKeyCode(params.keyCode);
    target = params.local ? node : document;
  }
  
  const keydownClickListener = event => {
    if ((params.local || event.target.nodeName !== 'INPUT') && event.which === keyCode) {
      node.dispatchEvent(new CustomEvent('key'));
    }
  };


  const removeClickListener = () => {
    target.removeEventListener("keydown", keydownClickListener);
  };

  target.addEventListener("keydown", keydownClickListener);

  return {
    destroy() {
      removeClickListener();
    }
  }
}
