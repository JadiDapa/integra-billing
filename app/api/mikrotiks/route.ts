import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const result = await prisma.mikrotik.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const body = await req.json();

    const {
      deviceName,
      nasId,
      connectionType,
      ipAddress,
      portAPI,
      username,
      password,
      description,
      regionId,
      status,
    } = body;

    const result = await prisma.mikrotik.create({
      data: {
        deviceName,
        nasId,
        connectionType,
        ipAddress,
        portAPI,
        username,
        password,
        description,
        regionId,
        status,
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(
      { message: "Something went wrong!", error: (error as Error).message },
      { status: 500 }
    );
  }
}
