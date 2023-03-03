import { application } from "express";
import { Registers } from "../entities/registers.entities";

export interface IUser {
    id: string;
    userName: string;
    email: string;
    password: string;
    registers: Registers[]
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserAuth {
    id: string;
    user: string;
}
