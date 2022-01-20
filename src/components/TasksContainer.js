import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

export default function TasksContainer() {
  const { tasks } = useSelector((state) => state.tasks)

  return (
    <div className="flex flex-col gap-6">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
        />
      ))}
    </div>
  )
}
