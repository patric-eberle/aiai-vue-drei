/**
 * 1. ☑️ Add to DOM, add console.log()
 * 2. Inject iFrame as last element on page
 * 3. What about route updates in Vue?
 */

window.addEventListener('load',function () {
  // Only add the iframe to the 'Home' page.
  if (window.location.pathname === '/') {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('src', '/webchat/');
    iframe.setAttribute('id', 'aiai-vue-drei');

    document.body.insertAdjacentElement('beforeend', iframe);
  }
})
