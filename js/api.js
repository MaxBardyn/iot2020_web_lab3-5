const BASE_URL = 'http://localhost:8073'
const RESOURSE_URL = `${BASE_URL}/dresses`

const baseRequest = async({ urlPath = '', method = 'GET', body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }
        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams)
    } catch (error) {
        console.error('HTTP ERROR: ', error)
    }
}

export const getAllDresses = async() => {
    const rawResponse = await baseRequest({ method: 'GET' })
    return rawResponse.json()
}

export const postDress = body => baseRequest({ method: 'POST', body })

export const updateDress = (id, body) => baseRequest({ urlPath: `/${id}`, method: 'PUT', body })

export const deleteDress = id => baseRequest({ urlPath: `/${id}`, method: 'DELETE' })