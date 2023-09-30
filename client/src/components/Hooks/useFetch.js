import React, { useEffect, useState } from 'react'

export default function useFetch( url ) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'))?.token
        const fetchData =async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        Authentication: `Bearer ${token}` 
                    },
                     mode: 'no-cors'
                })
                const result =await res.json()
                setData(result.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError("Can't fetch")
            }
        }
        fetchData()
    }, [url])
    return {
        data,
        loading,
        error
    }
}
