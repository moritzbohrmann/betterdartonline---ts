import Property from "../../../../common/Property";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { useTheme } from "../../../../hooks/useTheme";
import { Button, Flex, Input } from "../../../@ui/_index";

type Props = {};

interface Form {
   email: string;
   password: string;
}

const Schema: ZodType<Form> = z.object({
   email: z.string().email({ message: "Invalid email." }),
   password: z.string(),
});

type UserCredentials = z.infer<typeof Schema>;

const SignIn = ({}: Props) => {
   const { theme } = useTheme();
   const { doLogin } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<UserCredentials>({ resolver: zodResolver(Schema) });

   const onSubmit: SubmitHandler<UserCredentials> = (data) => {
      doLogin(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Flex align="c" orientation="v" className={`ml-2 pl-2 border-l-1 ${theme.borderColor.plain} animate-contentFade`}>
            <Property propertyElement={<EnvelopeClosedIcon />}>
               <Input placeholder="Email" className="w-full" errorMessage={errors.email?.message} {...register("email")} />
            </Property>
            <Property propertyElement={<LockClosedIcon />}>
               <Input placeholder="Password" className="w-full" errorMessage={errors.password?.message} {...register("password")} />
            </Property>
            <Button className="w-full">Login</Button>
         </Flex>
      </form>
   );
};

export default SignIn;
