    import Login from "../components/register/Login"
    import Signup from "../components/register/Signup"
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

    const RegisterPage = () => {
        return (
            <div className='mt-24'>
                <div className="w-full">
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-8/12 grid-cols-2 mx-auto bg-[#6441A5]">
                            <TabsTrigger value="login" className="text-white">Login</TabsTrigger>
                            <TabsTrigger value="signup" className="text-white">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <Login />
                        </TabsContent>
                        <TabsContent value="signup">
                            <Signup />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        )
    }

    export default RegisterPage