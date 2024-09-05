const screen = {
    userProfile: document.querySelector('.profile-data'), 
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1> 
                                            <p class = 'nome-usuario'>${user.userName}</p>
                                            <div class = 'seguidores-seguindo'>
                                            <p> 👥 Seguindo <span class = 'numero-seguindo'>${user.following}</span> </p>
                                            <p> 👥 Seguidores <span class = 'numero-seguidores'>${user.followers}</span></p>
                                            </div>
                                            <p class = 'bio'> ${user.bio ?? 'Não possui bio cadastrada 😥'} </p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">
                                                                        ${repo.name}
                                                                        <div class = 'repo-info'>    
                                                                            <p>🍴 ${repo.forks}</p>
                                                                            <p>⭐ ${repo.stargazers_count}</p>
                                                                            <p>👀 ${repo.watchers}</p>
                                                                            <p>👨‍💻 ${repo.language}</p> 
                                                                        </div>    
                                                                    </a>
                                                                </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`            
        }

        let eventsItens = ''
        user.events.forEach(event => {
            
            if (event.type === "PushEvent") {
                eventsItens += `<li><span>${event.repo.name}</span> -${event.payload.commits[0].message}</>`
                
            } else if(event.type === "CreateEvent"){
                eventsItens += `<li>Sem mensagem de commit!</>`
            }
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`            
        }

    },
    renderNotFund(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado!!!</h3>'
    }

}

export { screen }