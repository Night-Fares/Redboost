import React from 'react'
import Task from './Task'
import Activity from './Activity'
import { Routes, Route } from 'react-router-dom'
export default function TaskRoutes({ activity }) {
  return (
    <Routes>
      <Route path={`/`} element={<Activity key={activity._id} activity={activity} />} />
      {activity.tasks.map((task) => (
        <Route
          key={task._id}
          path={`${task.name}/*`}
          element={<Task key={task._id} task={task} />}
        />
      ))}
    </Routes>
  )
}
