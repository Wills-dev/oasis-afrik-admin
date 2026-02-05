import Logo from "@/components/atoms/Logo/Logo";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-r to-green-300  from-green-100">
      <div className="p-8 max-sm:px-6">
        <Logo />
      </div>
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="relative w-full max-w-[531px]">
          <div className="backdrop-blur-2xl bg-white/20 rounded-[20px] p-2">
            <div
              className="relative backdrop-blur-2xl bg-white/90 rounded-[20px] p-8 max-sm:px-4 border border-white/30"
              style={{
                boxShadow: `
                0 8px 32px 0 rgba(31, 38, 135, 0.15),
                inset 0 0 0 1px rgba(255, 255, 255, 0.2),
                0 1px 0 0 rgba(255, 255, 255, 0.4) inset
              `,
              }}
            >
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="sm:text-3xl text-2xl font-semibold text-green-900 ">
                    {title}
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <p className="max-sm:text-sm text-green-950">
                      {description}
                    </p>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
