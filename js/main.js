
var isModernBrowser = 'querySelector' in document && 'localStorage' in window && 'addEventListener' in window;
if (isModernBrowser) {
    var openModal = function(type, id) {
        var overlay = document.createElement('div');

        if (type === 'vimeo') {
            overlay.innerHTML = '<iframe src="//player.vimeo.com/video/' + id + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }

        overlay.id = 'overlay';
        overlay.innerHTML += '<a href="#" id="overlay-close">Close</a>';

        document.body.style.overflow = 'hidden';
        document.body.appendChild(overlay);

        var close = document.getElementById('overlay-close');
        close.addEventListener('click', closeModal, false);
    },

    openVimeo = function(event) {
        event.preventDefault();
        var el = event.target,
            id = el.getAttribute('href').split('vimeo.com/')[1];

        openModal('vimeo', id);
    },

    closeModal = function(event) {
        event.preventDefault();
        var overlay = document.getElementById('overlay');
        overlay.parentNode.removeChild(overlay);
        document.body.style.overflow = 'auto';
    },

    vimeos = document.querySelectorAll('[data-vimeo]');
    for (var i = 0; i < vimeos.length; i++) {
        vimeos[i].addEventListener('click', openVimeo, false);
    }
}
