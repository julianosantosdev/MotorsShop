import { Request, Response } from "express";
import createUsersService from "../services/users/createUsers.service";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUsersResponse,
} from "../interfaces/user.interfaces";
import listUsersService from "../services/users/listUsers.service";
import updateUsersService from "../services/users/updateUsers.service";
import getByIdUsersService from "../services/users/getByIdUsers.service";
import { deleteUsersService } from "../services/users/deleteUsers.service";

const createUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;
  const newUser = await createUsersService(userData);

  return response.status(201).json(newUser);
};

const listUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users: TUsersResponse = await listUsersService();

  return response.status(200).json(users);
};

const getByIdUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  const user: TUserResponse = await getByIdUsersService(userId);

  return response.status(200).json(user);
};

const updateUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);
  const userData: TUserUpdateRequest = request.body;

  const newUserData = await updateUsersService(userId, userData);

  return response.status(200).json(newUserData);
};

const deleteUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  await deleteUsersService(userId);

  return response.status(204).send();
};

export {
  createUsersController,
  listUsersController,
  getByIdUsersController,
  updateUsersController,
  deleteUsersController,
};