import Property from "../../../../common/Property";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeClosedIcon, ImageIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { useTheme } from "../../../../hooks/useTheme";
import { Button, Flex, Input } from "../../../@ui/_index";

interface Form {
   username: string;
   email: string;
   password: string;
   picture?: string;
}

const Schema: ZodType<Form> = z.object({
   username: z.string().min(3, { message: "Too short." }).max(16, { message: "Too long." }),
   email: z.string().email({ message: "Invalid email." }),
   password: z.string(),
   picture: z.string().url({ message: "No URL." }),
});

type UserCredentials = z.infer<typeof Schema>;

type Props = {};

const Createuser = ({}: Props) => {
   const { theme } = useTheme();
   const { doRegistration } = useAuth();

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm<UserCredentials>({ resolver: zodResolver(Schema) });

   const onSubmit: SubmitHandler<UserCredentials> = async (data) => {
      const response = await doRegistration(data);

      console.log("SUBMIT");

      if (response.done) {
         alert("Registration complete!");
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Flex align="c" orientation="v" className={`ml-2 pl-2 border-l-1 ${theme.borderColor.plain}`}>
            <Property propertyElement={<PersonIcon />}>
               <Input placeholder="Username" errorMessage={errors.username?.message} className="w-full" {...register("username")} />
            </Property>
            <Property propertyElement={<EnvelopeClosedIcon />}>
               <Input placeholder="Email" errorMessage={errors.email?.message} className="w-full" {...register("email")} />
            </Property>
            <Property propertyElement={<LockClosedIcon />}>
               <Input placeholder="Password" errorMessage={errors.password?.message} className="w-full" {...register("password")} />
            </Property>
            <Property propertyElement={<ImageIcon />}>
               <Input placeholder="Avatar-URL" errorMessage={errors.picture?.message} className="w-full" {...register("picture")} />
            </Property>
            <Button className="w-full">Submit</Button>
         </Flex>
      </form>
   );
};

export default Createuser;
