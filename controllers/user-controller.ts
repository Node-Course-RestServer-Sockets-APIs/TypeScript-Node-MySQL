import { Request, response, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
	const users = await User.findAll();
	res.json({
		msg: "getUsers",
		users,
	});
};

export const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	const user = await User.findByPk(id);
	if (user) {
		res.json({
			msg: "getUser",
			user,
		});
	} else {
		res.status(404).json({ msg: "Not user found." });
	}
};

export const postUser = async (req: Request, res: Response) => {
	const { body } = req;

	try {
		const { name, email } = body;
		const data = { name, email };

		await User.create(data, { ignoreDuplicates: false }).then((user) => {
			return res.json({ msg: "Post User", user });
		});
	} catch (error: any) {
		console.log(error);
		return res.status(500).json({ msg: "Talk to an administrator." });
	}
};

export const putUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { name, email } = req.body;

	try {
		const user = await User.findByPk(id);
		if (!user) {
			res.status(400).json({ msg: "No user detected with id: " + id });
		} else {
			await user.update({ name, email });
			res.json({ msg: "PutUser", user });
		}
	} catch (error: any) {
		console.log(error);
		return res.status(500).json({ msg: "Talk to an administrator." });
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id);
		if (!user) {
			res.status(400).json({ msg: "No user detected with id: " + id });
		} else {
			await user.update({ state: 0 });
			res.json({ msg: "Delete User.", user });
		}
	} catch (error: any) {
		console.log(error);
		return res.status(500).json({ msg: "Talk to an administrator." });
	}
};
