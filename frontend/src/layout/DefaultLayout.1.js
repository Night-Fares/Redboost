import React, { useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components'
import ExpiryModal from './ExpiryModal'
import { useDispatch } from 'react-redux'
import { loadPrograms } from '../app/features/programs/programsSlice'
import { loadUsers } from '../app/features/users/usersSlice'
import { loadTasks } from '../app/features/task/taskSlice'
import { CProgress } from '@coreui/react'

const LOAD_PROGRAMS_PROGRESS = 33
const LOAD_USERS_PROGRESS = 66
const LOAD_TASKS_PROGRESS = 100

export const DefaultLayout = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)

        dispatch(loadPrograms())
        setProgress(LOAD_PROGRAMS_PROGRESS)
        dispatch(loadUsers())
        setProgress(LOAD_USERS_PROGRESS)
        dispatch(loadTasks())
        setProgress(LOAD_TASKS_PROGRESS)
      } catch (error) {
        console.error('An error occurred while loading data:', error)
        // Optionally set an error state here
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [dispatch])

  if (loading) {
    return (
      <div className="progress-wrapper">
        <CProgress value={progress} color="success" variant="striped" animated>
          {progress}%
        </CProgress>
        {error && <p className="text-danger">{error}</p>}
      </div>
    )
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      <ExpiryModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </div>
  )
}
