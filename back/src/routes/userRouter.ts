import express, { Router } from "express";
import { userSchema } from "../types/user";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const app = express();

const client = new PrismaClient();

export const userRouter = Router();

userRouter.post("/signin", async (req, res) => {
  const body = req.body;
  const parsedData = userSchema.safeParse(body);

  if (!parsedData.success) {
    res.json({
      message: "All fields required",
    });
  }
  try {
    const user = await client.user.create({
      data: {
        UID: parsedData.data?.UID!,
        password: parsedData.data?.password!,
      },
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);
    res.json({
      message: "Login Successfully!",
      token,
    });
  } catch (e) {
    res.json({ message: "Please enter right credentials" });
  }
});
