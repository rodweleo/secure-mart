import { useAuth } from "../../use-auth-client"

export default function Login() {
    const { login } = useAuth()
    return (
        <main className="grid place-items-center h-screen p-2.5">
            <div className="space-y-5 grid place-items-center">
                <h1 className="font-bold text-5xl"><span className="text-yellow-500">Secure</span>Mart </h1>
                <div className="border p-5 rounded-md space-y-3 shadow-md">
                    <div>
                        <h1 className="font-bold text-4xl space-y-2">Sign In</h1>
                        <p className="text-slate-500 text-lg">Enter your credentials to access your account</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <label>
                            <input type="text" placeholder="Username" className="bg-slate-100 border rounded-md w-full pl-4 py-2.5" />
                        </label>
                        <label>
                            <input type="password" placeholder="Password" className="bg-slate-100 border rounded-md w-full pl-4 py-2.5" />
                        </label>
                    </div>
                    <div className="flex items-center justify-center text-slate-500"> <span>or</span></div>
                    <button onClick={login} className="flex items-center border font-semibold  text-lg w-full px-5 rounded-lg"><img src="/download (1).png" width="50px" /> Sign in with ICP Authenticator</button>
                </div>
            </div>
        </main>
    )
}