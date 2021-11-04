export interface UserInfoData{
	stateName: String,
	name: String,
	lastname: String,
	address: String,
}

export interface UserData{
	idUser: String,
	creationDate: String,
	status: Number
}

export interface DataTotal{
	status: Number,
	description: string,
	objModel: [UserData]
}

export interface UserState{
	availability: DataTotal,
	availabilityUsers: [UserData]
}