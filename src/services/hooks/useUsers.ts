import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

export async function getUsers(currentPage: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users2', {
    params: {
      currentPage
    }
  })
  
  const totalCount = Number(headers['x-total-count'])
    
  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    users,
    totalCount
  };
}

export function useUsers(currentPage: number) {
  const response = useQuery(['users', currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

  if (response.isSuccess) {
    return response
  }

  return {
    data: {
      users: [
        {
          "id": "5",
          "name": "User 5",
          "email": "arjun37@yahoo.com",
          "createdAt": "07 de agosto de 2021"
        },
        {
          "id": "4",
          "name": "User 4",
          "email": "mertie_cartwright57@yahoo.com",
          "createdAt": "07 de agosto de 2021"
        },
      ],
      totalCount: 10
    },
    isLoading: false,
    isFetching: false,
    error: false
  }
}