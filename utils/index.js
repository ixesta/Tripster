export const timelinesGenerator = (array, limit, button) => {

    const buttons = Math.round(array.length / limit)

    if (array.length < limit) return array
    if (buttons === 1) return array

    if (button === 0) {
        if (array.length === limit + 1) return array
        if (limit === 2) {
            return array.length % 2 === 0 ? array.slice(0, limit) : array.slice(0, limit + 1)
        }
        if (limit === 3) {
            return array.length % 3 === 0 ? array.slice(0, limit) : array.slice(0, limit)
        }
        if (limit === 4) {

            return array.length % 2 === 0 ? array.slice(0, limit) : array.slice(0, limit + 1)
        }
    }


    if (button > 0) {
        if (array.length === limit + 1) return array[array.length - 1]
        if (limit === 2) {
            let startPoint = array.length % 2 === 0 ? limit * button : (limit * button) + 1
            return array.length % 2 === 0 ? array.slice(startPoint, startPoint + limit) : array.slice(startPoint, startPoint + limit)
        }
        if (limit === 3) {
            let startPoint = limit * button
            return array.length % 3 === 0 ? array.slice(startPoint, startPoint + limit) : array.slice(startPoint, startPoint + limit + 1)
        }

        if (limit === 4) {
            let startPoint = limit * button
            return array.length % 2 === 0 ? array.slice(startPoint, startPoint + limit) : array.slice(startPoint + 1, startPoint + limit + 1)
        }
    }

}
