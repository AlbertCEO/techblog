import { useSelector } from "react-redux"

export default function ThemeProvider({children}) {
    const { theme } = useSelector(state => state.theme)
   
   return <div className={theme}> 
        <div className="bg-white text-gray-700 dark:text-gray-200 darkbg-[rgb(16,23,42]">    
        {children}
    </div>
    </div>
}