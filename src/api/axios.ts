import Axios from 'axios'

const axios = Axios.create( {
	baseURL:'http://ip-api.com/json/'
})

export {
	axios
}
