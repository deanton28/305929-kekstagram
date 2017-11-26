'use strict';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getCommentsArray(arr) {
  var commentsTemp = arr;
  var commentsToPicture = [];
  for (var c = 0; c < getRandomNumber(1, 2); c++) {
    var commentsArray = commentsTemp.splice(getRandomItem(commentsTemp), 1).toString();
    commentsToPicture.push(commentsArray);
  }
  return commentsToPicture;
}

var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var pictures = [];

for (var i = 0; i < 25; i++) {

  var numberPictures = i + 1;

  pictures[i] = {
    url: 'photos/' + numberPictures + '.jpg',
    likes: getRandomNumber(15, 200),
    comments: getCommentsArray(comments)
  };
}

console.log(pictures)
