const ImgBox = document.querySelector('.img-box'),
  imgWrap = document.querySelector('.img-wrap'),
  leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function (e) {
  const boxWidth = e.pageX - leftSpace + 'px';
  imgWrap.style.width = boxWidth;
};
