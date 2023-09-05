import { request } from "@/lib/axios";

import { IAnimation } from "../types";

export function getAnimation(id: number): Promise<IAnimation> {
  return request.get(`/animation/${id}`);
}
