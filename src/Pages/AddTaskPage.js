import { LoggedLayout } from "../Layout/LoggedLayout";
import { AddTask } from "../component/AddTask";

export const AddTaskPage = () => {
  return (
    <LoggedLayout title="Add a Task" goBack>
      <AddTask />
    </LoggedLayout>
  );
};
