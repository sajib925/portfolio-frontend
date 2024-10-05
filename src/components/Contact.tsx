"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().min(1).email(),
  subject: z.string().min(1),
  message: z.string().min(5),
});

export type ContactDataType = z.infer<typeof formSchema>;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDataType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactDataType) => {
    try {
      const response = await axios.post(
        "https://portfolio-backend-5nv1.onrender.com/api/contact/",
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Message sent successfully:", response.data);
      // Optionally, you can display a success message to the user here.
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, display an error message to the user here.
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 rounded-[8px] bg-[#27272c] p-10"
    >
      <h3 className="text-4xl text-accent">Contact Me for Collaboration</h3>
      <div className="w-full lg:max-w-[500px] ">
        <p className="text-white/60">
          Get in touch with me to discuss your project ideas, collaborations, or
          any inquiries.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          {...register("firstName")}
          type="text"
          placeholder="First name"
        />
        <Input {...register("lastName")} type="text" placeholder="Last name" />
        <Input
          {...register("email")}
          type="email"
          placeholder="Email address"
        />
        <Input {...register("subject")} type="text" placeholder="Subject" />
      </div>
      <Textarea
        {...register("message")}
        className="h-[200px]"
        placeholder="Type your message here."
      />
      <Button size="md" type="submit" className="max-w-40">
        Send message
      </Button>
    </form>
  );
};
