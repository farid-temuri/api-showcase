import { axios } from "../axios"
import { BaseResData, IpSuccessResult } from "./ip.entity"



export const ipRepository = {
	getByIp: async (query:string) => {
		const res = await axios.get<
			BaseResData<IpSuccessResult>
			>( `/${ query }` )
		return res.data
	}
}