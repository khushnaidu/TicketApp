import Ticket from "@/app/(models)/Ticket";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}){
    try {
        const {id} = params 
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message: "Ticket Deleted"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500});
    }
}