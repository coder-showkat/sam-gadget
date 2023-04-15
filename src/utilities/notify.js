import { toast } from "react-toastify";

export const notifySuccess = (notification) => {
    toast.success(notification, {
        autoClose: 2000,
        theme: "dark",
        position: "top-center",  
    })
}
export const notifyWarning = (notification) => {
    toast.warn(notification, {
        autoClose: 2000,
        theme: "dark",
        position: "top-center",  
    })
}
export const notifyError = (notification) => {
    toast.error(notification, {
        autoClose: 2000,
        theme: "dark",
        position: "top-center",  
    })
}