'use strict';
const addbook = document.querySelector('.addbook');
const search = document.querySelector('.search1');
const abc=document.querySelector('.abc');
const container=document.querySelector('.container');
const container1=document.querySelector('.container1');
const backbut=document.querySelector('.backpage1');
const backbut2=document.querySelector('.backpage2');



const adding = function () {
  abc.style.opacity=0;
  // abc.style.z-index=-1;
  abc.classList.add('index');
  container.classList.remove('hidden');
  container1.classList.add('hidden');

};

const back =function()
{
  abc.style.opacity=1;
  abc.classList.remove('index');
  container.classList.add('hidden');
};

const searching= function() {
  abc.style.opacity=0;
  abc.classList.add('index');
  container1.classList.remove('hidden');
}
addbook.addEventListener('click', adding);
search.addEventListener('click', searching);
backbut.addEventListener('click', back);
backbut2.addEventListener('click', back);


