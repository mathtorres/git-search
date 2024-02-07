export async function getUserByName(name) {
    const user = await fetch(`https://api.github.com/users/${name}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(res => {
        localStorage.setItem('profile', JSON.stringify(res))
    })

    return user
}

export async function getUserByRepository(name) {
    const repository = await fetch(`https://api.github.com/users/${name}/repos`, {
        method:'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(res => {
        localStorage.setItem('user', JSON.stringify(res))

        if(res.message !== "Not Found") {
            window.location.replace('/src/pages/profile.html')
        } else {
            window.location.replace('/src/pages/error.html')
        }
    })

    return repository
} 