export const SortingOrder = (user, order, revert) => {

    const newUser = [...user]
        if (!revert) {
            newUser.sort(function (a, b) {
                return a[order] > b[order] ? 1 : b[order] > a[order] ? -1 : 0;
            })
        } else if (revert) {
            newUser.sort(function (a, b) {
                return a[order] > b[order] ? -1 : b[order] > a[order] ? 1 : 0;
            })
        }
    return newUser;
}