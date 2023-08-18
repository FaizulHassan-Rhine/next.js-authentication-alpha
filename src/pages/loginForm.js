import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signIn } from "next-auth/react";
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import auth from '@/Firebase/firebase.auth';
const loginForm = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user)
    console.log(user?.user?.email)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data.email)
    };


    return (
        <div className="p-8 lg:w-1/2 mx-auto">
            <div className="bg-white rounded-t-lg p-8">
                <p className="text-center text-sm text-gray-400 font-light">Sign in with</p>
                <div>
                    <div className="flex items-center justify-center space-x-4 mt-3">
                        <button onClick={() => signIn("github", {
                            callbackUrl: "http://localhost:3000/"
                        })} className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">

                            <FaGithubSquare className="mr-2 h-6 w-6 text-black" />  Github
                        </button>
                        <button onClick={() => signIn("google", {
                            callbackUrl: "http://localhost:3000/"
                        })} className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">

                            <FaGoogle className="mr-2 h-5 w-5 text-green-500" /> Google
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <p className="text-center text-sm text-gray-500 font-light">Or sign in with credentials</p>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email input */}
                    <div className="relative">
                        <input
                            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username"
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center">

                            {/* Email SVG path */}

                        </div>
                    </div>
                    {/* Password input */}
                    <div className="relative mt-3">
                        <input
                            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center">

                        </div>
                    </div>
                    {/* Remember me checkbox */}
                    <div className="mt-4 flex items-center text-gray-500">
                        <input type="checkbox" id="remember" name="remember" className="mr-3" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    {/* Sign in button */}
                    <div className="flex items-center justify-center mt-8">
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default loginForm;