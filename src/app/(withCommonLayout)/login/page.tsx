import { LoginWithEmail } from "./LoginWithEmail";

const loginPage = () => {
  return (
    <div className="dark:bg-dot-white/[0.3] bg-dot-black/[0.3] h-screen flex justify-center items-center">
      <LoginWithEmail />
    </div>
  );
};

export default loginPage;
