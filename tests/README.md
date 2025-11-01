# This is a Python script to initialize the Terraform infrastructure project.
# It uses the Terraform configuration files created in the 'config' directory to provision the infrastructure.

import os
import subprocess

def terraform_init():
    # Navigate to the project directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    # Initialize Terraform
    print("Initializing Terraform...")
    subprocess.run(["terraform", "init"], check=True)

    # Check for any errors
    if os.path.exists(".terraform"):
        print("Terraform initialized successfully.")
    else:
        print("Error initializing Terraform.")

if __name__ == "__main__":
    terraform_init()