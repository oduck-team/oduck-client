import profileMock from "./mock/profile.json";

export default class ProfileDev {
  async getProfile() {
    return profileMock;
  }
}
