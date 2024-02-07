export async function renderCard(array) {
    const mainList  = document.querySelector('.container__card')

    mainList.innerHTML = ''

    array.forEach(element => {
        const card = createCard(element)

        mainList.appendChild(card)
    })
}

function createCard(element) {
    const item = document.createElement('li')
    const title = document.createElement('h3')
    const cardDescription = document.createElement('p')
    const button = document.createElement('a')

    item.classList.add('card')
    title.classList.add('card__title')
    cardDescription.classList.add('card__description')
    button.classList.add('card__button')

    title.innerText = element.name
    cardDescription.innerText = element.description
    button.href = element.html_url
    button.target = '_blank'
    button.innerText = "Repositório"

    item.append(title, cardDescription, button)

    return item
}

export function renderHeader(array) {
    const mainList = document.querySelector('.header__container')

    mainList.innerHTML = ''

    array.forEach(element => {
        const header = createHeader(element)
        
        mainList.appendChild(header)
    })
}

function createHeader(element) {
    const div = document.createElement('div')
    const list = document.createElement('p')
    const image = document.createElement('img')
    const user = document.createElement('h2')
    const containerButton = document.createElement('p')
    const button = document.createElement('button')

    list.classList.add('header__item')

    image.classList.add('user__image')
    image.src = element.avatar_url
    image.alt = element.name

    user.classList.add('user__name')
    user.innerText = element.name

    containerButton.classList.add('container__button')

    button.classList.add('button__user')
    button.innerText = 'Trocar de usuário'

    list.append(image, user)

    containerButton.appendChild(button)

    div.append(list, containerButton)

    return div

}