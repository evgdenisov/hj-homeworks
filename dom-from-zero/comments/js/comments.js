'use strict';

function test1(comments) {
      const productNodes = comments.map(test);
      const fragment = productNodes
        .reduce((fragment, currentValue) => {
          fragment.appendChild(currentValue);
          return fragment;
        }, document.createDocumentFragment());

      document.querySelector('.comments').appendChild(fragment);
}

function test(element) {
      
      const wrap = document.createElement('div');
      wrap.className = 'comment-wrap';
      const photo = document.createElement('div');
      photo.className = 'photo';
      photo.title = element.author.name;
      wrap.appendChild(photo);

      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.style = `background-image: url('${element.author.pic}')`
      photo.appendChild(avatar);

      const block = document.createElement('div');
      block.className = 'comment-block';
      const text = document.createElement('p');
      console.log(element.text)
      text.textContent = element.text;
      block.appendChild(text);
      wrap.appendChild(block);

      const bottom = document.createElement('div');
      bottom.className = 'bottom-comment';
      const date = document.createElement('div');
      date.className = 'comment-date';
      date.textContent = new Date(element.date).toLocaleDateString('ru-RU');
      bottom.appendChild(date);

      const ul = document.createElement('ul');
      ul.className = 'comment-actions';
      const complain = document.createElement('li');
      complain.className = 'complain';
      complain.textContent = 'Пожаловаться';
      ul.appendChild(complain);

      const reply = document.createElement('li');
      reply.className = 'reply';
      reply.textContent = 'Ответить';
      ul.appendChild(reply);
      bottom.appendChild(ul);
      block.appendChild(bottom);
      return wrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(test1);
