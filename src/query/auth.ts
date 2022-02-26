import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signInSuccess } from "../redux/slice/authSlice";
import AuthRepository from "../Repository/AuthRepository";
import { clearAuthToken, setAuthToken } from "../utils/api";
import {
  SignInForm,
  SignUpForm,
  ChangePasswordForm,
  ChangeProfileForm,
} from "../Interface/index";

export const useSignupMutation = () => {
  const history = useHistory();

  return useMutation(
    ({ email, password }: SignUpForm) =>
      AuthRepository.signUp({ email, password }),
    {
      onSuccess: () => {
        history.push("/login");
      },
    }
  );
};

export const useSigninMutaion = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return useMutation(
    ({ email, password }: SignInForm) =>
      AuthRepository.signIn({ email, password }),
    {
      onSuccess: ({ accessToken, user }: any) => {
        setAuthToken(accessToken);
        dispatch(signInSuccess(user));
        history.push(`/${user.userId}`);
      },
      onError: () => alert("로그인에 실패"),
    }
  );
};

export const useSilentSigninQuery = () => {
  const dispatch = useDispatch();

  return useQuery<any>("silentSignin", AuthRepository.silentSignIn, {
    onSuccess: ({ accessToken, user }: any) => {
      setAuthToken(accessToken);
      dispatch(signInSuccess(user));
    },
  });
};

export const useSignoutQuery = () => {
  const history = useHistory();

  return useQuery<any>("signout", AuthRepository.signOut, {
    onSuccess: () => {
      clearAuthToken();
      history.push("/");
    },
  });
};

export const useChangePasswordMutation = () => {
  return useMutation(
    ({ userId, currentPassword, changedPassword }: ChangePasswordForm) =>
      AuthRepository.changePassword({
        userId,
        currentPassword,
        changedPassword,
      })
  );
};

export const useChangeProfileImageUrlMutation = () => {
  return useMutation(({ userId, profileImageUrl }: ChangeProfileForm) =>
    AuthRepository.changeProfileImageUrl({ userId, profileImageUrl })
  );
};
