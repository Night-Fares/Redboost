import React, { useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormInput,
  CFormTextarea,
} from '@coreui/react'
import { useSelector } from 'react-redux'
function AddTask({ open, setOpen, handleAddTask }) {
  const [taskName, setTaskName] = useState('')
  const [targetDate, setTargetDate] = useState(new Date())
  const [taskOwner, setTaskOwner] = useState('')
  const users = useSelector((state) => state.usersSlice.users)
  return (
    <>
      <CModal
        visible={open}
        onClose={() => setOpen(false)}
        aria-labelledby="LiveDemoExampleLabel"
        backdrop="static"
      >
        <CModalHeader onClose={() => setOpen(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Add Task</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            id="name"
            name="name"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <CFormInput
            label="Target Day:"
            type="date"
            id="TargetDay"
            name="TargetDate"
            placeholder="Target Day"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
          <CInputGroup className="mb-3">
            <CFormSelect
              aria-label="The Task Owner"
              onChange={(e) => setTaskOwner(e.target.value)}
              value={taskOwner}
            >
              <option>Choose The Task Owner</option>
              {users.map((user) => (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </CFormSelect>
          </CInputGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setOpen(false)}>
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => handleAddTask({ taskName, targetDate, taskOwner })}
          >
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default AddTask
