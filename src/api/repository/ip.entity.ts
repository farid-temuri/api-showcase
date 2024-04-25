enum statuses {
	fail = 'fail',
	success = 'success',
}

type errorRes = {
	message: string,
	query: string,
	status:statuses.fail
}

type SuccessRes<T> =  T & {
	status: statuses.success,	
}

export type BaseResData<T> = errorRes | SuccessRes<T>

export const handleRes = <T>( data: BaseResData<T> ) => {
	return data.status === statuses.fail
	?{
		error: data
	}:{
		success:data
	}
	
}

export type IpSuccessResult = {
	"query":string,
	"country":string,
	"countryCode":string,
	"region":string,
	"regionName":string,
	"city":string,
	"zip":string,
	"lat": number,
	"lon": number,
	"timezone":string,
	"isp":string,
	"org":string,
	"as":string
}
