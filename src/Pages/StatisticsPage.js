import { LoggedLayout } from "../Layout/LoggedLayout";
import { Statistics } from "../component/Statistics";
export const StatisticsPage = () => {
  return (
    <LoggedLayout title="Statistics" goBack>
      <Statistics />
    </LoggedLayout>
  );
};
