terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}



resource "vercel_project" "example" {
  name      = "fleetmanagement"
  framework = "redwoodjs"
  git_repository = {
    type = "github"
    repo = "github.com/olawuwo-abideen/fleetmanagement"
  }
}


data "vercel_project_directory" "example" {
  path = "."
}

resource "vercel_deployment" "example" {
  project_id  = vercel_project.example.id
  files       = data.vercel_project_directory.example.files
  path_prefix = "."
  production  = true
}