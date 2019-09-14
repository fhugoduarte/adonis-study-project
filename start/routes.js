"use strict";

const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("sessions", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Route.get("files/:id", "FileController.show");

Route.group(() => {
  Route.post("files", "FileController.store");

  Route.resource("projects", "ProjectController").apiOnly();
}).middleware(["auth"]);
