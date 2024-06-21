import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv';
const prisma = new PrismaClient()
config();

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

async function getUser(username: string) {
    try {
        const res = await prisma.user.findFirst({
            where: { email: username },
            select:{
                firstname: true,
                lastname: true,
                email:true
            }
        });
        if(res){

            console.log("\nUser Details-")
            console.log("\nFIRSTNAME : " + res?.firstname +"\nLASTNAME : "+  res?.lastname + "\nEMAIL : "+ res?.email + " \n" );
            return res;
        }
        else{
            console.log("User Not Found");
            return null;
        }
    } catch (error) {
        console.error('Error updating user:', error);
        throw error; 
    }
    
}
getUser("papu@gmail.com");