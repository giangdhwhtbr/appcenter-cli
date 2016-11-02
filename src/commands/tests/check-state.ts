import { Command, CommandArgs, CommandResult, 
         help, success, name, shortName, longName, required, hasArg,
         position, failure, notLoggedIn } from "../../util/commandLine";
import { out } from "../../util/interaction";
import { getUser } from "../../util/profile";
import { SonomaClient, models, clientCall } from "../../util/apis";

export default class CheckStateCommand extends Command {
  @longName("test-run-id")
  @required
  @hasArg
  testRunId: string;

  @longName("app-name")
  @hasArg
  @required
  applicationName: string;

  @longName("continuous")
  @hasArg
  continuous: boolean;

  constructor(args: CommandArgs) {
    super(args);
    this.continuous = this.continuous != undefined;
  }

  async run(client: SonomaClient): Promise<CommandResult> {
    while (true) {
      let state = await this.getTestRunState(client);
      out.text(JSON.stringify(state));
      out.text(JSON.stringify(this.continuous));

      if (!this.continuous || (typeof state.exitCode === "number")) {
        break;
      }

      out.text(`Waiting ${state.waitTime} seconds...`)
      await this.delay(1000 * state.waitTime);
    }

    return success();
  }

  private async delay(milliseconds: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  private getTestRunState(client: SonomaClient): Promise<any> {
    return clientCall(cb => {
      client.test.getTestRunState(
        this.testRunId,
        getUser().userName,
        this.applicationName,
        cb
      );
    });
  }
}