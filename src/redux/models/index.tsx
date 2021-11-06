export interface UserInfoData{
	stateName: string,
	name: string,
	lastname: string,
	address: string
}

export interface UserData{
	id: number,
	idUser: string,
	creationDate: string,
	status: number,
	userResponseDto: [UserInfoData]
}

// Get principal Array
export interface DataTotal{
	status: number,
	description: string,
	objModel: [UserData]
}

export interface StateData{
	availability: DataTotal,
	//availabilityUsers: [UserData]
}