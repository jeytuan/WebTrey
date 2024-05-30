def report_action(report_data):
    # Implementation of report creation
    report = f"Report generated on {report_data['date']}\n"
    report += f"Target: {report_data['target']}\n"
    for scan, result in report_data['results'].items():
        report += f"\n{scan.upper()} Results:\n"
        report += result
    return report
