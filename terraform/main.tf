terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
}

module "simple-static-website" {
  source = "github.com/RevolutionTech/opstrich//terraform/modules/simple-static-website"

  github_repo = "letterboard"
  domain_name = "letterboard.revolutiontech.ca"

  tags = {
    Tool = "terraform"
    Repo = "RevolutionTech/letterboard"
    Env  = "prod"
  }
}
