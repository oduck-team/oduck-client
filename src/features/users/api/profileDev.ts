import profileMock from "./mock/profile.json";

export default class ProfileDevApi {
  async getProfile(): Promise<Profile> {
    return profileMock;
  }
}
