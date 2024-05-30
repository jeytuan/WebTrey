def manage_tasks(task_params):
    # Implementation of task management
    task_status = {}
    for task, action in task_params.items():
        task_status[task] = f"Task {task} executed with action {action}"
    return task_status
