import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        if (!params.id) {
            return new NextResponse("ProductId is required", { status: 400 })
        }
        const product =  await prismadb.product.findUnique({
            where: { id: params.id },
            include:{
                images:true,
                category:true,
                size:true,
                color:true
            }

        })
    

        return NextResponse.json(product)

    } catch (error) {
        console.log("[PRODUCT_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
