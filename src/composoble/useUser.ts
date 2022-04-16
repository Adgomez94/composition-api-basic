import axios from 'axios'
import { ref } from 'vue'
import { DataEntity, Weather } from '../interfaces/request'

const useUser = () => {
  const isLoading = ref<boolean>(false)
  const users = ref<DataEntity[]>([])
  const currentPage = ref<number>(1)
  const errorMessage = ref<string>('')

  const getUsers = async (page = 1) => {
    if (page <= 0) page = 1

    isLoading.value = true

    const { data } = await axios.get<Weather>('https://reqres.in/api/users', {
      params: { page }
    })

    if (data.data && data.data?.length > 0) {
      users.value = data.data
      currentPage.value = page
      errorMessage.value = ''
    } else if (currentPage.value > 0) {
      errorMessage.value = 'No hay mas registros'
    }

    isLoading.value = false
  }

  getUsers()

  return {
    isLoading,
    users,
    currentPage,
    errorMessage,

    nextPage: () => getUsers(currentPage.value + 1),
    prevPage: () => getUsers(currentPage.value - 1)
  }
}

export default useUser
