import { NodePlopAPI } from "plop"
import path from 'path'

const ROOT_MONOREPO = path.resolve("..", "..")


export default function (plop: NodePlopAPI) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [], // array of inquirer prompts
    actions: [],
  })

  commonPackage(plop)
}

function commonPackage(plop: NodePlopAPI) {
  plop.setGenerator("common-package", {
    description: "For create common packages",
    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "What is the package name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: path.resolve(ROOT_MONOREPO, "commons", "{{ lowerCase packageName }}", "package.json"),
        templateFile: "templates/common-package/package.json.hbs"
      }
    ],
  })
}
