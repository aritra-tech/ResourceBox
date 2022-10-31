import {developmentdata} from '../data_folder/category1.js';

const container = document.getElementById('category1');

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