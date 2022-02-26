import CustomAxios from "../utils/api";

class AuthRepository {
  signUp({ email, password }: { email: string; password: string }) {
    return CustomAxios.post("/auth/signup", { email, password });
  }

  signIn({ email, password }: any) {
    return CustomAxios.post("/auth/signin", { email, password });
  }

  silentSignIn() {
    return CustomAxios.get("/auth/silent-signin");
  }

  signOut() {
    return CustomAxios.get("/auth/signout");
  }

  changePassword({ userId, currentPassword, changedPassword }: any) {
    return CustomAxios.put("/auth/password", {
      userId,
      currentPassword,
      changedPassword,
    });
  }

  changeProfileImageUrl({ userId, profileImageUrl }: any) {
    return CustomAxios.put(`/auth/${userId}/profile-image`, {
      profileImageUrl,
    });
  }
}

export default new AuthRepository();
