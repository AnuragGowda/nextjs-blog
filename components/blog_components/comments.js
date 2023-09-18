import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

export default function Comments(){
    
    const { theme } = useTheme()

    return (
        <Giscus 
            src="https://giscus.app/client.js"
            repo="AnuragGowda/nextjs-blog"
            repoId="R_kgDOJ4bbxQ"
            category="Announcements"
            categoryId="DIC_kwDOJ4bbxc4CX5pS"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={theme=="light"?"light":"dark_dimmed"}
            lang="en"
            loading="lazy"
        />
    )
}