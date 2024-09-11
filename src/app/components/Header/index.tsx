import Logo from "./Logo";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <SignedOut>
        <SignInButton>
          <button className="text-white text-lg font-bold">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
