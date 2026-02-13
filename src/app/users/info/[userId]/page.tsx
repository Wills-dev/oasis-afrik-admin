import { use } from "react";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import UserInfoWrapper from "@/components/organisms/UserInfoWrapper/UserInfoWrapper";

const UserInfoPage = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);

  return (
    <DashboardLayout title="User info">
      <UserInfoWrapper userId={userId} />
    </DashboardLayout>
  );
};

export default UserInfoPage;
