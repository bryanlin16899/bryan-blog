
// deprecated
// export async function GET(req: any, res: any) {
//     const blogVaultPath = path.join(process.cwd(), "public", "BlogVault");

//     const result = await new Promise<string>((resolve, reject) => {
//         exec("docker exec my_blog git -C public/BlogVault pull", { cwd: blogVaultPath }, (error, stdout, stderr) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(stdout);
//             }
//         });
//     });

//     return NextResponse.json({ success: true, stdout: result });
// };
