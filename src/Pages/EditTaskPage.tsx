import { LoggedLayout } from "../Layout/LoggedLayout";
import { EditTask } from "../component/EditTask";

export const EditTaskPage = () => {
  return (
    <LoggedLayout title="Edit Task" goBack>
      <EditTask />
    </LoggedLayout>
  );
};
