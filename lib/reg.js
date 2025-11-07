import bcrypt from 'bcrypt'
import { db } from "@/lib/db";

//The password is stored securely as a hashed string. 

const signUp = async (formData) => {
  const name= formData.get('name')
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const hashedPass = await bcrypt.hash(password, 10)
    await db.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: hashedPass
      }
    })
    return { success: true };
  } catch (error) {
    return { success: false, error: "Could not create account." };
  }
  return {success:false}

}

export default signUp;