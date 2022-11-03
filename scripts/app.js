import {developmentdata} from '../data_folder/category1.js';

const categorybox = document.getElementById('category-name');
const container = document.getElementById('category1');

categorybox.innerHTML="Development Resource";
developmentdata.forEach(function(result) {
    const content =
    `
    <div class="category">
        <div class="categoryimg">
            <img class="categoryimg" src="${result.imglink}" alt="${result.imgalt}">
        </div>
        <div class="categorytext">
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <button class="button">Read More</button>
        </div>
    </div>
    `;
    // console.log(htmlCode);
    container.innerHTML+=content;
});