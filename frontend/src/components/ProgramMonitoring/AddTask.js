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
import axiosInstance from '../../axiosInstance.js'
function AddTask({ open, setOpen, handleAddTask }) {
  function handeleChange(setData, e) {}

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
            onChange={handleChange}
          />
          <CFormTextarea
            id="description"
            name="description"
            placeholder="Description"
            rows={3}
            text="Must be 8-20 words long."
            onChange={handleChange}
          ></CFormTextarea>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="allDay" className="form-check-label">
                All Day Activity:
              </label>
              <input
                type="checkbox"
                id="allDay"
                className="form-check-input"
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <CFormInput
                name="color"
                type="color"
                id="exampleColorInput"
                label="Color :"
                title="Choose your color"
                onChange={handleChange}
              />
            </div>
          </div>

          {allDay ? (
            <>
              <CFormInput
                label="Start Day:"
                type="date"
                id="startDay"
                name="startDate"
                placeholder="Start Day"
                onChange={handleChange}
              />
              <CFormInput
                label="End Day:"
                type="date"
                name="endDate"
                id="endDay"
                placeholder="End Day"
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <CFormInput
                label="Start Date"
                type="date"
                id="startDate"
                name="startDate"
                placeholder="Start Date"
                onChange={handleChange}
              />
              <CFormInput
                label="End Date"
                type="date"
                id="endDate"
                name="endDate"
                placeholder="End Date"
                onChange={handleChange}
              />
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setOpen(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={() => handleAddActivity(activity)}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default AddTask
