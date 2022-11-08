import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - IS Cloud Kitchen`;
    }, [title])
}

export default useTitle