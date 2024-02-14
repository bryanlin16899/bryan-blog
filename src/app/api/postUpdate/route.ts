import { exec } from "child_process";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(req: any, res: any) {
    const blogVaultPath = path.join(process.cwd(), "public", "BlogVault");

    const result = await new Promise<string>((resolve, reject) => {
        exec("git pull", { cwd: blogVaultPath }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });

    return NextResponse.json({ success: true, stdout: result });
};
