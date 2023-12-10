import LoginForm from "../components/Form/Login";
import AuthLayout from "../components/Layout/AuthLayout";

function Login() {
  return (
    <>
    <AuthLayout>
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <LoginForm />
    </AuthLayout>
      
    </>
  );
}

export default Login;
