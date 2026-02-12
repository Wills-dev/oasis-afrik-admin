import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ChangePasswordWrapper from "@/features/auth/components/ChangePasswordWrapper/ChangePasswordWrapper";

const ChangePasswordPage = () => {
  return (
    <DashboardLayout title="Security">
      <ChangePasswordWrapper />
    </DashboardLayout>
  );
};

export default ChangePasswordPage;
