import { R as ReportService } from '../index-BXXm77Z0.js';

class ProgramReportService extends ReportService {
  constructor() {
    super();
  }
  generate(name, params) {
    return this.getReport(`/programs/${this.programId}/reports/${name}`, params);
  }
}

export { ProgramReportService as P };
