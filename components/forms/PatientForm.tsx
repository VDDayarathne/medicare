"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomFormField from '../CustomFormFeild';
import SubmitButton from '../SubmitButton';
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { createUser } from "@/lib/actions/patient.actions"
import { useRouter } from 'next/navigation';





export enum FormFieldType{
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

 
const PatientForm=()=> {
  // const router = useRouter();
  const [isLoading, setisLoading] = useState(false)
  const router = useRouter();
  
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 

  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setisLoading(true);

    try{
      const userData={name, email, phone};
      const user = await createUser(userData);
      router.push(`/patients/${user.$id}/register`);

    } 
  catch(error)
    {
      console.log(error);
    }
    setisLoading(false);
  }
    return(
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="text-32-bold md:text-36-bold">Hi there✌️</h1>
            <p className="text-dark-700">Schedule your first appointment.</p>
        </section>

        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
        />

        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
        />

        <CustomFormField 
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="phone number"
            placeholder="(+94) xx xxx xxxx)"
        />
        <SubmitButton isLoading={isLoading}> Get Started </SubmitButton>
      </form>
    </Form>
    )
}  

export default PatientForm;