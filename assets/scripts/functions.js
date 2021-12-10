function addExperienceButtons(experiences){
    const divBtns = document.createElement('div');
    divBtns.id = 'btns-div'
    divBtns.classList.add('flex', 'flex-col', 'w-1/3', 'justify-center');

    for(let exp of experiences){
        console.log(exp)
        divBtns.append(addingExperienceButtons(exp));
    }

    return divBtns;
}

// Experience Descriptions Div
function addExperienceDescriptionDiv(){
    const div = document.createElement('div');
    div.classList.add('flex', 'flex-col', 'items-center', 'w-1/2');
    div.id = 'experience-description';
    return div;
}


function addingExperienceButtons(but){
    const btn = document.createElement('button');
    btn.textContent = but.title;
    btn.id = `expBtn-${but.id}`;
    btn.classList.add('bg-white', 'hover:bg-gray-100', 'text-gray-800', 'font-semibold', 'py-2', 'px-4', 'border', 'border-gray-400', 'rounded', 'shadow', 'my-5', 'rounded-full', 'text-4xl');
    btn.addEventListener('click', showExperience);
    btn.addEventListener('click', () => btn.style.backgroundColor = '#63b3ed')
    return btn;
}

function showExperience(e){
    const btn = document.getElementById(e.target.id);
    const div = document.getElementById('experience-description');
    div.innerHTML = '';
    let id = e.target.id.split('-')[1];

    let img = document.createElement('img');
    img.classList.add('w-32', 'md:w-40', 'lg:w-44');
    img.src = experience[id].logo;

    let h2 = document.createElement('h2');
    h2.classList.add('my-6', 'text-white');
    h2.textContent = experience[id].company;

    let h3 = document.createElement('h3');
    h3.classList.add('my-6', 'text-white');
    h3.textContent = experience[id].date;

    let ul = document.createElement('ul');
    ul.classList.add('list-disc', 'font-normal', 'text-2xl');

    for(let i of experience[id].description){
        ul.append(addDescription(i));
    }
 
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(ul);
    resetBgColorButtons();
}

function addDescription(description){
    let li = document.createElement('li');
    li.classList.add('text-white', 'py-4');
    li.textContent = description;
    return li;

}

function resetBgColorButtons(){
    for(let id of experience){
        let btn = document.getElementById(`expBtn-${id.id}`);
        btn.style.backgroundColor = 'white';
    }
}