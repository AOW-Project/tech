import { withValidatedMail } from "@/lib/withValidateMail";
import { vacancyFormSchema, mapVacancyFormMail } from "@/lib/formSchemas";

// Export handler for careers/vacancy form
export default withValidatedMail(vacancyFormSchema, mapVacancyFormMail); 