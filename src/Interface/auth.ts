export interface User {
  email: string;
  id: number;
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
  id: number;
  currentPassword: string;
  changedPassword: string;
}
