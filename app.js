let showMore = document.querySelector('#showMore');
let moreInfo = document.querySelector('.video-content-information__moreInfo');

showMore.addEventListener('click', e => {
  if (moreInfo.style.display !== 'block') {
    moreInfo.style.display = 'block';
    showMore.textContent = 'SHOW LESS';
  } else {
    moreInfo.style.display = 'none';
    showMore.textContent = 'SHOW MORE';
  }
})

