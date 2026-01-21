import os
import sys
import argparse
import logging

from infra_terraform import init, plan, apply, destroy

def main():
    parser = argparse.ArgumentParser(description="Terraform script runner")
    parser.add_argument("-i", "--init", action="store_true", help="Initialize Terraform")
    parser.add_argument("-p", "--plan", action="store_true", help="Plan Terraform")
    parser.add_argument("-a", "--apply", action="store_true", help="Apply Terraform")
    parser.add_argument("-d", "--destroy", action="store_true", help="Destroy Terraform")
    args = parser.parse_args()

    if args.init:
        logging.basicConfig(level=logging.INFO)
        init()
        return 0

    if args.plan:
        logging.basicConfig(level=logging.INFO)
        plan()
        return 0

    if args.apply:
        logging.basicConfig(level=logging.INFO)
        apply()
        return 0

    if args.destroy:
        logging.basicConfig(level=logging.INFO)
        destroy()
        return 0

    return 1

if __name__ == "__main__":
    sys.exit(main())