import { request } from "@/lib/axios";

export function getAnimations() {
  return request.get("/animation");
}
