import pm2, { ProcessDescription } from "pm2";

export class ListProcessesUseCase {
  public async execute(): Promise<ProcessDescription[]> {
    let processes: ProcessDescription[];

    pm2.list((err, process) => {
      processes = process;
    });

    return processes;
  }
}
