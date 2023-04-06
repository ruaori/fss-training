const userData = [
    {
        username: 'thang', password: '123'
    },
    {
        username: 'test',
        password: '123456'
    }
]

const handleLogin = (data) => {
    const isMatched = userData.some((x) => {
        if (x.username === data.username && x.password === data.password)
            return true
        else
            return false
    })
    return isMatched ? true : false
}

export default handleLogin