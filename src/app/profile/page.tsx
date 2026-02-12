import ProfileWrapper from "@/components/organisms/ProfileWrapper/ProfileWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const ProfilePage = () => {
  return (
    <DashboardLayout title="Admin info">
      <ProfileWrapper />
    </DashboardLayout>
  );
};

export default ProfilePage;
