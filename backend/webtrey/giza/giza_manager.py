from .actions.analyze_logs_action import analyze_logs_action
from .actions.scan_vuln_action import scan_vuln_action
from .actions.report_action import report_action
from .datasets.create_datasets import create_dataset
from .tasks.manage_tasks import manage_tasks

class GizaManager:
    def __init__(self):
        pass

    def analyze_logs(self, log_file_path):
        return analyze_logs_action(log_file_path)

    def scan_vulnerabilities(self, target):
        return scan_vuln_action(target)

    def create_report(self, report_data):
        return report_action(report_data)

    def create_dataset(self, dataset_params):
        return create_dataset(dataset_params)

    def manage_task(self, task_params):
        return manage_tasks(task_params)
