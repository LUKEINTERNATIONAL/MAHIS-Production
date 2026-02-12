import { R as ReportService } from '../index-DkON64uo.js';

class ProgramReportService extends ReportService {
  constructor() {
    super();
  }
  generate(name, params) {
    return this.getReport(`/programs/${this.programId}/reports/${name}`, params);
  }
}

export { ProgramReportService as P };
