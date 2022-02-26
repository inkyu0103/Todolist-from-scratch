export interface User {
  email: string;
  id: string;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  password: string;
}

export interface ChangePasswordForm {
  userId: string;
  currentPassword: string;
  changedPassword: string;
}

export interface ChangeProfileForm {
  userId: string;
  profileImageUrl: string;
}
