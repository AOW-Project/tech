import { withValidatedMail } from "@/lib/withValidateMail";
import { contactSchema, mapContactMail } from "@/lib/formSchemas";

// Export handler using the centralized schema and mapping
export default withValidatedMail(contactSchema, mapContactMail); 