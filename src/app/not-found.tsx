import Logo from "@/components/atoms/Logo/Logo";
import Button from "@/components/atoms/Button/Button";
import Container from "@/components/atoms/Container/Container";
import BackButton from "@/components/atoms/BackButton/BackButton";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-white bg-cover bg-center bg-no-repeat">
      <div className="p-8 max-sm:px-4">
        <Logo />
      </div>
      <Container>
        <div className="w-full h-[80vh] flex items-center justify-center ">
          <div
            className="relative backdrop-blur-3xl bg-white/20 rounded-[40px] p-8 max-sm:px-4 border border-white/30"
            style={{
              boxShadow: `
                0 8px 32px 0 rgba(31, 38, 135, 0.15),
                inset 0 0 0 1px rgba(255, 255, 255, 0.2),
                0 1px 0 0 rgba(255, 255, 255, 0.4) inset
              `,
            }}
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-3xl font-bold text-center">
                404 - Page Not Found
              </h1>
              <p className="text-center text-gray-600">
                Oops! The page you are looking for does not exist.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button href="/">Go back to Home</Button>
                <BackButton />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
