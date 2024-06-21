"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = require("dotenv");
const prisma = new client_1.PrismaClient();
(0, dotenv_1.config)();
// async function insert(email: string, firstname: string, lastname: string, password: string,){
//     const res = await prisma.user.create({
//         data:{
//             email,
//             firstname,
//             lastname,
//             password,
//         },
//         select:{
//             id: true,
//             password: true,
//             firstname:true,
//             lastname:true,
//         }
//     })
//     console.log(res);
// }
// insert("jethia@gmail.com","jetha", "Sarpal","ewxxx");
// SELECT * FROM public.user;
// UPDATE
// interface checkCredential {
//     firstname: string;
//     lastname: string;
// };
// async function updateUser(username: string, { firstname, lastname }: checkCredential) {
//     try {
//         const res = await prisma.user.update({
//             where: { email: username },
//             data: {
//                 firstname,
//                 lastname,
//             },
//         });
//         console.log(res);
//         return res;
//     } catch (error) {
//         console.error('Error updating user:', error);
//         throw error; 
//     }
// }
// updateUser("papu@gmail.com", { firstname: "papu", lastname: "gill" });
// GET USERS          --------->
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.findFirst({
                where: { email: username },
                select: {
                    firstname: true,
                    lastname: true,
                    email: true
                }
            });
            if (res) {
                console.log("\nUser Details-");
                console.log("\nFIRSTNAME : " + (res === null || res === void 0 ? void 0 : res.firstname) + "\nLASTNAME : " + (res === null || res === void 0 ? void 0 : res.lastname) + "\nEMAIL : " + (res === null || res === void 0 ? void 0 : res.email) + " \n");
                return res;
            }
            else {
                console.log("User Not Found");
                return null;
            }
        }
        catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    });
}
getUser("papu@gmail.com");
