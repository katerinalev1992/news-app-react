import * as Firebase from 'firebase';

export interface IUser{
    id: string;
    email: string;
    name: string;
}

export interface IUserHash{
    [key: string]: IUser;
}

export default class User implements IUser{
    public email: string;
    public name: string;
    public id: string;

    constructor(user: Firebase.User){
        this.id = user.uid;
        this.email = user.email || '';
        this.name = user.displayName || '';
    }
}