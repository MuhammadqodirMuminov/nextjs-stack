import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Home = () => {
	return (
		<div>
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
			Home
		</div>
	);
};

export default Home;
