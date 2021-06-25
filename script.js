const ImgBox = document.querySelector('.img-box'),
  imgWrap = document.querySelector('.img-wrap'),
  originalImg = document.getElementById('originalImg'),
  leftSpace = ImgBox.offsetLeft;

originalImg.style.width = ImgBox.offsetWidth + 'px';

ImgBox.onmousemove = function (e) {
  const boxWidth = e.pageX - leftSpace + 'px';
  imgWrap.style.width = boxWidth;
};
