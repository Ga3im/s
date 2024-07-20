
export async function getCards(token){
    const responce = await fetch('https://wedev-api.sky.pro/api/kanban', {
        headers:{
            Authorization: `Bearer ${token}`
        },
        method:"GET"
    })
    if (!responce.ok) {
        throw new Error('Не удалось загрузить данные')
    }
    const data = await responce.json()
    return data
}

export async function register({login, name, password}){
    const responce = await fetch('https://wedev-api.sky.pro/api/user', {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        })
    })
    if(responce.status === 400){
        throw new Error('Пользователь с таким логином уже сущетсвует')
    }
    if (!responce.ok) {
        throw new Error('Не удалось загрузить данные')
    }
    const data = await responce.json()
    return data
}

export async function signIn({login, password}){
    const responce = await fetch('https://wedev-api.sky.pro/api/user/login', {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        })
    })
    if(responce.status === 400){
        throw new Error('Передан неправильный логин или пароль')
    }
    if (!responce.ok) {
        throw new Error('Не удалось загрузить данные')
    }
    const data = await responce.json()
    return data
}

export const addTask = async ({
    token,
    title,
    topic,
    statut,
    description,
    date})=>{
    const responce = await fetch('https://wedev-api.sky.pro/api/kanban',{
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            topic,
            statut,
            description,
            date,
        })
    })
    if(responce.status === 400){
        throw new Error('Данные не в формате JSON')
    }
    if (!responce.ok) {
        throw new Error('Не удалось загрузить данные')
    }
    const data = await responce.json()
    return data
}
export const EditCardApi = async ({ status, description, date, token, id})=>{
    const responce = await fetch('https://wedev-api.sky.pro/api/kanban/'+ id,{
        method: 'PUT',
        headers:{
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
            status,
            description,
            date,
        })
    })
    const data = await responce.json()
    return data
}

export const DeleteCard = async ({id, token})=>{
    const res = await fetch('https://wedev-api.sky.pro/api/kanban/'+ id, {
        method:'DELETE',
        headers:{
            Authorization: `Bearer ${token}`
        },
    })
    const data = await res.json()
    return data
}