import { Command, ux } from "@oclif/core";
import * as fs from "fs";
import * as path from "path";
import { jsonToGo } from "../../json-to-go";

export default class GoConv extends Command {
  static description =
    "Converts json from source file to struct and writes it in the destination file";

  private _errJSONPathIsRequired = "JSON path is required";
  private _errDestinationFilePathIsrequired =
    "Destination file path is required";

  async run(): Promise<void> {
    const from = await ux.prompt("JSON path");
    const to = await ux.prompt("Go File path");
    const packageName = await ux.prompt("Package name");
    const name = await ux.prompt("Name of the Parent Struct", {
      required: false,
    });
    const comment = await ux.prompt("Comment to add in the struct", {
      required: false,
    });

    if (!from) {
      console.error(this._errJSONPathIsRequired);
      process.exit(1);
    }

    if (!to) {
      console.error(this._errDestinationFilePathIsrequired);
      process.exit(1);
    }

    const fullFromPath = path.resolve(from);
    let fullToPath = path.resolve(to);

    const buffer = fs.readFileSync(fullFromPath);
    // Convert json to struct
    const { go, error } = jsonToGo(
      buffer.toString(),
      name,
      true,
      false,
      false,
      comment,
      packageName.toLowerCase()
    );
    if (error) {
      console.error(error);
      process.exit(1);
    }
    // Write to dest
    if (!to.includes(".go")) {
      fullToPath += ".go";
    }
    fs.writeFileSync(fullToPath, go);
    console.log(`Struct written succesfully 🚀 to  ${fullToPath}`);
  }
}
