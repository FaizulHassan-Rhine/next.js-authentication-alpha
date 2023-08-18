import auth from "@/Firebase/firebase.auth";
import { useSession } from "next-auth/react"
import { useAuthState } from 'react-firebase-hooks/auth';
const profile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    const { data: session } = useSession()
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1>Name:{session?.user?.name}</h1>
            <h1>Email:{user?.email}</h1>
        </div>
    );
};

export default profile;