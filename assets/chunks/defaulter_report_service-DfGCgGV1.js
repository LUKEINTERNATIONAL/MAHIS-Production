import { R as ReportService } from '../index-BMd37Dhs.js';

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
