import axiosClient from "./axiosClient"

const api = {
    getPostAll() {
        const url = '/posts'
        return axiosClient.get(url)
    },
    getPost(id) {
        const url = `/posts/}`
        return axiosClient.get(url, {
            params: {
                groupId: id
            }
        })
    },
    createPost(data) {
        const url = '/posts'
        return axiosClient.post(url, data)
    },
    updatePost(data) {
        const url = `/posts/${data.id}` // chỗ này tuỳ vào api người viết như cái api a viết thì bạn em không cần đoạn
        // ${data.id} này mà em thay vào url "/api/v1/update/user"
        return axiosClient.put(url, data)
    },
    delete(id) {
        const url = `/posts/${id}`
        return axiosClient.delete(url)
    }
}

export default api