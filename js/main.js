
var isModernBrowser = 'querySelector' in document && 'localStorage' in window && 'addEventListener' in window;
if (isModernBrowser) {
    var openModal = function(type, url) {
        var overlay = document.createElement('div');

        if (type === 'image') {
            overlay.innerHTML = '<div id="overlay-image-wrap"><img id="overlay-image" src="' + url + '"></div>';
        }
        else if (type === 'vimeo') {
            overlay.innerHTML = '<iframe src="' + url + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }

        overlay.id = 'overlay';
        overlay.className = type;
        overlay.innerHTML += '<a href="#" id="overlay-close">Close</a>';

        document.body.style.overflow = 'hidden';
        document.body.appendChild(overlay);

        var close = document.getElementById('overlay-close');
        close.addEventListener('click', closeModal, false);
    },

    openVimeo = function(event) {
        event.preventDefault();
        var el = event.target,
            url = '//player.vimeo.com/video/' + el.getAttribute('href').split('vimeo.com/')[1];

        openModal('vimeo', url);
    },

    openImage = function(event) {
        event.preventDefault();
        var el = event.target,
            url = el.getAttribute('href');

        openModal('image', url);
    },

    closeModal = function(event) {
        event.preventDefault();
        var overlay = document.getElementById('overlay');
        overlay.parentNode.removeChild(overlay);
        document.body.style.overflow = 'auto';
    },

    vimeos = document.querySelectorAll('[data-vimeo]'),
    images = document.querySelectorAll('[data-image]');

    for (var i = 0; i < vimeos.length; i++) {
        vimeos[i].addEventListener('click', openVimeo, false);
    }

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', openImage, false);
    }
}
