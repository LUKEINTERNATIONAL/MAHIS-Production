import { R as ReportService } from '../index-B7cG8YP9.js';

class DefaulterReportService extends ReportService {
  pepfar;
  constructor() {
    super();
    this.pepfar = true;
  }
  setIsPepfar(y) {
    this.pepfar = y;
  }
  getDefaulters() {
    return this.getReport("defaulter_list", { pepfar: this.pepfar });
  }
}

export { DefaulterReportService as D };
