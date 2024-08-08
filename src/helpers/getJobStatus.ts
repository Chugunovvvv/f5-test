export enum JobStateEnum {
   WAITING = "WAITING",
   AVAILABLE = "AVAILABLE",
   PAUSED = "PAUSED",
   EXECUTING = "EXECUTING",
   FINISHED = "FINISHED"
}
export function getJobStatusInRussian(state: string) {
   switch (state) {
      case JobStateEnum.WAITING:
         return "Ожидает в очереди";
      case JobStateEnum.AVAILABLE:
         return "Можно приступить к выполнению";
      case JobStateEnum.PAUSED:
         return "Приостановлена";
      case JobStateEnum.EXECUTING:
         return "Выполняется";
      case JobStateEnum.FINISHED:
         return "Завершена";
      default:
         return "Не указано";
   }
}