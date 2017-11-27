'use strict';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getComments(arr) {
  var comments = [];
  for (var c = 0; c < getRandomNumber(1, 20); c++) {
    if (Math.floor() > 0.5) {
      comments.push(comments[getRandomItem(arr)]);
    } else {
      comments.push(variantsComments[getRandomItem(arr)] + ' ' + variantsComments[getRandomItem(arr)]);
    }
  }
  return comments;
}

function fillImage(el, key, url) {
  el.querySelector(key).setAttribute('src', url);
}

function fillTextContent(el, key, content) {
  el.querySelector(key).textContent = content;
}

function renderPicture(data) {
  var picture = pictureTemplate.cloneNode(true);
  fillImage(picture, 'img', data.url);
  fillTextContent(picture, '.picture-likes', data.likes);
  fillTextContent(picture, '.picture-comments', data.comments.length);

  return picture;
}

function displayPicture() {
  var fragment = document.createDocumentFragment();
  for (var p = 0; p < pictures.length; p++) {
    fragment.appendChild(renderPicture(pictures[p]));
  }
  return fragment;
}

function renderImage(el, data) {
  fillImage(el, '.gallery-overlay-image', data.url);
  fillTextContent(el, '.likes-count', data.likes);
  fillTextContent(el, '.comments-count', data.comments.length);
}

var variantsComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var pictures = [];
for (var i = 0; i < 25; i++) {
  var numberPictures = i + 1;
  pictures[i] = {
    url: 'photos/' + numberPictures + '.jpg',
    likes: getRandomNumber(15, 200),
    comments: getComments(variantsComments)
  };
}

var pictureTemplate = document.querySelector('#picture-template').content;
var picturesContainer = document.querySelector('.pictures');
var galleryOverlay = document.querySelector('.gallery-overlay');

picturesContainer.appendChild(displayPicture());
galleryOverlay.classList.remove('hidden');
renderImage(galleryOverlay, pictures[0]);
