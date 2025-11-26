import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const result = await prisma.nAS.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        region: true,
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

    const { name, description, connectionType, publicIP, regionId, status } =
      body;

    const result = await prisma.nAS.create({
      data: {
        name: name,
        description: description,
        connectionType: connectionType,
        publicIP: publicIP,
        regionId: regionId,
        status: status,
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
