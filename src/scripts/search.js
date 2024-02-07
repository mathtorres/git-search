import { getUserByName, getUserByRepository } from "./request.js";

export function searchUserCard() {
    const input = document.querySelector('.search__input')
    const button = document.querySelector('.search__button')
    
    button.addEventListener('click', async() => {
        const profile = await getUserByName(input.value)
        const card =  await getUserByRepository(input.value)
        
    })
    
}
