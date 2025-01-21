import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="container h-auto my-10 mx-auto flex justify-center items-center">
            <SignIn />
        </div>
    );
}
