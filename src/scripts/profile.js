import {renderHeader, renderCard } from "./render.js";

function showProfile() {
    const profile = JSON.parse(localStorage.getItem("profile"))
    renderHeader([profile])
}

function showProfile2() {
    const user = JSON.parse(localStorage.getItem("user"))
    renderCard(user)
}

function handleNewSearch() {
    const button = document.querySelector('.button__user')

    button.addEventListener('click', () => {
        window.location.replace('/')
        // localStorage.clear()
    })
}

showProfile()
showProfile2()
handleNewSearch()