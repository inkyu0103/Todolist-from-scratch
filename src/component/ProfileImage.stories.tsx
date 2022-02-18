import { Meta, Story } from "@storybook/react";

import { ProfileImage } from "./ProfileImage";

export default {
  // title is optional
  title: "ProfileImageContainer",
  component: ProfileImage,
} as Meta;

const Template: Story<any> = (args) => {
  return <ProfileImage {...args} />;
};
export const Basic = Template.bind({});
