import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
	res.status(400).json({
		msg: "getUsers",
	});
};

export const getUser = (req: Request, res: Response) => {
	const { id } = req.params;
	res.status(400).json({
		msg: "getUser",
		id,
	});
};

export const postUser = (req: Request, res: Response) => {
	const { body } = req;

	res.json({ msg: "Post User", body });
};

export const putUser = (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;

	res.json({ msg: "Put User", id, body });
};

export const deleteUser = (req: Request, res: Response) => {
	const { id } = req.params;
	res.json({ msg: "Delete User.", id });
};
