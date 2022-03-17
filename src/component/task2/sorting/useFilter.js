export const UseFilter = (jsonData, selectName) => {
    const filter = jsonData.filter(user => user.name === selectName)
    return filter.sort(function (a, b) {
        let emailA = a.email.toLowerCase(), emailB = b.email.toLowerCase()
        if (emailA < emailB)
            return -1
        if (emailA > emailB)
            return 1
        return 0
    })
}