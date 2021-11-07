export interface UserInfoData{
	stateName: string,
	name: string,
	lastname: string,
	address: string,
	idState: number
}

export interface UserData{
	id: number,
	idUser: string,
	creationDate: string,
	status: number,
	userResponseDto: [UserInfoData]
}

// payment
export interface PaymentInfo{
	idPaymentVoucher: number,
	suscriptionId: number,
	creationDate: string,
	namePicture: string
}

export interface PaymentData{
	idPayment: number,
	payDate: string,
	nextExpiration: string,
	paymentVouchers: [PaymentInfo]
}

// Get principal Array
export interface DataTotal{
	status: number,
	description: string,
	objModel: [UserData]
}

// Get Payment Array
export interface PaymentDataTotal{
	status: number,
	description: string,
	objModel: [PaymentData]
}

export interface PaymentState{
	paymentAvailability: PaymentDataTotal,
}

export interface StateData{
	availability: DataTotal,
	//availabilityUsers: [UserData]
}