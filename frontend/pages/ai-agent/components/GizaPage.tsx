// frontend/pages/ai-agent/components/GizaPage.tsx
import React, { useState, useEffect } from 'react';

type Task = {
  id: string;
  name: string;
};

type Dataset = {
  id: string;
  name: string;
};

type Action = {
  id: string;
  name: string;
};

const GizaPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [actions, setActions] = useState<Action[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial data for tasks, datasets, and actions
    // Replace the URLs with your actual API endpoints
    const fetchData = async () => {
      setLoading(true);
      try {
        const [tasksRes, datasetsRes, actionsRes] = await Promise.all([
          fetch('/api/tasks'),
          fetch('/api/datasets'),
          fetch('/api/actions')
        ]);

        const tasksData: Task[] = await tasksRes.json();
        const datasetsData: Dataset[] = await datasetsRes.json();
        const actionsData: Action[] = await actionsRes.json();

        setTasks(tasksData);
        setDatasets(datasetsData);
        setActions(actionsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTaskAction = async (task: Task) => {
    setLoading(true);
    try {
      const response = await fetch('/api/tasks/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });
      const data = await response.json();
      console.log('Task executed:', data);
    } catch (error) {
      console.error('Error executing task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Giza SDK Management</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <h2>Tasks</h2>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  {task.name}
                  <button onClick={() => handleTaskAction(task)}>Execute</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Datasets</h2>
            <ul>
              {datasets.map((dataset) => (
                <li key={dataset.id}>{dataset.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Actions</h2>
            <ul>
              {actions.map((action) => (
                <li key={action.id}>{action.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default GizaPage;
