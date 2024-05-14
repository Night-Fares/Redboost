import React, { useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components'
import axiosInstance from '../axiosInstance'
import ExpiryModal from './ExpiryModal'
import { useDispatch } from 'react-redux'
import { loadPrograms } from '../app/features/programs/programsSlice'
import { loadUsers } from '../app/features/users/usersSlice'
import { loadUserData } from '../app/features/userData/userData'
import { loadTasks } from '../app/features/task/taskSlice'
import { CProgress } from '@coreui/react'

const USER_DATA_PROGRESS = 50
const ALL_DATA_LOADED_PROGRESS = 100

export const DefaultLayout = ({ userEmail }) => {
  console.log('userEmail', userEmail)
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setProgress(USER_DATA_PROGRESS)
        await dispatch(loadUserData(userEmail))

        await Promise.all([dispatch(loadPrograms()), dispatch(loadUsers()), dispatch(loadTasks())])

        setProgress(ALL_DATA_LOADED_PROGRESS)
      } catch (error) {
        console.error('An error occurred while loading data:', error)
        // Optionally set an error state here
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [dispatch, userEmail])

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
