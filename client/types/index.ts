export interface IUserLogin {
    success:Boolean
    data?:String
    message?:String
}
export interface IIsUserTodaysPillTaken {
    success:Boolean
    data:Boolean
}
export interface IUser {
    _id: String
    email: String
    name: String
    surname: String
    iat: Number
    exp: Number
  }