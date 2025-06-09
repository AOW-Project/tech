import { withValidatedMail } from "@/lib/withValidateMail";
import { multiStepFormSchema, mapMultiStepFormMail } from "@/lib/formSchemas";

// Export handler for project inquiry form
export default withValidatedMail(multiStepFormSchema, mapMultiStepFormMail); 