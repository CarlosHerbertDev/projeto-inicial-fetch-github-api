import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"

import {user} from '/src/scripts/objects/user.js' 
import { screen } from '/src/scripts/objects/screen.js'


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
        if(isEnterKeyPressed) {
            getUserData(userName)
        }
})




async function getUserData (userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories (repositoriesResponse)

    screen.renderUser (user)

}










// function getUserProfile(userName){
//     user(userName).then(userData => {
//         let userInfo = `<div class="info">
//                         <img src="${userData.avatar_url}" alt="Foto do perfil do usuário" /> 
//                         <div class="data">
//                         <h1>${userData.name ?? 'Não possui nome cadastrado 😥'}</h1> 
//                         <p>${userData.bio ?? 'Não possui bio cadastrada 😥'}</p>
//                         </div>
//                         </div>`

//         document.querySelector('.profile-data').innerHTML = userInfo

//         getUserRepositories(userName)
//     })
// }

// function getUserRepositories (userName) { 
//     repositories(userName).then(reposData => { 
        
//         let repositoriesItens = ""

//         reposData.forEach(repo => {
//             repositoriesItens += `<li><a href="${repo.html_url}">${repo.name}</a></li>`
//             })

//             document.querySelector('.profile-data').innerHTML += `<div class="repositories section">
//                                                                     <h2>Repositórios</h2>
//                                                                     <ul>${repositoriesItens}</ul>
//                                                                 </div>`
//     } )
// }   