import { Command, Flags } from "@oclif/core";
import * as fs from "fs";
import * as path from "path";
import { jsonToGo } from "../../json-to-go";

export default class GoConv extends Command {
  static description =
    "Converts json from source file to struct and writes it in the destination file";

  static examples = [
    `
    $ goconv --from ./foo.json --to ./foo/bar.go --name 'StructName' --comment 'Test struct'
    `,
  ];

  static flags = {
    from: Flags.string({
      char: "f",
      description: "File path of the json for which the struct is required",
      required: true,
    }),
    to: Flags.string({
      char: "t",
      description: "File path of the converted struct to be written",
      required: true,
    }),
    name: Flags.string({
      char: "n",
      description: "Name of the parent struct",
    }),
    comment: Flags.string({
      char: "c",
      description: "Comment to write for the parent struct",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(GoConv);
    // Resolve path
    const resolvedPath = path.resolve(flags.from);
    const buffer = fs.readFileSync(resolvedPath);
    // Convert json to struct
    const { go, error } = jsonToGo(
      buffer.toString(),
      flags.name,
      true,
      false,
      false,
      flags.comment
    );
    if (error) {
      console.error(error);
      process.exit(1);
    }
    // Write to dest
    fs.writeFileSync(path.resolve(flags.to),go);
  }
}
