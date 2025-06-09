import { z } from "zod" ;
import { withValidatedMail } from "@/lib/withValidateMail";


// define zod schema for the form 
const contactSchema = z.object({
    name : z.string().min(1),
    email : z.string().email() ,
    message : z.string().min(10) ,
})


// Map validated data ---> MailOptions 
function mapContactMail(data: z.infer<typeof contactSchema>) {
    return {
      to: "support@myapp.com",
      subject: `Contact form: ${data.name}`,
      text: `Name: ${data.name}\nMessage: ${data.message}`,
      html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p>${data.message}</p>`,
    };
  }


// export handler 
export default withValidatedMail(contactSchema, mapContactMail) 