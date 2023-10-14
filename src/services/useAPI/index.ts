import { useState, useEffect } from "react";
import { AXIOS } from "../../config/axios.config";
import { toast } from "react-toastify";

const useAPI = (run = true, params = null) => {
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const call = async (params) => {
        try {
            const response = await AXIOS[params.method](params.url, params.body).
                then(res => setSuccess(res.data))
                .catch(err => setError(err))
                .finally(() => setLoading(false));
            // .then((response) => {
            //     setSuccess(response.data)
            // })
            // .catch((error) => {
            //     serError(error)
            //     if (error?.response?.data?.detail) {
            //          toast.error(error.response.data.detail, {
            //              position: "bottom-left",
            //              autoClose: 3000,
            //          });
            //     }
            // });
            // const data = await response?.data;
            // setSuccess(data)
        } catch (error) {
            // serError()
        }
    }

    useEffect(() => {
        if (run) {
            call(params)
        }
    }, [success, error, loading])

    return { success, error, call }
}

export default useAPI;