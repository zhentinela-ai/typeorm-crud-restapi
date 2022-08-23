import { Request, Response } from "express";
import { User } from "../entities/User";

export async function createUser(req: Request, res: Response) {
  try {
    const { firstname, lastname } = req.body;

    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;

    await user.save();

    res.json(user);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { firstname, lastname } = req.body;
  const user = await User.findOneBy({ id: parseInt(req.params.id) });
  if (!user) return res.status(404).json({ message: "User doesn't exists" });

  user.firstname = firstname;
  user.lastname = lastname;

  user.save();

  return res.json([]);
};
