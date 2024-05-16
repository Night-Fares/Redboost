import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CButton,
  CFormInput,
} from '@coreui/react'

/*const taskExample = {
  _id: 1,
  taskName: 'Task 1',
  taskOwner: 'Owner 1',
  targetDate: '2024-05-20',
  status: 'inProgress',
  resources: [
    { _id: 1, url: 'resource1.pdf', fileName: 'Resource 1' },
    { _id: 2, url: 'resource2.pdf', fileName: 'Resource 2' },
  ],
  deliverables: [
    { _id: 1, url: 'deliverable1.pdf', fileName: 'Deliverable 1' },
    { _id: 2, url: 'deliverable2.pdf', fileName: 'Deliverable 2' },
  ],
  kpis: [
    { _id: 1, label: 'KPI 1', value: 'Value 1' },
    { _id: 2, label: 'KPI 2', value: 'Value 2' },
  ],
  reportingSection: { title: '', text: '' },
  comment: '',
}*/

const Task = ({ task }) => {
  const [newKpiLabel, setNewKpiLabel] = useState('')
  const [newKpiValue, setNewKpiValue] = useState('')
  const [newDeliverableName, setNewDeliverableName] = useState('')
  const [newRapportTitle, setNewRapportTitle] = useState('')
  const [newRapportText, setNewRapportText] = useState('')
  const [newComment, setNewComment] = useState('')

  const handleAddKpi = (taskIndex) => {}

  const handleAddDeliverable = (taskIndex) => {}

  const handleAddRapport = (taskIndex) => {}

  const handleAddComment = (taskIndex) => {}

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Task Details</CCardHeader>
            <CCardBody>
              <div key={task._id}>
                <p>
                  <strong>Task Name:</strong> {task.taskName}
                </p>
                <p>
                  <strong>Task Owner:</strong> {task.taskOwner}
                </p>
                <p>
                  <strong>Target Date:</strong> {task.targetDate}
                </p>
                <p>
                  <strong>Status:</strong> {task.status}
                </p>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader>Resources</CCardHeader>
            <CCardBody>
              <div key={task._id}>
                <h5>{task.taskName} Resources:</h5>
                <CListGroup>
                  {task.resources.map((resource) => (
                    <CListGroupItem key={resource._id}>
                      <CButton href={resource.url} download color="link">
                        {resource.fileName}
                      </CButton>
                    </CListGroupItem>
                  ))}
                </CListGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard className="mt-3 mb-3">
        <CCardHeader>Sections</CCardHeader>
        <CCardBody>
          <CCard key={task._id} className="mt-3 mb-3">
            <CCardHeader>KPIs</CCardHeader>
            <CCardBody>
              <CListGroup>
                {task.kpis.map((kpi) => (
                  <CListGroupItem key={kpi._id}>
                    <strong>{kpi.label}:</strong> {kpi.value}
                  </CListGroupItem>
                ))}
                <CListGroupItem>
                  <label htmlFor="newKpiLabel">Label:</label>
                  <CFormInput
                    id="newKpiLabel"
                    placeholder="KPI Label"
                    value={newKpiLabel}
                    onChange={(e) => setNewKpiLabel(e.target.value)}
                    className="mt-3 mb-3"
                  />
                  <label htmlFor="newKpiValue">Value:</label>
                  <CFormInput
                    id="newKpiValue"
                    placeholder="KPI Value"
                    value={newKpiValue}
                    onChange={(e) => setNewKpiValue(e.target.value)}
                    className="mt-3 mb-3"
                  />
                  <CButton
                    color="primary"
                    onClick={() => handleAddKpi(task._id - 1)}
                    className="mt-3 mb-3"
                  >
                    Add KPI
                  </CButton>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>

          <CCard key={task._id} className="mt-3 mb-3">
            <CCardHeader>Documents</CCardHeader>
            <CCardBody>
              <CListGroup>
                {task.deliverables.map((deliverable) => (
                  <CListGroupItem key={deliverable._id}>
                    <CButton href={deliverable.url} download color="link">
                      {deliverable.fileName}
                    </CButton>
                  </CListGroupItem>
                ))}
                <CListGroupItem>
                  <label htmlFor="newDeliverableName">Name:</label>
                  <CFormInput
                    id="newDeliverableName"
                    placeholder="Deliverable Name"
                    value={newDeliverableName}
                    onChange={(e) => setNewDeliverableName(e.target.value)}
                  />
                  <label htmlFor="newDeliverableFile" className="mt-3 mb-3">
                    Upload File:
                  </label>
                  <input id="newDeliverableFile" type="file" />
                  <CButton color="primary" onClick={() => handleAddDeliverable(task._id - 1)}>
                    Add Deliverable
                  </CButton>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>

          <CCard key={task._id} className="mt-3 mb-3">
            <CCardHeader>Reporting Section</CCardHeader>
            <CCardBody>
              <CFormInput
                placeholder="Title"
                value={newRapportTitle}
                onChange={(e) => setNewRapportTitle(e.target.value)}
                className="mb-3"
              />
              <CFormInput
                placeholder="Text"
                value={newRapportText}
                onChange={(e) => setNewRapportText(e.target.value)}
                className="mt-3 mb-3"
              />
              <CButton
                color="primary"
                onClick={() => handleAddRapport(task._id - 1)}
                className="mt-3 mb-3"
              >
                Add Reporting Section
              </CButton>
            </CCardBody>
          </CCard>

          <CCard key={task._id} className="mt-3 mb-3">
            <CCardHeader>Comment Section</CCardHeader>
            <CCardBody>
              <CFormInput
                placeholder="Comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <CButton
                color="primary"
                onClick={() => handleAddComment(task._id - 1)}
                className="mt-3 mb-3"
              >
                Add Comment
              </CButton>
            </CCardBody>
          </CCard>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Task
