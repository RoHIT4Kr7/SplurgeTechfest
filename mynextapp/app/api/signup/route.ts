import { NextResponse } from 'next/server';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, confirmPassword, name, lastname, mobile } = body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user: User = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        lastname,
        mobile,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user: { id: user.id, email: user.email, name: user.name } });
  } catch (error: any) {
    if (error.code === 'P2002') {
      // Unique constraint failed (email or mobile already exists)
      return NextResponse.json({ error: 'User already exists' }, { status: 500 });
    }
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}