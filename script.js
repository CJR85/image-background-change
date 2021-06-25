const ImgBox = document.querySelector('.img-box'),
  imgWrap = document.querySelector('.img-wrap'),
  originalImg = document.getElementById('originalImg'),
  line = document.getElementById('line'),
  leftSpace = ImgBox.offsetLeft;

originalImg.style.width = ImgBox.offsetWidth + 'px';

ImgBox.onmousemove = function (e) {
  const boxWidth = e.pageX - leftSpace + 'px';
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
