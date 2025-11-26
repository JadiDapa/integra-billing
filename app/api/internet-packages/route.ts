import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const result = await prisma.internetPackage.findMany({
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
    const body = await req.json();

    const {
      name,
      speedType,
      downloadSpeed,
      uploadSpeed,
      activeperiod,
      period,
      providerPrice,
      resellerPrice,
      regionId,
      status,
    } = body;

    const result = await prisma.internetPackage.create({
      data: {
        name: name,
        speedType: speedType,
        downloadSpeed: downloadSpeed,
        uploadSpeed: uploadSpeed,
        activeperiod: activeperiod,
        period: period,
        providerPrice: providerPrice,
        resellerPrice: resellerPrice,
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
