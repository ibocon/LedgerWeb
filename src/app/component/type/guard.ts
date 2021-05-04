export function isUserModel(model: any): model is UserModel {
  if ("id" && "email" in model) {
    return typeof model.id === "number" && typeof model.email === "string";
  }

  return false;
}

export function isFail(response: any): response is Fail {
  if ("error" in response) {
    if ("message" in response.error) {
      return typeof response.error.message === "string";
    }
  }

  return false;
}
